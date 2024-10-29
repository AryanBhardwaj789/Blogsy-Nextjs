"use client"
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const AboutHero = () => {
  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          About Our Blog
        </motion.h1>
        <motion.p
          className="text-lg mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Welcome to our blog! We share insights, stories, and updates on our latest projects and adventures in the world of web development.
        </motion.p>
      </div>
      <ShowcaseSection />
    </motion.section>
  );
};

const ShowcaseSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h2
        className="text-3xl font-semibold text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Our Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <motion.div
            key={item}
            className="rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: item * 0.2 }}
          >
            <div className="h-4 animate-pulse"></div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Project {item}</h3>
              <p>
                A brief description of the project goes here. Highlight the key features and technologies used.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutHero;
