"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BanknotesIcon, CalendarIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(10);
  const [loanTerm, setLoanTerm] = useState(12);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    calculateLoan();
  }, [loanAmount, interestRate, loanTerm]);

  const calculateLoan = () => {
    const principal = loanAmount;
    const rate = interestRate / 100 / 12; // Monthly interest rate
    const time = loanTerm;

    const monthlyPayment = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    const totalPayment = monthlyPayment * time;
    const totalInterest = totalPayment - principal;

    setMonthlyPayment(monthlyPayment);
    setTotalPayment(totalPayment);
    setTotalInterest(totalInterest);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Loan Calculator</h2>
        
        <div className="space-y-6">
          {/* Loan Amount */}
          <div>
            <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-2">
              Loan Amount
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BanknotesIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="range"
                id="loanAmount"
                min="10000"
                max="10000000"
                step="10000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="mt-2 text-right text-sm text-gray-600">
                {formatCurrency(loanAmount)}
              </div>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700 mb-2">
              Interest Rate (% per annum)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <ChartBarIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="range"
                id="interestRate"
                min="1"
                max="30"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="mt-2 text-right text-sm text-gray-600">
                {interestRate}%
              </div>
            </div>
          </div>

          {/* Loan Term */}
          <div>
            <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700 mb-2">
              Loan Term (months)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CalendarIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="range"
                id="loanTerm"
                min="3"
                max="360"
                step="3"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="mt-2 text-right text-sm text-gray-600">
                {loanTerm} months
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <div className="bg-blue-50 rounded-xl p-4">
            <h3 className="text-sm font-medium text-blue-600">Monthly Payment</h3>
            <p className="mt-2 text-2xl font-semibold text-gray-900">
              {formatCurrency(monthlyPayment)}
            </p>
          </div>
          <div className="bg-indigo-50 rounded-xl p-4">
            <h3 className="text-sm font-medium text-indigo-600">Total Payment</h3>
            <p className="mt-2 text-2xl font-semibold text-gray-900">
              {formatCurrency(totalPayment)}
            </p>
          </div>
          <div className="bg-purple-50 rounded-xl p-4">
            <h3 className="text-sm font-medium text-purple-600">Total Interest</h3>
            <p className="mt-2 text-2xl font-semibold text-gray-900">
              {formatCurrency(totalInterest)}
            </p>
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            This is an estimate. Actual loan terms may vary based on your credit score and other factors.
          </p>
        </div>
      </div>
    </motion.div>
  );
} 