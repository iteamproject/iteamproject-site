import { serviceMetadata } from "@/lib/seo";
import { serviceStructuredData } from "@/lib/schema";
import ServicePage from "@/components/services/ServicePage";
import StructuredData from "@/components/site/StructuredData";

export const metadata = serviceMetadata("audit-compliance-logging", "en");

export default function EnglishAuditComplianceLoggingServiceRoute() {
  return (
    <>
      <StructuredData data={serviceStructuredData("audit-compliance-logging", "en")} />
      <ServicePage slug="audit-compliance-logging" locale="en" />
    </>
  );
}
