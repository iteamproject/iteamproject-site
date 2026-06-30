import { serviceMetadata } from "@/lib/seo";
import { serviceStructuredData } from "@/lib/schema";
import ServicePage from "@/components/services/ServicePage";
import StructuredData from "@/components/site/StructuredData";

export const metadata = serviceMetadata("it-service-management", "it");

export default function ItalianItServiceManagementServiceRoute() {
  return (
    <>
      <StructuredData data={serviceStructuredData("it-service-management", "it")} />
      <ServicePage slug="it-service-management" locale="it" />
    </>
  );
}
