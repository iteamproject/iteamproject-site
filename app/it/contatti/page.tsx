import { contactMetadata } from "@/lib/seo";
import { contactStructuredData } from "@/lib/schema";
import ContactPage from "@/components/contact/ContactPage";
import StructuredData from "@/components/site/StructuredData";

export const metadata = contactMetadata.it;

export default function ItalianContactRoute() {
  return (
    <>
      <StructuredData data={contactStructuredData("it")} />
      <ContactPage locale="it" />
    </>
  );
}
