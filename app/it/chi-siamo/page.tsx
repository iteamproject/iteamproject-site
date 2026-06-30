import { aboutMetadata } from "@/lib/seo";
import { aboutStructuredData } from "@/lib/schema";
import AboutPage from "@/components/about/AboutPage";
import StructuredData from "@/components/site/StructuredData";

export const metadata = aboutMetadata.it;

export default function ItalianAboutRoute() {
  return (
    <>
      <StructuredData data={aboutStructuredData("it")} />
      <AboutPage locale="it" />
    </>
  );
}
