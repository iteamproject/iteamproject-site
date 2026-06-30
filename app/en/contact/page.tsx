import { contactMetadata } from "@/lib/seo";
import { contactStructuredData } from "@/lib/schema";
import ContactPage from "@/components/contact/ContactPage";
import StructuredData from "@/components/site/StructuredData";

export const metadata = contactMetadata.en;

export default function EnglishContactRoute() {
  return (
    <>
      <StructuredData data={contactStructuredData("en")} />
      <ContactPage locale="en" />
    </>
  );
}
