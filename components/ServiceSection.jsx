"use client";

import React from "react";
import { motion } from "framer-motion";
import LazyImage from "./LazyImage";

export const ServiceSection = () => {
  const services = [
    {
      name: "Yoga",
      description:
        "Improve flexibility, balance, and mental well-being through guided yoga sessions designed specifically for women.",
      image: "/assets/cards/yoga.jpg",
    },
    {
      name: "Zumba",
      description:
        "High-energy dance workouts that combine fun music with easy-to-follow moves to burn calories and boost confidence.",
      image: "/assets/cards/zumba.jpg",
    },
    {
      name: "Weight Training",
      description:
        "Build lean muscle and bone density with specialized training programs tailored for women's body composition.",
      image: "/assets/cards/weightTraining.jpg",
    },
    {
      name: "Cardio",
      description:
        "Effective cardiovascular training to improve stamina and heart health, designed with women's fitness goals in mind.",
      image: "/assets/cards/cardio.jpg",
    },
    {
      name: "Physique Transformation",
      description:
        "Safe and effective workouts for new mothers to rebuild strength and confidence after pregnancy.",
      image: "/assets/cards/functionalStrengthening.jpg",
    },
    {
      name: "Body Transformation",
      description:
        "Personalized programs to reshape your body and achieve your unique fitness goals as a woman.",
      image: "/assets/cards/physiqueTransformation.jpg",
    },
    {
      name: "CrossFit",
      description:
        "Targeted exercises to improve bone density and prevent osteoporosis, crucial for women's long-term health.",
      image: "/assets/cards/crossfit.jpg",
    },
    {
      name: "Aerobics",
      description:
        "Holistic approach combining physical exercise with mental wellness techniques for overall well-being.",
      image: "/assets/cards/aerobics.jpg",
    },
  ];

  return (
    <section id="services" className="min-h-screen bg-black py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          Our <span className="text-orange-700">Services</span>
        </motion.h2>

        <motion.p
          className="text-gray-300 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Discover our range of specialized fitness programs designed
          exclusively for women
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = React.memo(({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -10,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3 },
      }}
      className="bg-[#2C1A0D] rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 border-t-4 border-[#C01818] hover:border-[#FFD36E]"
    >
      <div className="h-48 overflow-hidden">
        <LazyImage
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col items-center text-center">
        <h3 className="text-xl font-bold mb-2 text-white">{service.name}</h3>
        <p className="text-gray-300">{service.description}</p>
      </div>
    </motion.div>
  );
});

export default React.memo(ServiceSection);
