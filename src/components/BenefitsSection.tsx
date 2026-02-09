import { Clock, Gauge, Heart, CheckCheck, IndianRupee } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    value: "30–50 min",
    label: "Saved per discharge",
    description: "Reduce documentation time dramatically.",
  },
  {
    icon: Gauge,
    value: "3x Faster",
    label: "Patient discharge",
    description: "Get patients home sooner with rapid documentation.",
  },
  {
    icon: Heart,
    value: "Less Burnout",
    label: "For doctors",
    description: "Free up time for patient care instead of paperwork.",
  },
  {
    icon: CheckCheck,
    value: "99%",
    label: "Consistency",
    description: "Standardized formats reduce errors and omissions.",
  },
  {
    icon: IndianRupee,
    value: "Affordable",
    label: "For all hospitals",
    description: "Pricing designed for Indian hospitals of every size.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
            Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
            Why Hospitals Choose DischargeX
          </h2>
          <p className="text-muted-foreground text-lg">
            Real impact on hospital operations and doctor productivity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {benefits.map((item) => (
            <div
              key={item.label}
              className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-md hover:border-secondary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                <item.icon size={22} className="text-secondary" />
              </div>
              <p className="text-2xl font-bold text-foreground">{item.value}</p>
              <p className="text-sm font-medium text-secondary mt-1">{item.label}</p>
              <p className="text-xs text-muted-foreground mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
