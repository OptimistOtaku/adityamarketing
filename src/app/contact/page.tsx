"use client";

import Navigation from '@/components/Navigation';
import CallbackForm from '@/components/CallbackForm';
import { motion } from 'framer-motion';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';

const contactInfo = [
  {
    name: 'Phone',
    description: '+91 6291240198',
    icon: PhoneIcon,
  },
  {
    name: 'Email',
    description: 'adityamarketing1971@gmail.com',
    icon: EnvelopeIcon,
  },
  {
    name: 'Address',
    description: 'Sachdeva Tower 1st Floor, Rohini Sector 8, Delhi 110085',
    icon: MapPinIcon,
  },
];

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <div className="relative isolate pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Have questions? We're here to help. Reach out to us through any of the following channels or request a callback.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <div className="rounded-2xl bg-gray-50 p-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Get in Touch</h2>
                <dl className="mt-8 space-y-6">
                  {contactInfo.map((item) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex gap-x-4"
                    >
                      <dt className="flex-none">
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-7 w-6 text-blue-600" aria-hidden="true" />
                      </dt>
                      <dd>
                        <p className="text-sm font-semibold leading-6 text-gray-900">{item.name}</p>
                        <p className="mt-1 text-sm leading-6 text-gray-600">{item.description}</p>
                      </dd>
                    </motion.div>
                  ))}
                </dl>
              </div>

              <div className="rounded-2xl bg-gray-50 p-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Business Hours</h2>
                <dl className="mt-8 space-y-4">
                  <div className="flex justify-between">
                    <dt className="text-sm font-semibold leading-6 text-gray-900">Monday - Friday</dt>
                    <dd className="text-sm leading-6 text-gray-600">9:00 AM - 6:00 PM</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm font-semibold leading-6 text-gray-900">Saturday</dt>
                    <dd className="text-sm leading-6 text-gray-600">10:00 AM - 4:00 PM</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm font-semibold leading-6 text-gray-900">Sunday</dt>
                    <dd className="text-sm leading-6 text-gray-600">Closed</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="rounded-2xl bg-gray-50 p-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Request a Callback</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Fill out the form below and we'll get back to you at your preferred time.
              </p>
              <div className="mt-8">
                <CallbackForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 