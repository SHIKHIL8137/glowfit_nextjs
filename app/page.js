'use client';

import { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ServiceSection from '../components/ServiceSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ClientWrapper from '../components/ClientWrapper';
import GymLoadingScreen from '../components/Loader';

export const dynamic = 'force-static'; // Enable static rendering for better performance

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading completion
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <GymLoadingScreen />;
  }

  return (
    <ClientWrapper>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </ClientWrapper>
  );
}