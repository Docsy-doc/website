import { ArrowRight, X, Check } from "lucide-react";

const ComparisonSection = () => {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        The Old Way vs. The DischargeX Way
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Stop wasting time on manual documentation. Join the AI revolution.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* The Old Way */}
                    <div className="relative p-8 rounded-3xl border border-destructive/20 bg-destructive/5 overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 bg-destructive/10 rounded-bl-2xl">
                            <span className="text-destructive font-bold text-sm">BEFORE</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-6 text-foreground">Manual Discharge</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="mt-1 p-1 rounded-full bg-destructive/20 text-destructive">
                                    <X size={16} />
                                </div>
                                <span className="text-muted-foreground">Takes 30-60 minutes per patient</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 p-1 rounded-full bg-destructive/20 text-destructive">
                                    <X size={16} />
                                </div>
                                <span className="text-muted-foreground">Inconsistent formatting across doctors</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 p-1 rounded-full bg-destructive/20 text-destructive">
                                    <X size={16} />
                                </div>
                                <span className="text-muted-foreground">High chance of copy-paste errors</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 p-1 rounded-full bg-destructive/20 text-destructive">
                                    <X size={16} />
                                </div>
                                <span className="text-muted-foreground">Delayed patient discharge process</span>
                            </li>
                        </ul>
                    </div>

                    {/* The New Way */}
                    <div className="relative p-8 rounded-3xl border border-primary/20 bg-primary/5 overflow-hidden gradient-border">
                        <div className="absolute top-0 right-0 p-3 bg-primary/10 rounded-bl-2xl">
                            <span className="text-primary font-bold text-sm">AFTER</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-6 text-foreground">DischargeX AI</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="mt-1 p-1 rounded-full bg-primary/20 text-primary">
                                    <Check size={16} />
                                </div>
                                <span className="text-foreground font-medium">Completed in under 10 minutes</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 p-1 rounded-full bg-primary/20 text-primary">
                                    <Check size={16} />
                                </div>
                                <span className="text-foreground font-medium">Standardized, hospital-approved formats</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 p-1 rounded-full bg-primary/20 text-primary">
                                    <Check size={16} />
                                </div>
                                <span className="text-foreground font-medium">Zero errors with structured input</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 p-1 rounded-full bg-primary/20 text-primary">
                                    <Check size={16} />
                                </div>
                                <span className="text-foreground font-medium">Patients leave happy and on time</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex justify-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium animate-pulse">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Join 20+ hospitals upgrading today
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;
