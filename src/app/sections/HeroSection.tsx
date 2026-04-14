import { Container } from "../components/Container";
import { OrganicBackground } from "../components/OrganicBackground";
import { PrimaryButton } from "../components/PrimaryButton";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden py-20">
      <OrganicBackground />
      <Container className="relative z-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="mb-6 inline-flex rounded-full border border-border bg-white/70 px-4 py-2 text-sm font-medium text-[var(--bloom-clay)] shadow-sm backdrop-blur-sm">
            Personalized support for menopause and midlife wellness
          </span>
          <h1 className="text-5xl tracking-tight sm:text-6xl lg:text-8xl" style={{ fontWeight: 600 }}>
            Personalized Midlife Care
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Support for every stage of your health journey with evidence-based plans, expert guidance, and clear next
            steps.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton className="text-lg">Get Started</PrimaryButton>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-border bg-white/80 px-7 py-4 text-base font-semibold text-foreground transition hover:bg-white"
            >
              Explore Features
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
