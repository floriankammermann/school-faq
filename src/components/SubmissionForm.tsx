
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { Send, AlertCircle, CheckCircle2, MessageSquare, AlertTriangle } from 'lucide-react';
import { cn } from '../lib/utils';
import { SubmissionType } from '../types';

const formSchema = z.object({
  parentName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function SubmissionForm() {
  const [type, setType] = useState<SubmissionType>('question');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real app, this would save to Firestore
    const submission = {
      ...data,
      type,
      id: Math.random().toString(36).substr(2, 9),
      status: 'pending',
      createdAt: Date.now(),
    };
    
    console.log('Submission saved:', submission);
    
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="submit" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Reach Out to Us</h2>
              <p className="text-slate-500">Have a question or a concern? We're here to listen and help.</p>
            </div>

            <div className="flex p-1 bg-slate-100 rounded-2xl mb-8">
              <button
                onClick={() => setType('question')}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all",
                  type === 'question' ? "bg-white text-primary-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                )}
              >
                <MessageSquare className="w-4 h-4" />
                Ask a Question
              </button>
              <button
                onClick={() => setType('complaint')}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all",
                  type === 'complaint' ? "bg-white text-red-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                )}
              >
                <AlertTriangle className="w-4 h-4" />
                Submit Complaint
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Full Name</label>
                  <input
                    {...register('parentName')}
                    className={cn(
                      "w-full px-4 py-3 bg-slate-50 border-2 rounded-xl outline-none transition-all focus:bg-white",
                      errors.parentName ? "border-red-100 focus:border-red-500" : "border-transparent focus:border-primary-500"
                    )}
                    placeholder="Jane Doe"
                  />
                  {errors.parentName && <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium"><AlertCircle className="w-3 h-3" /> {errors.parentName.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input
                    {...register('email')}
                    className={cn(
                      "w-full px-4 py-3 bg-slate-50 border-2 rounded-xl outline-none transition-all focus:bg-white",
                      errors.email ? "border-red-100 focus:border-red-500" : "border-transparent focus:border-primary-500"
                    )}
                    placeholder="jane@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium"><AlertCircle className="w-3 h-3" /> {errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Subject</label>
                <input
                  {...register('subject')}
                  className={cn(
                    "w-full px-4 py-3 bg-slate-50 border-2 rounded-xl outline-none transition-all focus:bg-white",
                    errors.subject ? "border-red-100 focus:border-red-500" : "border-transparent focus:border-primary-500"
                  )}
                  placeholder={type === 'question' ? "What is your question about?" : "Tell us the area of concern"}
                />
                {errors.subject && <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium"><AlertCircle className="w-3 h-3" /> {errors.subject.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Message</label>
                <textarea
                  {...register('message')}
                  rows={5}
                  className={cn(
                    "w-full px-4 py-3 bg-slate-50 border-2 rounded-xl outline-none transition-all focus:bg-white resize-none",
                    errors.message ? "border-red-100 focus:border-red-500" : "border-transparent focus:border-primary-500"
                  )}
                  placeholder="Provide as much detail as possible..."
                />
                {errors.message && <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium"><AlertCircle className="w-3 h-3" /> {errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 relative overflow-hidden",
                  type === 'question' ? "bg-primary-500 hover:bg-primary-600 shadow-lg shadow-primary-200" : "bg-red-500 hover:bg-red-600 shadow-lg shadow-red-200",
                  isSubmitting && "opacity-80 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit {type === 'question' ? 'Question' : 'Complaint'}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          >
            <div className="bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-400" />
              <div>
                <p className="font-bold text-sm">Submission Received!</p>
                <p className="text-xs text-slate-400">We appreciate your feedback and will be in touch soon.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
