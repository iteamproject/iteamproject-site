import { serviceIndexMetadata } from "@/lib/seo";
import { serviceIndexStructuredData } from "@/lib/schema";
import ServiceIndexPage from "@/components/services/ServiceIndexPage";
import StructuredData from "@/components/site/StructuredData";

export const metadata = serviceIndexMetadata.it;

export default function ItalianServiceIndexRoute() {
  return (
    <>
      <StructuredData data={serviceIndexStructuredData("it")} />
      <ServiceIndexPage locale="it" />
    </>
  );
}
