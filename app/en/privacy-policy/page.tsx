import { policyMetadata } from "@/lib/seo";
import PolicyLayout from "@/components/site/PolicyLayout";

export const metadata = policyMetadata.privacy.en;

export default function EnglishPrivacyPolicyPage() {
  return <PolicyLayout kind="privacy" locale="en" />;
}
