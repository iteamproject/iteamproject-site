import { serviceIndexMetadata } from "@/lib/seo";
import { serviceIndexStructuredData } from "@/lib/schema";
import ServiceIndexPage from "@/components/services/ServiceIndexPage";
import StructuredData from "@/components/site/StructuredData";

export const metadata = serviceIndexMetadata.en;

export default function EnglishServiceIndexRoute() {
  return (
    <>
      <StructuredData data={serviceIndexStructuredData("en")} />
      <ServiceIndexPage locale="en" />
    </>
  );
}
