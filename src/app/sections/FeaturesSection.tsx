import { Container } from "../components/Container";
import { FeatureCard } from "../components/FeatureCard";
import { SectionHeading } from "../components/SectionHeading";
import { ChartIcon, HeartIcon, TeamIcon } from "../icons/FeatureIcons";

const features = [
  {
    title: "Personalized Plans",
    description:
      "Custom care recommendations built around symptoms, lifestyle, and health goals so the experience feels personal from day one.",
    icon: <HeartIcon className="h-7 w-7" />,
  },
  {
    title: "Expert Guidance",
    description:
      "Connect with providers who understand menopause and midlife wellness, with support that feels informed and approachable.",
    icon: <TeamIcon className="h-7 w-7" />,
  },
  {
    title: "Track Progress",
    description:
      "Monitor symptoms, treatments, and milestones through a simple experience that helps patients see meaningful progress over time.",
    icon: <ChartIcon className="h-7 w-7" />,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="Comprehensive Care, Tailored to You"
          description="Evidence-based support that adapts to changing needs and creates a calm, trustworthy patient experience."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}
