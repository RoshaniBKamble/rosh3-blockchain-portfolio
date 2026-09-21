import { useEffect, useState } from "react";

// Tags are written at runtime so absolute URLs come from the live origin —
// the template cannot know which domain an app will be deployed on.
const MARK = "data-seo";

// The title index.html shipped with, captured before any <Seo> overwrites it,
// so clearing the prop restores it rather than leaving the last page's title.
const fallbackTitle = typeof document === "undefined" ? "" : document.title;

const upsertMeta = (attr, key, content) => {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector(selector);
  if (!content) {
    if (el?.hasAttribute(MARK)) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    el.setAttribute(MARK, "");
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertLink = (rel, href) => {
  let el = document.head.querySelector(`link[rel="${rel}"][${MARK}]`);
  if (!href) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    el.setAttribute(MARK, "");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const upsertJsonLd = (data) => {
  const el = document.head.querySelector(`script[${MARK}][type="application/ld+json"]`);
  if (!data) {
    el?.remove();
    return;
  }
  const script = el || document.createElement("script");
  script.setAttribute("type", "application/ld+json");
  script.setAttribute(MARK, "");
  script.textContent = JSON.stringify(data);
  if (!el) document.head.appendChild(script);
};

// Route changes must retrigger the effect: <Seo /> may sit outside the router
// (App.js mounts it above <BrowserRouter>), where navigating re-renders nothing.
// history.pushState/replaceState fire no event, so patch them once, globally.
const routeListeners = new Set();
let historyPatched = false;

const patchHistoryOnce = () => {
  if (historyPatched) return;
  historyPatched = true;
  const notify = () => routeListeners.forEach((fn) => fn());
  const { pushState, replaceState } = window.history;
  window.history.pushState = function (...args) {
    pushState.apply(this, args);
    notify();
  };
  window.history.replaceState = function (...args) {
    replaceState.apply(this, args);
    notify();
  };
  window.addEventListener("popstate", notify);
};

const usePathname = () => {
  const [pathname, setPathname] = useState(() => window.location.pathname);
  useEffect(() => {
    patchHistoryOnce();
    const sync = () => setPathname(window.location.pathname);
    routeListeners.add(sync);
    sync();
    return () => routeListeners.delete(sync);
  }, []);
  return pathname;
};

/**
 * Seo — sets title, canonical, Open Graph, Twitter card and JSON-LD.
 * Renders nothing. Omit a prop and its tag is left out rather than guessed.
 */
export default function Seo({
  title,
  description,
  image,
  type = "website",
  siteName,
  jsonLd,
}) {
  const pathname = usePathname();

  useEffect(() => {
    const { origin } = window.location;
    const url = `${origin}${pathname}`;
    const imageUrl = image ? new URL(image, origin).href : undefined;

    document.title = title || fallbackTitle;

    upsertLink("canonical", url);
    upsertMeta("name", "description", description);

    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:site_name", siteName || title);
    upsertMeta("property", "og:image", imageUrl);

    upsertMeta("name", "twitter:card", imageUrl ? "summary_large_image" : "summary");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);

    upsertJsonLd(jsonLd);
  }, [pathname, title, description, image, type, siteName, jsonLd]);

  return null;
}
