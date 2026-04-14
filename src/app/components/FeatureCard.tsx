import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-[2rem] border border-border bg-card p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--bloom-peach)] text-[var(--bloom-forest)]">
        {icon}
      </div>
      <h3 className="text-2xl tracking-tight" style={{ fontWeight: 600 }}>
        {title}
      </h3>
      <p className="leading-7 text-muted-foreground">{description}</p>
    </article>
  );
}
