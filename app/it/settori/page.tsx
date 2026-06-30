import { sectorIndexMetadata } from "@/lib/seo";
import { sectorIndexStructuredData } from "@/lib/schema";
import SectorIndexPage from "@/components/sectors/SectorIndexPage";
import StructuredData from "@/components/site/StructuredData";

export const metadata = sectorIndexMetadata.it;

export default function ItalianSectorIndexRoute() {
  return (
    <>
      <StructuredData data={sectorIndexStructuredData("it")} />
      <SectorIndexPage locale="it" />
    </>
  );
}
