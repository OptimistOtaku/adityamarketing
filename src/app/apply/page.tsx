"use client";

import Navigation from '@/components/Navigation';
import LoanApplicationForm from '@/components/LoanApplicationForm';
import { motion } from 'framer-motion';

export default function ApplyPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 pt-24 pb-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-200/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-200/30 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-12"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Loan Application
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-700">
              Fill out the form below to apply for a loan. Please provide accurate information to help us process your application quickly.
            </p>
          </motion.div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-indigo-200/50 rounded-3xl blur-3xl -z-10" />
            <LoanApplicationForm />
          </div>
        </div>
      </div>
    </>
  );
} 