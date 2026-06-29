type StructuredDataProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export default function StructuredData({ data }: StructuredDataProps) {
  const payload = Array.isArray(data)
    ? {
        "@context": "https://schema.org",
        "@graph": data,
      }
    : {
        "@context": "https://schema.org",
        ...data,
      };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload).replace(/</g, "\\u003c"),
      }}
    />
  );
}
