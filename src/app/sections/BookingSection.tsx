import { BookingForm } from "../components/BookingForm";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";

export function BookingSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-28">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[var(--bloom-sage)] opacity-10 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[var(--bloom-terracotta)] opacity-10 blur-3xl" aria-hidden="true" />
      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
        <SectionHeading
          eyebrow="Consultation"
          align="left"
          title="Book a Consultation"
          description="Take the first step toward more personalized care with a clean intake flow designed for clarity and confidence."
        />
        <BookingForm />
      </Container>
    </section>
  );
}
