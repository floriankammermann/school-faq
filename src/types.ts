
export type SubmissionType = 'question' | 'complaint';

export interface Submission {
  id: string;
  type: SubmissionType;
  subject: string;
  message: string;
  parentName: string;
  email: string;
  status: 'pending' | 'resolved';
  createdAt: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
