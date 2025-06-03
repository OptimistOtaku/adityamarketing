import { Metadata } from 'next';

const defaultMetadata: Metadata = {
  metadataBase: new URL('https://adityamarketing.vercel.app'),
  title: {
    default: 'Aditya Marketing - Hassle-Free Loans & Financing Solutions',
    template: '%s | Aditya Marketing'
  },
  description: 'Aditya Marketing offers quick, transparent, and reliable loan and financing services including personal, home, car, business loans and more. Apply online now and get expert assistance.',
  keywords: [
    'Aditya Marketing',
    'loan application',
    'personal loan',
    'home loan',
    'car loan',
    'business loan',
    'loan agent India',
    'finance solutions',
    'loan against property',
    'online loan approval'
  ],
  authors: [{ name: 'Aditya Marketing' }],
  creator: 'Aditya Marketing',
  publisher: 'Aditya Marketing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adityamarketing.vercel.app',
    siteName: 'Aditya Marketing',
    title: 'Aditya Marketing - Hassle-Free Loans & Financing Solutions',
    description: 'Apply for home, personal, business, or car loans online with expert support and fast approval from Aditya Marketing.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aditya Marketing - Finance Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Marketing - Hassle-Free Loans & Financing Solutions',
    description: 'Quick loan approvals, expert guidance, and simple application process — Aditya Marketing is your trusted finance partner.',
    images: ['/images/og-image.jpg'],
    creator: '@adityamarketing',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'phg8ZiX35wBcPt6MpUD9xfUeFVTWpJLEvrjd8fA-8uE',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
  },
};

export default defaultMetadata;
