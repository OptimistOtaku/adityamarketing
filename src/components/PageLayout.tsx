"use client";

import { ReactNode } from 'react';
import Navigation from './Navigation';

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-200/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-200/30 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-72 pb-12">
          {children}
        </div>
      </main>
    </>
  );
} 