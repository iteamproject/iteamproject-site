import { serviceMetadata } from "@/lib/seo";
import { serviceStructuredData } from "@/lib/schema";
import ServicePage from "@/components/services/ServicePage";
import StructuredData from "@/components/site/StructuredData";

export const metadata = serviceMetadata("it-service-management", "en");

export default function EnglishItServiceManagementServiceRoute() {
  return (
    <>
      <StructuredData data={serviceStructuredData("it-service-management", "en")} />
      <ServicePage slug="it-service-management" locale="en" />
    </>
  );
}
