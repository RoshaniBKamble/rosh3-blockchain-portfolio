import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Seo from "@/components/Seo";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Stack } from "@/components/Stack";
import { Engineering } from "@/components/Engineering";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { Achievement } from "@/components/Achievement";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { scrollToId } from "@/lib/scroll";
import { site } from "@/data/site";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (target) {
      const t = setTimeout(() => scrollToId(target), 150);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [location.state]);

  return (
    <div className="min-h-screen bg-void text-slate-100">
      <Seo
        title="Roshani Kamble — Blockchain & Web3 Developer"
        siteName="Roshani Kamble"
        description="Blockchain and Web3 developer building Ethereum smart contracts, decentralized applications, DeFi systems, blockchain security tools, and verification platforms."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: site.name,
          jobTitle: site.title,
          email: `mailto:${site.email}`,
          address: { "@type": "PostalAddress", addressLocality: "Pune", addressRegion: "Maharashtra", addressCountry: "IN" },
          sameAs: [site.github, site.linkedin],
          knowsAbout: ["Solidity", "Ethereum", "Smart Contracts", "Web3", "DeFi", "Smart Contract Security"],
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Stack />
        <Engineering />
        <Projects />
        <Process />
        <Achievement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
