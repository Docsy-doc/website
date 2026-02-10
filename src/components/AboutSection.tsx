import { Building2, Target, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
              Built for Indian Hospitals
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              DischargeX is designed from the ground up to solve discharge documentation
              challenges faced by hospitals across India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                <Target size={26} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Our Mission</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To eliminate manual discharge documentation in every hospital,
                so doctors can focus on what matters — patient care.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                <Building2 size={26} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Who We Serve</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Small clinics, mid-sized hospitals, and large multi-specialty hospitals
                across India trust DischargeX for their documentation needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                <Lightbulb size={26} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Our Approach</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Voice-first AI that works as a standalone app or alongside existing hospital systems.
                No disruption, no steep learning curve — just faster discharges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
