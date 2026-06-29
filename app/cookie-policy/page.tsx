import { legacyMetadata } from "@/lib/seo";
import PolicyLayout from "@/components/site/PolicyLayout";

export const metadata = legacyMetadata.cookies;

export default function CookiePolicyPage() {
  return <PolicyLayout kind="cookies" locale="it" />;
}
