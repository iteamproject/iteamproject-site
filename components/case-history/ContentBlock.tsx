type ContentBlockProps = {
  id: string;
  title: string;
  paragraphs: string[];
};

export default function ContentBlock({ id, title, paragraphs }: ContentBlockProps) {
  return (
    <article id={id} className="scroll-mt-28">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
        {title}
      </h2>
      <div className="mt-4 space-y-4 leading-8 text-slate-600">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
