"use client";

import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import ClientWrapper from "../components/ClientWrapper";

export default function Home() {
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