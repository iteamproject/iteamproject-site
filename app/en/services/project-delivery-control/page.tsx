import { serviceMetadata } from "@/lib/seo";
import { serviceStructuredData } from "@/lib/schema";
import ServicePage from "@/components/services/ServicePage";
import StructuredData from "@/components/site/StructuredData";

export const metadata = serviceMetadata("project-delivery-control", "en");

export default function EnglishProjectDeliveryControlServiceRoute() {
  return (
    <>
      <StructuredData data={serviceStructuredData("project-delivery-control", "en")} />
      <ServicePage slug="project-delivery-control" locale="en" />
    </>
  );
}
