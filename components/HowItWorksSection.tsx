import React from 'react';

const steps = [
    { number: 1, text: "Describe your client´s case" },
    { number: 2, text: "AI analyzes judicial patterns" },
    { number: 3, text: "Predicts decisions and duration" },
    { number: 4, text: "Give possible outcames with probabilities" },
    { number: 5, text: "Help you set your pricing and duration timeline with clientt" },
];

const HowItWorksSection: React.FC = () => {
    return (
        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
                </div>

                {/* Steps Flow */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:space-x-4 max-w-6xl mx-auto mt-16">
                    {steps.map((step, index) => (
                        <React.Fragment key={step.number}>
                            <div className="flex flex-col items-center text-center w-60">
                                <div className="w-16 h-16 bg-dreamer-cyan text-dreamer-blue rounded-full flex items-center justify-center font-bold text-2xl">{step.number}</div>
                                <h4 className="font-bold mt-4">{step.text}</h4>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="hidden md:block flex-1 h-px bg-dreamer-gray/30"></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                
                <p className="text-center text-dreamer-gray max-w-3xl mx-auto mt-16">
                    Our platform integrates data, data matching, and behavioral pattern platforms to deliver highly accurate forecasting.
                </p>
            </div>
        </section>
    );
};

export default HowItWorksSection;