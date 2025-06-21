
import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import BlogPreview from './components/BlogPreview';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-light font-sans text-brand-text">
      <Header />
      <main className="flex-grow">
        <Hero />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  );
};

export default App;
