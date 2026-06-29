import { fashionRetailSdwanMetadata } from "@/lib/seo";
import { caseHistoryStructuredData } from "@/lib/schema";
import CaseHistoryPage from "@/components/case-history/CaseHistoryPage";
import StructuredData from "@/components/site/StructuredData";

export const metadata = fashionRetailSdwanMetadata.it;

export default function ItalianFashionRetailSdwanCaseHistoryPage() {
  return (
    <>
      <StructuredData data={caseHistoryStructuredData("fashion-retail-sdwan", "it")} />
      <CaseHistoryPage slug="fashion-retail-sdwan" locale="it" />
    </>
  );
}
