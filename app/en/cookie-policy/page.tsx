import { policyMetadata } from "@/lib/seo";
import PolicyLayout from "@/components/site/PolicyLayout";

export const metadata = policyMetadata.cookies.en;

export default function EnglishCookiePolicyPage() {
  return <PolicyLayout kind="cookies" locale="en" />;
}
