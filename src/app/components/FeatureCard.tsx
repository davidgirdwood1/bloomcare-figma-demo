interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-card p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border flex flex-col items-start gap-4">
      <div className="w-16 h-16 rounded-2xl bg-[var(--bloom-peach)] flex items-center justify-center text-[var(--bloom-forest)]">
        {icon}
      </div>
      <h3 className="text-2xl">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
