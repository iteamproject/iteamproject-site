import { serviceMetadata } from "@/lib/seo";
import { serviceStructuredData } from "@/lib/schema";
import ServicePage from "@/components/services/ServicePage";
import StructuredData from "@/components/site/StructuredData";

export const metadata = serviceMetadata("it-governance", "it");

export default function ItalianItGovernanceServiceRoute() {
  return (
    <>
      <StructuredData data={serviceStructuredData("it-governance", "it")} />
      <ServicePage slug="it-governance" locale="it" />
    </>
  );
}
