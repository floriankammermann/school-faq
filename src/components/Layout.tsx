
import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Heart, Shield, HelpCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-primary-500 p-2 rounded-xl">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold font-display text-slate-900">ParentConnect</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#faqs" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">FAQs</a>
              <a href="#submit" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Submit Request</a>
            </nav>
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline text-xs font-semibold text-slate-400 uppercase tracking-wider">Support Portal</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white">
                <Heart className="w-5 h-5 text-primary-500" />
                <span className="text-lg font-bold font-display">ParentConnect</span>
              </div>
              <p className="text-sm leading-relaxed">
                Dedicated to bridging the communication gap between parents and administration with transparency and care.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary-500 transition-colors">Emergency Information</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">Contact Admin</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <p className="text-sm">123 Education Lane<br />Springfield, ST 12345</p>
              <p className="text-sm mt-2">support@parentconnect.edu</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs">
            © {new Date().getFullYear()} ParentConnect. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
