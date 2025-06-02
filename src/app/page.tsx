"use client";

import Navigation from '@/components/Navigation';
import ImageCarousel from '@/components/ImageCarousel';
import LoanCalculator from '@/components/LoanCalculator';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { 
  BanknotesIcon, 
  HomeIcon, 
  AcademicCapIcon, 
  BuildingOfficeIcon,
  CheckCircleIcon,
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CalculatorIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Personal Loans',
    description: 'Quick and easy personal loans with competitive interest rates.',
    icon: BanknotesIcon,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    name: 'Home Loans',
    description: 'Make your dream home a reality with our flexible home loan options.',
    icon: HomeIcon,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
  {
    name: 'Education Loans',
    description: 'Invest in your future with our education financing solutions.',
    icon: AcademicCapIcon,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    name: 'Business Loans',
    description: 'Fuel your business growth with our comprehensive business financing.',
    icon: BuildingOfficeIcon,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
];

const benefits = [
  {
    name: 'Quick Approval',
    description: 'Get your loan approved within 24 hours with minimal documentation.',
    icon: ClockIcon,
    color: 'text-blue-600',
  },
  {
    name: 'Competitive Rates',
    description: 'Enjoy the lowest interest rates in the market with flexible terms.',
    icon: BanknotesIcon,
    color: 'text-indigo-600',
  },
  {
    name: 'Secure Process',
    description: 'Your data is protected with bank-level security measures.',
    icon: ShieldCheckIcon,
    color: 'text-purple-600',
  },
  {
    name: 'Expert Support',
    description: 'Get guidance from our experienced financial advisors.',
    icon: UserGroupIcon,
    color: 'text-blue-600',
  },
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <>
      <Navigation />
      <div className="relative isolate" ref={containerRef}>
        {/* Hero section with Carousel */}
        <motion.div style={{ opacity, scale }}>
          <ImageCarousel />
        </motion.div>

        {/* Features section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-2xl lg:text-center"
          >
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Loan Solutions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer a wide range of loan products to meet your specific needs, whether you're looking to buy a home, start a business, or pursue higher education.
            </p>
          </motion.div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex flex-col rounded-2xl p-8 ${feature.bgColor} hover:shadow-lg transition-all duration-300`}
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className={`h-5 w-5 flex-none ${feature.color}`} aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <Link 
                        href={`/services#${feature.name.toLowerCase().replace(' ', '-')}`} 
                        className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 transition-colors duration-300"
                      >
                        Learn more <ArrowRightIcon className="inline-block h-4 w-4 ml-1" />
                      </Link>
                    </p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>

        {/* Loan Calculator Section */}
        <div className="bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mx-auto max-w-2xl text-center mb-16"
            >
              <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-full mb-4">
                <CalculatorIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Calculate Your Loan
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Use our loan calculator to estimate your monthly payments and total interest.
              </p>
            </motion.div>
            <LoanCalculator />
          </div>
        </div>

        {/* Benefits section */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mx-auto max-w-2xl lg:text-center"
            >
              <h2 className="text-base font-semibold leading-7 text-blue-600">
                Why Choose Us
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Your Trusted Financial Partner
              </p>
            </motion.div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      <benefit.icon className={`h-5 w-5 flex-none ${benefit.color}`} aria-hidden="true" />
                      {benefit.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{benefit.description}</p>
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="relative isolate overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),theme(colors.transparent))]" />
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
                Take the first step towards achieving your financial goals. Apply for a loan today and experience our exceptional service.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
                <Link
                  href="/apply"
                  className="w-full sm:w-auto rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 hover:scale-105"
                >
                  Apply Now
                </Link>
                <Link 
                  href="/contact" 
                  className="w-full sm:w-auto text-lg font-semibold leading-6 text-white hover:text-gray-100 transition-colors duration-300"
                >
                  Contact Us <ArrowRightIcon className="inline-block h-5 w-5 ml-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
