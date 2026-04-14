interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl space-y-4 ${alignment}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--bloom-clay)]">{eyebrow}</p>
      ) : null}
      <h2 className="text-4xl tracking-tight sm:text-5xl" style={{ fontWeight: 600 }}>
        {title}
      </h2>
      {description ? <p className="text-lg leading-8 text-muted-foreground">{description}</p> : null}
    </div>
  );
}
