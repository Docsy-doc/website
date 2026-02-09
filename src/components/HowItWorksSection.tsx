import { Smartphone, LayoutList, Mic, FileText, CheckCircle, Printer } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Open DischargeX",
    description: "Launch the app on mobile or desktop — no installation required.",
  },
  {
    icon: LayoutList,
    title: "Select Department",
    description: "Choose the relevant department for department-specific formatting.",
  },
  {
    icon: Mic,
    title: "Speak or Type",
    description: "Dictate patient details or type them in — whichever is faster.",
  },
  {
    icon: FileText,
    title: "AI Generates Summary",
    description: "Get a structured, professional discharge summary in seconds.",
  },
  {
    icon: CheckCircle,
    title: "Review & Edit",
    description: "Make any changes you need. You have full control over the output.",
  },
  {
    icon: Printer,
    title: "Print or Export",
    description: "Download, print, or share the finalized discharge summary.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
            Six Simple Steps
          </h2>
          <p className="text-muted-foreground text-lg">
            From patient details to finalized discharge summary in minutes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={step.title} className="relative flex flex-col items-center text-center group">
                {/* Step number */}
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-4 shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
                  <step.icon size={28} className="text-primary-foreground" />
                </div>
                <span className="absolute top-0 right-1/2 translate-x-10 -translate-y-1 bg-card border border-border text-xs font-bold text-primary rounded-full w-6 h-6 flex items-center justify-center">
                  {idx + 1}
                </span>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
