import { policyMetadata } from "@/lib/seo";
import PolicyLayout from "@/components/site/PolicyLayout";

export const metadata = policyMetadata.cookies.it;

export default function ItalianCookiePolicyPage() {
  return <PolicyLayout kind="cookies" locale="it" />;
}
