"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const slides = [
  {
    id: 1,
    title: "Quick Loan Approval",
    description: "Get your loan approved within 24 hours with minimal documentation",
    image: "/images/loan-approval.jpg",
    cta: "Apply Now",
    ctaLink: "/apply",
    gradient: "from-blue-900/90 to-indigo-900/90"
  },
  {
    id: 2,
    title: "Competitive Interest Rates",
    description: "Enjoy the lowest interest rates in the market with flexible repayment options",
    image: "/images/interest-rates.jpg",
    cta: "Learn More",
    ctaLink: "/services",
    gradient: "from-indigo-900/90 to-purple-900/90"
  },
  {
    id: 3,
    title: "Expert Financial Guidance",
    description: "Get personalized financial advice from our experienced team",
    image: "/images/financial-guidance.jpg",
    cta: "Contact Us",
    ctaLink: "/contact",
    gradient: "from-purple-900/90 to-blue-900/90"
  },
  {
    id: 4,
    title: "Flexible Repayment Options",
    description: "Choose repayment plans that suit your financial situation",
    image: "/images/repayment.jpg",
    cta: "View Plans",
    ctaLink: "/services#repayment",
    gradient: "from-blue-900/90 to-indigo-900/90"
  }
];

export default function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <div 
      className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="relative h-full">
            {/* Background Image with Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].gradient}`} />
            <div 
              className="absolute inset-0 bg-cover bg-center transform scale-110 transition-transform duration-[6000ms] ease-linear"
              style={{ 
                backgroundImage: `url(${slides[currentSlide].image})`,
                filter: 'blur(1px)',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                transform: 'scale(1.1)'
              }}
            />

            {/* Content */}
            <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-block"
                >
                  <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-white/10 text-white backdrop-blur-sm">
                    Welcome to Aditya Marketing
                  </span>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="mt-6 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white"
                >
                  {slides[currentSlide].title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="mt-6 text-lg md:text-xl leading-8 text-gray-300 max-w-2xl mx-auto"
                >
                  {slides[currentSlide].description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6"
                >
                  <a
                    href={slides[currentSlide].ctaLink}
                    className="w-full sm:w-auto rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 hover:scale-105"
                  >
                    {slides[currentSlide].cta}
                  </a>
                  <a
                    href="/contact"
                    className="w-full sm:w-auto text-lg font-semibold leading-6 text-white hover:text-gray-300 transition-colors duration-300"
                  >
                    Learn More <span aria-hidden="true">→</span>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      {!isMobile && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlaying(false);
            }}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          key={currentSlide}
        />
      </div>
    </div>
  );
} 