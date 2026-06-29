import { caseHistoryIndexMetadata } from "@/lib/seo";
import { caseHistoryIndexStructuredData } from "@/lib/schema";
import CaseHistoryIndexPage from "@/components/case-history/CaseHistoryIndexPage";
import StructuredData from "@/components/site/StructuredData";

export const metadata = caseHistoryIndexMetadata.en;

export default function EnglishCaseHistoryIndexRoute() {
  return (
    <>
      <StructuredData data={caseHistoryIndexStructuredData("en")} />
      <CaseHistoryIndexPage locale="en" />
    </>
  );
}
