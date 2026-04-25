
import { FAQItem } from './types';

export const INITIAL_FAQS: FAQItem[] = [
  {
    id: '1',
    category: 'General',
    question: 'How do I register my child for the upcoming school year?',
    answer: 'You can register through the "Enrollment" tab on the main school website or visit the administrative office between 8 AM and 4 PM.',
  },
  {
    id: '2',
    category: 'Logistics',
    question: 'What are the school hours?',
    answer: 'School starts at 8:30 AM and ends at 3:15 PM. After-school programs are available until 6:00 PM.',
  },
  {
    id: '3',
    category: 'Health',
    question: 'What is the procedure if my child is sick?',
    answer: 'Please call the attendance line before 8:00 AM to report an absence. A doctor\'s note is required if the absence exceeds three consecutive days.',
  },
  {
    id: '4',
    category: 'Communication',
    question: 'How often are parent-teacher conferences held?',
    answer: 'We hold formal conferences twice a year, usually in November and March. However, you can request a meeting with a teacher at any time.',
  },
  {
    id: '5',
    category: 'Safety',
    question: 'What security measures are in place at the school?',
    answer: 'We have a single-entry point system, CCTV monitoring, and all visitors must sign in and wear an identification badge.',
  }
];

export const CATEGORIES = ['General', 'Logistics', 'Health', 'Communication', 'Safety'];
