import { Globe, Mail, MapPin } from "lucide-react";
import { site } from "@/data/site";

type CTASectionProps = {
  label: string;
  title: string;
  text: string;
  emailLabel: string;
  officeLabel: string;
  focusLabel: string;
  focusText: string;
};

export default function CTASection({
  label,
  title,
  text,
  emailLabel,
  officeLabel,
  focusLabel,
  focusText,
}: CTASectionProps) {
  return (
    <section id="cta" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              {label}
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              {text}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="space-y-5 text-sm text-slate-200">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0" />
                <div>
                  <div className="text-slate-400">{emailLabel}</div>
                  <div className="mt-1 font-medium">{site.email}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                <div>
                  <div className="text-slate-400">{officeLabel}</div>
                  <div className="mt-1 font-medium">{site.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="mt-0.5 h-5 w-5 shrink-0" />
                <div>
                  <div className="text-slate-400">{focusLabel}</div>
                  <div className="mt-1 font-medium">{focusText}</div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300">
                <div>P. IVA {site.vat}</div>
                <div>Codice Univoco {site.recipientCode}</div>
                <div>PEC: {site.pec}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
