import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import PillarsSection from './components/PillarsSection';
import HowItWorksSection from './components/HowItWorksSection';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <ProblemSection />
                <PillarsSection />
                <HowItWorksSection />
            </main>
            <Footer />
        </div>
    );
};

export default App;