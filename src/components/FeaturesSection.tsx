import {
  Mic,
  LayoutGrid,
  FileEdit,
  Zap,
  Smartphone,
  Shield,
  UserCheck,
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Voice-Based Input",
    description: "Doctors simply speak patient details. No typing or templates needed.",
  },
  {
    icon: LayoutGrid,
    title: "All Departments",
    description: "Medicine, Surgery, Ortho, Pediatrics, OBG, ICU, and every specialty covered.",
  },
  {
    icon: FileEdit,
    title: "Fully Editable",
    description: "AI generates summaries that doctors can review, edit, and finalize with full control.",
  },

  {
    icon: Smartphone,
    title: "Any Device",
    description: "Works seamlessly on mobile, tablet, and desktop — wherever doctors work.",
  },
  {
    icon: Shield,
    title: "No EMR Required",
    description: "Works perfectly for paper-based hospitals. Have an EMR? We integrate with that too.",
  },
  {
    icon: UserCheck,
    title: "Easy Onboarding",
    description: "Simple setup with minimal training. Doctors are productive from day one.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
            One Platform. All Departments.
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything hospitals need for automated discharge summary generation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <feature.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
