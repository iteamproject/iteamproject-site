import { serviceMetadata } from "@/lib/seo";
import { serviceStructuredData } from "@/lib/schema";
import ServicePage from "@/components/services/ServicePage";
import StructuredData from "@/components/site/StructuredData";

export const metadata = serviceMetadata("it-governance", "en");

export default function EnglishItGovernanceServiceRoute() {
  return (
    <>
      <StructuredData data={serviceStructuredData("it-governance", "en")} />
      <ServicePage slug="it-governance" locale="en" />
    </>
  );
}
