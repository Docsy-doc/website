import { Button } from "@/components/ui/button";
import { ArrowRight, Mic, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-doctor.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHowItWorks = () => {
    document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Doctor using DischargeX on tablet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/40" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* India's 1st badge */}
          {/* India's 1st badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 mb-8 animate-fade-in shadow-lg">
            <Mic size={18} className="text-primary" />
            <span className="text-base md:text-lg font-bold text-white tracking-wide">
              India's 1st Voice-Enabled Discharge Summary Generator
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-background animate-fade-in-up">
            From Voice to Discharge Summary
            <br />
            <span className="text-primary">In Minutes.</span>
          </h1>

          <p className="text-lg md:text-xl text-background/80 mb-8 max-w-lg animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Experience fast, AI-powered discharge summary generation. Complete summaries ready in under 10 minutes, not 30–60 min.
            Reduce documentation time dramatically.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="text-base px-8" onClick={scrollToContact}>
              Book a Demo
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button
              size="lg"
              className="text-base px-8 bg-background/15 border border-background/40 text-background hover:bg-background/25 backdrop-blur-sm"
              onClick={scrollToHowItWorks}
            >
              See How It Works
            </Button>
          </div>

          <div className="flex gap-8 mt-12 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            {[
              { value: "30–50 min", label: "Saved per discharge" },
              { value: "All Depts", label: "Supported" },
              { value: "100%", label: "Editable output" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-background/60">{stat.label}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-background/40 mt-3 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            Reduce documentation time dramatically.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
