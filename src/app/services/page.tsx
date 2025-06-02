"use client";

import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  BanknotesIcon,
  HomeIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Personal Loans',
    description: 'Quick and easy personal loans with competitive interest rates.',
    features: [
      'Loan amount up to ₹25 Lakhs',
      'Flexible repayment tenure up to 60 months',
      'Minimal documentation',
      'Quick approval process',
      'No prepayment charges',
    ],
    icon: BanknotesIcon,
    href: '/apply',
  },
  {
    name: 'Home Loans',
    description: 'Make your dream home a reality with our flexible home loan options.',
    features: [
      'Loan amount up to ₹5 Crores',
      'Repayment tenure up to 30 years',
      'Competitive interest rates',
      'Zero processing fee',
      'Balance transfer facility',
    ],
    icon: HomeIcon,
    href: '/apply',
  },
  {
    name: 'Business Loans',
    description: 'Fuel your business growth with our comprehensive business financing.',
    features: [
      'Loan amount up to ₹2 Crores',
      'Flexible repayment options',
      'Collateral-free loans available',
      'Quick disbursement',
      'Business expansion support',
    ],
    icon: BuildingOfficeIcon,
    href: '/apply',
  },
  {
    name: 'Education Loans',
    description: 'Invest in your future with our education financing solutions.',
    features: [
      'Covers all education expenses',
      'Repayment starts after course completion',
      'No margin money required',
      'Covers domestic and international education',
      'Tax benefits available',
    ],
    icon: AcademicCapIcon,
    href: '/apply',
  },
  {
    name: 'Vehicle Loans',
    description: 'Drive your dream vehicle with our attractive vehicle financing options.',
    features: [
      'Financing for new and used vehicles',
      'Loan amount up to ₹50 Lakhs',
      'Flexible repayment tenure',
      'Zero documentation charges',
      'Quick approval process',
    ],
    icon: TruckIcon,
    href: '/apply',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <div className="relative isolate pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl lg:text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Loan Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer a comprehensive range of loan products to meet your diverse financial needs. Choose the loan that best suits your requirements.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {services.map((service) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col rounded-2xl bg-gray-50 p-8"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <service.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                    <ul role="list" className="mt-8 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-8">
                      <Link
                        href={service.href}
                        className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500"
                      >
                        Apply Now <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
} 