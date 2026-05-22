"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("iteamproject-cookie-consent");

    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("iteamproject-cookie-consent", "accepted");
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("iteamproject-cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-5 right-5 z-[9999] mx-auto max-w-4xl rounded-3xl border border-emerald-200 bg-white/95 p-5 shadow-2xl backdrop-blur">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">
            Privacy & Cookie
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-600">
            Questo sito utilizza cookie tecnici e strumenti analytics per
            migliorare esperienza, sicurezza e performance del servizio.
          </p>
        </div>

        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={rejectCookies}
            className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
          >
            Rifiuta
          </button>

          <button
            type="button"
            onClick={acceptCookies}
            className="rounded-2xl bg-slate-950 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}