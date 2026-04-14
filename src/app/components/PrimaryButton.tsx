interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function PrimaryButton({
  children,
  onClick,
  variant = 'primary',
  className = ''
}: PrimaryButtonProps) {
  const baseStyles = "px-8 py-4 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg transform hover:-translate-y-0.5";

  const variantStyles = variant === 'primary'
    ? "bg-primary text-primary-foreground hover:bg-[var(--bloom-terracotta-light)]"
    : "bg-secondary text-secondary-foreground hover:bg-[var(--bloom-sage-light)]";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
}
