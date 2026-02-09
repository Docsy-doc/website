import { AlertTriangle, Clock, FileX, Users } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "15–40 min per discharge",
    description: "Doctors spend excessive time manually writing discharge summaries.",
  },
  {
    icon: FileX,
    title: "Inconsistent formats",
    description: "Copy-pasting leads to errors, missing data, and inconsistency across departments.",
  },
  {
    icon: Users,
    title: "Doctor burnout",
    description: "Administrative overload takes time away from patient care.",
  },
  {
    icon: AlertTriangle,
    title: "Discharge delays",
    description: "Slow documentation causes bottlenecks in patient discharge workflows.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
            Manual Discharge Summaries Are Broken
          </h2>
          <p className="text-muted-foreground text-lg">
            Hospitals across India still rely on manual or copy-paste methods for discharge documentation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/15 transition-colors">
                <item.icon size={22} className="text-destructive" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
