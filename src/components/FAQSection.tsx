import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
    const faqs = [
        {
            question: "Does it understand Indian accents?",
            answer: "Yes, DischargeX is trained on diverse accent datasets, including various Indian regional accents (South Indian, North Indian, etc.). It accurately transcribes complex medical terminology even with heavy accents.",
        },
        {
            question: "Is it compatible with Mac and Windows?",
            answer: "Absolutely. DischargeX is a web-based platform that works on any device with a browser—Windows, Mac, iPad, and Android tablets.",
        },
        {
            question: "Is patient data secure?",
            answer: "Security is our top priority. We use end-to-end encryption for all data transmission and storage, complying with standard healthcare data privacy guidelines.",
        },
        {
            question: "Can I customize the summary format?",
            answer: "Yes, DischargeX allows you to create custom templates for different departments (Cardiology, Orthopedics, etc.) so the final PDF matches your hospital's exact format.",
        }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-lg font-medium">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
