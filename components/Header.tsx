import React from 'react';
import MenuIcon from './icons/MenuIcon';

const Header: React.FC = () => {
    return (
        <header className="border-b border-white/10">
            <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold tracking-wider">
                    <span className="text-dreamer-cyan">D</span> DREAMERS AI
                </div>
                
                {/* Nav Links */}
                <div className="hidden md:flex space-x-8 items-center">
                    <a href="#" className="text-dreamer-gray hover:text-white transition-colors">Product</a>
                    <a href="#" className="text-dreamer-gray hover:text-white transition-colors">About Us</a>
                    <a href="#" className="text-dreamer-gray hover:text-white transition-colors">Careers</a>
                    <a href="#" className="bg-dreamer-cyan text-dreamer-blue font-bold py-2 px-5 rounded-lg text-sm transition-transform hover:scale-105 btn-glow-cyan">
                        Book a Demo
                    </a>
                </div>
                
                {/* Mobile Menu Button (Icon) */}
                <div className="md:hidden">
                    <MenuIcon />
                </div>
            </nav>
        </header>
    );
};

export default Header;