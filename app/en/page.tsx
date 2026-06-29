import { homeMetadata } from "@/lib/seo";
import { homeStructuredData } from "@/lib/schema";
import HomePage from "@/components/home/HomePage";
import StructuredData from "@/components/site/StructuredData";

export const metadata = homeMetadata.en;

export default function EnglishHomePage() {
  return (
    <>
      <StructuredData data={homeStructuredData("en")} />
      <HomePage initialLang="en" />
    </>
  );
}
