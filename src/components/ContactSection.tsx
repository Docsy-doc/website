import { Button } from "@/components/ui/button";
import { Mail, MapPin, Globe, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* CTA Card */}
          <div className="rounded-2xl gradient-primary p-10 md:p-16 text-center relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary-foreground/5 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-primary-foreground/5 translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Transform Discharge Documentation?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg mx-auto">
                See DischargeX in action. Book a free demo and discover how your hospital
                can save hours every day.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="text-base px-8 font-semibold"
                asChild
              >
                <a href="mailto:demo@dischargex.in">
                  Book a Free Demo
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Contact details */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href="mailto:demo@dischargex.in"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  demo@dischargex.in
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <Globe size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Website</p>
                <a
                  href="https://dischargex.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  dischargex.in
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-sm font-medium text-foreground">India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
