import React from 'react';
import DatabaseIcon from './icons/DatabaseIcon';
import ClockIcon from './icons/ClockIcon';
import FileTextIcon from './icons/FileTextIcon';

const PillarsSection: React.FC = () => {
    return (
        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-6">
                {/* Section background with gradient glow */}
                <div className="bg-gray-900/50 rounded-xl p-8 md:p-12" style={{backgroundImage: 'linear-gradient(135deg, rgba(240, 0, 255, 0.1) 0%, rgba(0, 255, 255, 0.1) 100%)'}}>
                    
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold">The First AI Platform for Judicial Forecasting</h2>
                        <p className="text-lg text-dreamer-gray mt-4">
                            Built on billions of real-world data points
                        </p>
                    </div>

                    {/* Pillars Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        
                        {/* Pillar 1 */}
                        <div className="bg-dreamer-blue/70 p-6 rounded-lg border border-white/10 shadow-xl">
                            <div className="w-12 h-12 bg-dreamer-pink/20 text-dreamer-pink rounded-lg flex items-center justify-center">
                                <DatabaseIcon />
                            </div>
                            <h3 className="text-xl font-bold mt-4"> Finding and analysing similar judged cases </h3>
                            <p className="text-dreamer-gray mt-2">
                                Uncovers judge patterns, precedent, and systemic behavior.
                            </p>
                        </div>

                        {/* Pillar 2 */}
                        <div className="bg-dreamer-blue/70 p-6 rounded-lg border border-white/10 shadow-xl">
                            <div className="w-12 h-12 bg-dreamer-cyan/20 text-dreamer-cyan rounded-lg flex items-center justify-center">
                                <ClockIcon />
                            </div>
                            <h3 className="text-xl font-bold mt-4"> Time & Outcome Prediction</h3>
                            <p className="text-dreamer-gray mt-2">
                                Forecast duration, micro-probability, and probable paths.
                            </p>
                        </div>

                        {/* Pillar 3 */}
                        <div className="bg-dreamer-blue/70 p-6 rounded-lg border border-white/10 shadow-xl">
                            <div className="w-12 h-12 bg-dreamer-pink/20 text-dreamer-pink rounded-lg flex items-center justify-center">
                                <FileTextIcon />
                            </div>
                            <h3 className="text-xl font-bold mt-4"> Intelligent Pricing based on similar cases</h3>
                            <p className="text-dreamer-gray mt-2">
                                Calculates risk, fees, and informed data.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default PillarsSection;