import { serviceMetadata } from "@/lib/seo";
import { serviceStructuredData } from "@/lib/schema";
import ServicePage from "@/components/services/ServicePage";
import StructuredData from "@/components/site/StructuredData";

export const metadata = serviceMetadata("project-delivery-control", "it");

export default function ItalianProjectDeliveryControlServiceRoute() {
  return (
    <>
      <StructuredData data={serviceStructuredData("project-delivery-control", "it")} />
      <ServicePage slug="project-delivery-control" locale="it" />
    </>
  );
}
