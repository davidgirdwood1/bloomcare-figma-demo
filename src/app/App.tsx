import { PrimaryButton } from "./components/PrimaryButton";
import { FeatureCard } from "./components/FeatureCard";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        {/* Organic Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute -top-20 -left-20 w-96 h-96 opacity-30 animate-blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="var(--bloom-sage)" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,40.1,76.8C26.4,84.6,10,87.6,-5.6,86.2C-21.2,84.8,-36,78.9,-49.6,71C-63.2,63.1,-75.6,53.1,-82.4,40.2C-89.2,27.3,-90.4,11.6,-88.2,-3.3C-86,-18.2,-80.4,-32.3,-72.4,-44.7C-64.4,-57.1,-54,-67.8,-41.5,-75.6C-29,-83.4,-14.5,-88.3,0.3,-88.8C15.1,-89.3,30.6,-85.6,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute top-1/4 -right-32 w-[500px] h-[500px] opacity-20 animate-blob animation-delay-2000" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="var(--bloom-peach)" d="M39.5,-65.9C51.4,-58.5,61.5,-48.3,68.8,-36.2C76.1,-24.1,80.6,-10.1,81.3,4.3C82,18.7,79,37.4,70.8,52.3C62.6,67.2,49.2,78.3,34.3,83.8C19.4,89.3,3,89.2,-13.2,86.4C-29.4,83.6,-45.4,78.1,-58.7,68.5C-72,58.9,-82.6,45.2,-87.4,29.8C-92.2,14.4,-91.2,-2.7,-85.9,-18.3C-80.6,-33.9,-71,-48,-58.8,-56.8C-46.6,-65.6,-31.8,-69.1,-17.8,-70.9C-3.8,-72.7,9.4,-72.8,21.8,-69.4C34.2,-66,45.8,-59.1,39.5,-65.9Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute bottom-20 left-1/4 w-80 h-80 opacity-25 animate-blob animation-delay-4000" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="var(--bloom-terracotta)" d="M47.3,-78.6C61.5,-71.2,73.3,-58.4,80.8,-43.5C88.3,-28.6,91.5,-11.6,89.8,4.7C88.1,21,81.5,36.6,72.4,50.3C63.3,64,51.7,75.8,37.8,82.3C23.9,88.8,7.7,90,-8.3,88.2C-24.3,86.4,-40.1,81.6,-53.8,73.9C-67.5,66.2,-79.1,55.6,-85.4,42.3C-91.7,29,-92.7,12.9,-89.8,-1.8C-86.9,-16.5,-80.1,-29.8,-71.2,-41.4C-62.3,-53,-51.3,-63,-38.4,-69.8C-25.5,-76.6,-10.7,-80.2,3.5,-86.1C17.7,-92,33.1,-100.2,47.3,-78.6Z" transform="translate(100 100)" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight" style={{ fontWeight: 600 }}>
            Personalized Midlife Care
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Support for every stage of your health journey
          </p>
          <div className="pt-4">
            <PrimaryButton className="text-lg">Get Started</PrimaryButton>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl tracking-tight" style={{ fontWeight: 600 }}>
              Comprehensive Care, Tailored to You
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Evidence-based support that adapts to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              }
              title="Personalized Plans"
              description="Custom wellness programs designed around your symptoms, lifestyle, and health goals for optimal results."
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              title="Expert Guidance"
              description="Access to certified healthcare providers who specialize in menopause and midlife wellness."
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              title="Track Progress"
              description="Monitor your symptoms, treatments, and wellness metrics with intuitive tracking tools."
            />
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-24 px-6 bg-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--bloom-sage)] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--bloom-terracotta)] opacity-10 rounded-full blur-3xl"></div>

        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl tracking-tight" style={{ fontWeight: 600 }}>
              Book a Consultation
            </h2>
            <p className="text-lg text-muted-foreground">
              Take the first step toward personalized care
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-5 py-4 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full px-5 py-4 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block">Phone Number</label>
              <input
                id="phone"
                type="tel"
                placeholder="(555) 000-0000"
                className="w-full px-5 py-4 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
            </div>

            <div className="pt-4">
              <PrimaryButton className="w-full text-lg">Schedule Now</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-32 px-6 bg-[var(--bloom-forest)] text-white relative overflow-hidden">
        {/* Organic shapes */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute -bottom-20 -left-20 w-[600px] h-[600px]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="white" d="M43.3,-73.6C56.5,-66.3,68.3,-56.2,76.4,-43.5C84.5,-30.8,88.9,-15.4,88.7,-0.2C88.5,15,83.7,30,75.6,43.3C67.5,56.6,56.1,68.2,42.4,75.8C28.7,83.4,12.7,87,-3.5,85.5C-19.7,84,-39.4,77.4,-54.2,67.4C-69,57.4,-78.9,44,-83.8,29.1C-88.7,14.2,-88.6,-2.2,-84.5,-17.5C-80.4,-32.8,-72.3,-47,-60.6,-55.8C-48.9,-64.6,-33.6,-68,-18.8,-72.3C-4,-76.6,10.4,-81.8,24.1,-81.9C37.8,-82,51.8,-76.9,43.3,-73.6Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute top-10 right-0 w-96 h-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="white" d="M41.2,-70.8C53.6,-63.5,64.3,-53.3,71.4,-40.8C78.5,-28.3,82,-13.5,81.8,1.2C81.6,15.9,77.7,30.6,70.1,43.5C62.5,56.4,51.2,67.5,37.8,74.8C24.4,82.1,9,85.6,-5.3,83.9C-19.6,82.2,-32.8,75.3,-45.1,67.1C-57.4,58.9,-68.8,49.4,-75.8,37.2C-82.8,25,-85.4,10.1,-84.1,-4.3C-82.8,-18.7,-77.6,-32.6,-69.3,-44.6C-61,-56.6,-49.6,-66.7,-36.7,-73.7C-23.8,-80.7,-9.4,-84.6,3.7,-83.3C16.8,-82,28.8,-75.5,41.2,-70.8Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="text-5xl md:text-6xl tracking-tight" style={{ fontWeight: 600 }}>
            Take control of your health today
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join thousands of women who have found personalized support for their midlife journey
          </p>
          <div className="pt-4">
            <PrimaryButton
              variant="secondary"
              className="text-lg bg-white text-[var(--bloom-forest)] hover:bg-white/90"
            >
              Join Now
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 px-6 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
            <div className="font-['Lora'] text-2xl text-foreground" style={{ fontWeight: 600 }}>
              BloomCare
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
            <div>
              © 2026 BloomCare. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Custom animations */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 20s infinite ease-in-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}