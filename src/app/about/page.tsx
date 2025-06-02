"use client";

import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon,
  UserGroupIcon,
  ChartBarIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const stats = [
  { id: 1, name: 'Years of Experience', value: '20+' },
  { id: 2, name: 'Happy Customers', value: '10,000+' },
  { id: 3, name: 'Loan Amount Disbursed', value: '₹500Cr+' },
  { id: 4, name: 'Cities Served', value: '15+' },
];

const values = [
  {
    name: 'Customer First',
    description: 'We prioritize our customers\' needs and work tirelessly to provide the best financial solutions.',
    icon: UserGroupIcon,
  },
  {
    name: 'Transparency',
    description: 'We believe in complete transparency in our processes, terms, and conditions.',
    icon: ChartBarIcon,
  },
  {
    name: 'Trust & Reliability',
    description: 'Building long-term relationships through trust and reliable service.',
    icon: ShieldCheckIcon,
  },
];

export default function AboutPage() {
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
              About Aditya Marketing
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are a leading financial services company dedicated to helping individuals and businesses achieve their financial goals through personalized loan solutions.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col"
                >
                  <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    {stat.value}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>

          <div className="mx-auto mt-32 max-w-2xl sm:mt-40 lg:mt-48 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {values.map((value) => (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <value.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {value.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>

          <div className="mx-auto mt-32 max-w-2xl sm:mt-40 lg:mt-48 lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-gray-50 p-8"
            >
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Mission</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                At Aditya Marketing, our mission is to empower individuals and businesses with accessible and affordable financial solutions. We strive to be the most trusted financial partner by:
              </p>
              <ul role="list" className="mt-8 space-y-4">
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                  <span className="text-base leading-7 text-gray-600">
                    Providing personalized loan solutions tailored to individual needs
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                  <span className="text-base leading-7 text-gray-600">
                    Maintaining the highest standards of transparency and ethical practices
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                  <span className="text-base leading-7 text-gray-600">
                    Ensuring quick and hassle-free loan processing
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                  <span className="text-base leading-7 text-gray-600">
                    Building long-term relationships through exceptional customer service
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
} 