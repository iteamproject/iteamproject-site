import { policies, type PolicyKind } from "@/data/policies";
import { routes, type Locale } from "@/lib/routes";
import CookieBanner from "./CookieBanner";
import Footer from "./Footer";
import Header from "./Header";

type PolicyLayoutProps = {
  kind: PolicyKind;
  locale: Locale;
};

const languageTargets: Record<PolicyKind, Record<Locale, string>> = {
  privacy: {
    it: routes.privacy.it,
    en: routes.privacy.en,
  },
  cookies: {
    it: routes.cookies.it,
    en: routes.cookies.en,
  },
};

export default function PolicyLayout({ kind, locale }: PolicyLayoutProps) {
  const policy = policies[kind][locale];

  return (
    <>
      <Header
        locale={locale}
        homeHref={routes.home[locale]}
        languageTargets={languageTargets[kind]}
      />

      <main className="min-h-screen bg-white text-slate-800">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
            {policy.title}
          </h1>

          <p className="mt-6 text-base leading-8 text-slate-600">
            {policy.updatedAt}
          </p>

          <div className="mt-12 space-y-10">
            {policy.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold text-slate-950">
                  {section.title}
                </h2>

                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 whitespace-pre-line leading-8 text-slate-600"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.items ? (
                  <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-slate-600">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}

                {section.subsections ? (
                  <div className="mt-4 space-y-6 leading-8 text-slate-600">
                    {section.subsections.map((subsection) => (
                      <div key={subsection.title}>
                        <h3 className="font-semibold text-slate-900">
                          {subsection.title}
                        </h3>
                        <p className="mt-2">{subsection.text}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer locale={locale} />
      <CookieBanner />
    </>
  );
}
