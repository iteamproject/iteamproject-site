import { caseHistoryIndexMetadata } from "@/lib/seo";
import { caseHistoryIndexStructuredData } from "@/lib/schema";
import CaseHistoryIndexPage from "@/components/case-history/CaseHistoryIndexPage";
import StructuredData from "@/components/site/StructuredData";

export const metadata = caseHistoryIndexMetadata.it;

export default function ItalianCaseHistoryIndexRoute() {
  return (
    <>
      <StructuredData data={caseHistoryIndexStructuredData("it")} />
      <CaseHistoryIndexPage locale="it" />
    </>
  );
}
