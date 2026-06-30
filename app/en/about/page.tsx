import { aboutMetadata } from "@/lib/seo";
import { aboutStructuredData } from "@/lib/schema";
import AboutPage from "@/components/about/AboutPage";
import StructuredData from "@/components/site/StructuredData";

export const metadata = aboutMetadata.en;

export default function EnglishAboutRoute() {
  return (
    <>
      <StructuredData data={aboutStructuredData("en")} />
      <AboutPage locale="en" />
    </>
  );
}
