import Link from "next/link";
import { site } from "@/data/site";
import { routes, type Locale } from "@/lib/routes";

type FooterProps = {
  locale: Locale;
};

export default function Footer({ locale }: FooterProps) {
  return (
    <footer className="border-t-2 border-slate-950 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 lg:px-8">
        <div>
          <span className="font-semibold text-slate-700">{site.name}</span> · {site.payoff}
        </div>
        <div>
          {site.legalName} | {site.address} | P. IVA {site.vat} | Codice Univoco {site.recipientCode}
        </div>
        <div>
          {site.email} | {site.pec}
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href={routes.privacy[locale]} className="transition hover:text-emerald-600">
            Privacy Policy
          </Link>
          <Link href={routes.cookies[locale]} className="transition hover:text-emerald-600">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
