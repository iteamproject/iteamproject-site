import { homeMetadata } from "@/lib/seo";
import { homeStructuredData } from "@/lib/schema";
import HomePage from "@/components/home/HomePage";
import StructuredData from "@/components/site/StructuredData";

export const metadata = homeMetadata.it;

export default function ItalianHomePage() {
  return (
    <>
      <StructuredData data={homeStructuredData("it")} />
      <HomePage initialLang="it" />
    </>
  );
}
