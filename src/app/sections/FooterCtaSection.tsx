import { Container } from "../components/Container";
import { PrimaryButton } from "../components/PrimaryButton";

export function FooterCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--bloom-forest)] py-28 text-white sm:py-32">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <svg className="absolute -bottom-20 -left-20 h-[28rem] w-[28rem]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="white" d="M43.3,-73.6C56.5,-66.3,68.3,-56.2,76.4,-43.5C84.5,-30.8,88.9,-15.4,88.7,-0.2C88.5,15,83.7,30,75.6,43.3C67.5,56.6,56.1,68.2,42.4,75.8C28.7,83.4,12.7,87,-3.5,85.5C-19.7,84,-39.4,77.4,-54.2,67.4C-69,57.4,-78.9,44,-83.8,29.1C-88.7,14.2,-88.6,-2.2,-84.5,-17.5C-80.4,-32.8,-72.3,-47,-60.6,-55.8C-48.9,-64.6,-33.6,-68,-18.8,-72.3C-4,-76.6,10.4,-81.8,24.1,-81.9C37.8,-82,51.8,-76.9,43.3,-73.6Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute right-0 top-10 h-80 w-80" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="white" d="M41.2,-70.8C53.6,-63.5,64.3,-53.3,71.4,-40.8C78.5,-28.3,82,-13.5,81.8,1.2C81.6,15.9,77.7,30.6,70.1,43.5C62.5,56.4,51.2,67.5,37.8,74.8C24.4,82.1,9,85.6,-5.3,83.9C-19.6,82.2,-32.8,75.3,-45.1,67.1C-57.4,58.9,-68.8,49.4,-75.8,37.2C-82.8,25,-85.4,10.1,-84.1,-4.3C-82.8,-18.7,-77.6,-32.6,-69.3,-44.6C-61,-56.6,-49.6,-66.7,-36.7,-73.7C-23.8,-80.7,-9.4,-84.6,3.7,-83.3C16.8,-82,28.8,-75.5,41.2,-70.8Z" transform="translate(100 100)" />
        </svg>
      </div>
      <Container className="relative z-10 text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          <h2 className="text-5xl tracking-tight sm:text-6xl" style={{ fontWeight: 600 }}>
            Take control of your health today
          </h2>
          <p className="mx-auto max-w-2xl text-xl leading-8 text-white/90">
            Join thousands of women who have found more clarity, confidence, and support for their midlife journey.
          </p>
          <PrimaryButton variant="secondary" className="text-lg">
            Join Now
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
