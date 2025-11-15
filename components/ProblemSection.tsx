import React from 'react';
import AlertTriangleIcon from './icons/AlertTriangleIcon';

const problems = [
    "Unpredictable timelines",
    "Client with no timeline on case",
    "Useless appeals",
    "Difficulty on how to charge",
    "Lack of transparency",
    "No data-driven decision making"
];

const ProblemSection: React.FC = () => {
    return (
        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold"> Your Planning Shouldn't Be Guesswork</h2>
                    <p className="text-lg text-dreamer-gray mt-4">
                        We help lawyers make decisions based on similar past cases.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 max-w-4xl mx-auto mt-12 gap-x-12 gap-y-6">
                    {problems.map((problem, index) => (
                        <div key={index} className="flex items-center space-x-3">
                            <AlertTriangleIcon className="text-dreamer-cyan flex-shrink-0" />
                            <span className="text-lg text-dreamer-gray">{problem}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;