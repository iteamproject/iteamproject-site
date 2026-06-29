"use client";

import { useMemo, useState, useEffect } from "react";
import { homeCopyByLocale } from "@/data/home";
import { routes, type Locale } from "@/lib/routes";
import CookieBanner from "@/components/site/CookieBanner";
import CTASection from "@/components/site/CTASection";
import Footer from "@/components/site/Footer";
import Header, { type HeaderNavItem } from "@/components/site/Header";
import About from "./About";
import CaseHistoryTeaser from "./CaseHistoryTeaser";
import Hero from "./Hero";
import Method from "./Method";
import Outcomes from "./Outcomes";
import Problems from "./Problems";
import Sectors from "./Sectors";
import Services from "./Services";

export default function HomePage({ initialLang = "it" }: { initialLang?: Locale }) {
  const lang = initialLang;
  const [activeSection, setActiveSection] = useState<string>("#chi-siamo");
  const t = useMemo(() => homeCopyByLocale[lang], [lang]);
  const navItems = useMemo<HeaderNavItem[]>(
    () =>
      t.navItems.map((item) => ({
        ...item,
        href: item.href.startsWith("/case-history")
          ? `/${lang}${item.href}`
          : item.href,
      })),
    [lang, t.navItems]
  );

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [lang]);

  return (
    <div className="min-h-screen bg-white pt-20 text-slate-900 scroll-smooth">
      <Header
        locale={lang}
        homeHref={routes.home[lang]}
        languageTargets={routes.home}
        navItems={navItems}
        activeHref={activeSection}
        position="fixed"
      />

      <Hero
        locale={lang}
        title={t.heroTitle}
        text={t.heroText}
        ctaPrimary={t.ctaPrimary}
        ctaSecondary={t.ctaSecondary}
      />

      <About locale={lang} />

      <Services
        locale={lang}
        label={t.servicesLabel}
        title={t.servicesTitle}
        text={t.servicesText}
      />

      <Problems
        locale={lang}
        label={t.problemsLabel}
        title={t.problemsTitle}
        text={t.problemsText}
        bridge={t.problemsBridge}
        ctaLabel={t.problemsCta}
      />

      <Outcomes
        locale={lang}
        label={t.outcomesLabel}
        title={t.outcomesTitle}
        text={t.outcomesText}
      />

      <Method
        locale={lang}
        label={t.methodLabel}
        title={t.methodTitle}
        text={t.methodText}
      />

      <Sectors
        locale={lang}
        label={t.sectorsLabel}
        title={t.sectorsTitle}
        text={t.sectorsText}
      />
      <CaseHistoryTeaser
        locale={lang}
        label={t.caseHistoryLabel}
        title={t.caseHistoryTitle}
        text={t.caseHistoryText}
        ctaLabel={t.caseHistoryCta}
      />


      <CTASection
        label={t.contactLabel}
        title={t.contactTitle}
        text={t.contactText}
        emailLabel={t.emailLabel}
        officeLabel={t.officeLabel}
        focusLabel={t.focusLabel}
        focusText={t.focusText}
      />

      <Footer locale={lang} />

      <CookieBanner />
    </div>
  );
}
