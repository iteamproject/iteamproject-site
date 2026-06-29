import { policyMetadata } from "@/lib/seo";
import PolicyLayout from "@/components/site/PolicyLayout";

export const metadata = policyMetadata.privacy.it;

export default function ItalianPrivacyPolicyPage() {
  return <PolicyLayout kind="privacy" locale="it" />;
}
