import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="py-24 md:py-32 text-center">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl md:text-6xl font-black max-w-4xl mx-auto leading-tight">
                    AI-Powered Litigation Predictability for Law Firms
                </h1>
                <p className="text-lg md:text-xl text-dreamer-gray max-w-2xl mx-auto mt-6">
                    Since 2004, there has been 600 million cases solved in Brazil - want to know how your case's comparables behaved? We can help.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
                    <a href="#" className="bg-dreamer-cyan text-dreamer-blue font-bold py-3 px-8 rounded-lg text-lg transition-transform hover:scale-105 btn-glow-cyan">
                        Request Early Access
                    </a>
                    <a href="#" className="bg-transparent border-2 border-dreamer-gray text-dreamer-gray font-bold py-3 px-8 rounded-lg text-lg transition-colors hover:bg-white/10 hover:text-white hover:border-white">
                        Book Demo
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;