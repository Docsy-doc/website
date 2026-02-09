import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const ROICalculator = () => {
    const [dischargesPerDay, setDischargesPerDay] = useState([10]);
    const [timePerDischarge, setTimePerDischarge] = useState([20]); // minutes

    // Constants
    const doctorHourlyRate = 2000; // in INR (Estimated)
    const daysPerMonth = 25;
    const timeSavedPerDischarge = 0.75; // 75% savings

    // Calculations
    const dailyTimeSpent = dischargesPerDay[0] * timePerDischarge[0]; // minutes
    const monthlyTimeSpent = (dailyTimeSpent * daysPerMonth) / 60; // hours

    const dailyTimeSaved = dailyTimeSpent * timeSavedPerDischarge; // minutes
    const monthlyHoursSaved = (dailyTimeSaved * daysPerMonth) / 60; // hours
    const monthlyMoneySaved = monthlyHoursSaved * doctorHourlyRate;

    return (
        <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Calculate Your Hospital's ROI
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        See how much time and money DischargeX can save for your department.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
                    {/* Inputs */}
                    <div className="space-y-10 p-8 glass-card rounded-2xl">
                        {/* Discharges Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="font-medium text-foreground">
                                    Discharges Per Day
                                </label>
                                <span className="text-2xl font-bold text-primary">
                                    {dischargesPerDay}
                                </span>
                            </div>
                            <Slider
                                value={dischargesPerDay}
                                onValueChange={setDischargesPerDay}
                                max={100}
                                step={1}
                                className="py-4"
                            />
                            <p className="text-xs text-muted-foreground">
                                Average number of patients discharged daily in your department
                            </p>
                        </div>

                        {/* Time Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="font-medium text-foreground">
                                    Current Time Per Discharge (Mins)
                                </label>
                                <span className="text-2xl font-bold text-primary">
                                    {timePerDischarge}
                                </span>
                            </div>
                            <Slider
                                value={timePerDischarge}
                                onValueChange={setTimePerDischarge}
                                max={60}
                                step={5}
                                className="py-4"
                            />
                            <p className="text-xs text-muted-foreground">
                                Time typically spent typing a single summary
                            </p>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="grid gap-6">
                        <div className="p-8 rounded-2xl bg-white dark:bg-card shadow-lg border border-border/50 text-center transform hover:-translate-y-1 transition-transform duration-300">
                            <p className="text-muted-foreground mb-2">Doctor Hours Saved / Month</p>
                            <div className="text-5xl font-bold text-gradient-primary">
                                {Math.round(monthlyHoursSaved)}+
                            </div>
                            <p className="text-sm text-muted-foreground mt-4">
                                That's {Math.round(monthlyHoursSaved / 8)} full work days reclaimed
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-white dark:bg-card shadow-lg border border-border/50 text-center transform hover:-translate-y-1 transition-transform duration-300">
                            <p className="text-muted-foreground mb-2">Days Saved Annually</p>
                            <div className="text-5xl font-bold text-gradient-primary">
                                {Math.round((monthlyHoursSaved * 12) / 24)}+
                            </div>
                            <p className="text-sm text-muted-foreground mt-4">
                                More time for patient care and research
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ROICalculator;
