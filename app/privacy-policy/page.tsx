import { legacyMetadata } from "@/lib/seo";
import PolicyLayout from "@/components/site/PolicyLayout";

export const metadata = legacyMetadata.privacy;

export default function PrivacyPolicyPage() {
  return <PolicyLayout kind="privacy" locale="it" />;
}
