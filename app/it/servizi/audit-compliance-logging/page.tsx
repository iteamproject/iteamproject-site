import { serviceMetadata } from "@/lib/seo";
import { serviceStructuredData } from "@/lib/schema";
import ServicePage from "@/components/services/ServicePage";
import StructuredData from "@/components/site/StructuredData";

export const metadata = serviceMetadata("audit-compliance-logging", "it");

export default function ItalianAuditComplianceLoggingServiceRoute() {
  return (
    <>
      <StructuredData data={serviceStructuredData("audit-compliance-logging", "it")} />
      <ServicePage slug="audit-compliance-logging" locale="it" />
    </>
  );
}
