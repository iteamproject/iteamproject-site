import CaseHistoryPage from "./CaseHistoryPage";
import type { Locale } from "@/lib/routes";

export default function FashionRetailSdwanCaseHistoryPage({
  initialLang = "it",
}: {
  initialLang?: Locale;
}) {
  return <CaseHistoryPage slug="fashion-retail-sdwan" locale={initialLang} />;
}
