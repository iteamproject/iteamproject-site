import { itGovernanceServiceManagementMetadata } from "@/lib/seo";
import { caseHistoryStructuredData } from "@/lib/schema";
import CaseHistoryPage from "@/components/case-history/CaseHistoryPage";
import StructuredData from "@/components/site/StructuredData";

export const metadata = itGovernanceServiceManagementMetadata.it;

export default function ItalianItGovernanceServiceManagementCaseHistoryPage() {
  return (
    <>
      <StructuredData
        data={caseHistoryStructuredData("it-governance-service-management", "it")}
      />
      <CaseHistoryPage slug="it-governance-service-management" locale="it" />
    </>
  );
}
