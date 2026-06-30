import { itGovernanceServiceManagementMetadata } from "@/lib/seo";
import { caseHistoryStructuredData } from "@/lib/schema";
import CaseHistoryPage from "@/components/case-history/CaseHistoryPage";
import StructuredData from "@/components/site/StructuredData";

export const metadata = itGovernanceServiceManagementMetadata.en;

export default function EnglishItGovernanceServiceManagementCaseHistoryPage() {
  return (
    <>
      <StructuredData
        data={caseHistoryStructuredData("it-governance-service-management", "en")}
      />
      <CaseHistoryPage slug="it-governance-service-management" locale="en" />
    </>
  );
}
