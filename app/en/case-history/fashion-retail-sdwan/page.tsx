import { fashionRetailSdwanMetadata } from "@/lib/seo";
import { caseHistoryStructuredData } from "@/lib/schema";
import CaseHistoryPage from "@/components/case-history/CaseHistoryPage";
import StructuredData from "@/components/site/StructuredData";

export const metadata = fashionRetailSdwanMetadata.en;

export default function EnglishFashionRetailSdwanCaseHistoryPage() {
  return (
    <>
      <StructuredData data={caseHistoryStructuredData("fashion-retail-sdwan", "en")} />
      <CaseHistoryPage slug="fashion-retail-sdwan" locale="en" />
    </>
  );
}
