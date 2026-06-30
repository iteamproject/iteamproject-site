import { sectorIndexMetadata } from "@/lib/seo";
import { sectorIndexStructuredData } from "@/lib/schema";
import SectorIndexPage from "@/components/sectors/SectorIndexPage";
import StructuredData from "@/components/site/StructuredData";

export const metadata = sectorIndexMetadata.en;

export default function EnglishSectorIndexRoute() {
  return (
    <>
      <StructuredData data={sectorIndexStructuredData("en")} />
      <SectorIndexPage locale="en" />
    </>
  );
}
