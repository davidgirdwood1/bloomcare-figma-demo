import type { ButtonHTMLAttributes, ReactNode } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function PrimaryButton({
  children,
  className = "",
  type = "button",
  variant = "primary",
  ...props
}: PrimaryButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-7 py-4 text-base font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background shadow-sm hover:-translate-y-0.5 hover:shadow-lg";

  const variantStyles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-[var(--bloom-terracotta-light)]"
      : "bg-white text-[var(--bloom-forest)] hover:bg-white/90";

  return (
    <button type={type} className={`${baseStyles} ${variantStyles} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
