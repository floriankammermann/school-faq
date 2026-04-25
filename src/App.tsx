
import { motion } from 'motion/react';
import { ArrowRight, HelpCircle, ShieldCheck, HeartHandshake } from 'lucide-react';
import Layout from './components/Layout';
import FAQ from './components/FAQ';
import SubmissionForm from './components/SubmissionForm';

export default function App() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
                Your Voice <span className="text-primary-500">Matters</span> to Us.
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                The official portal for parents to stay informed, get answers, and help us improve our school community.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#submit"
                  className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2 group shadow-xl shadow-slate-200"
                >
                  Ask a Question
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#faqs"
                  className="bg-white text-slate-900 border-2 border-slate-100 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all"
                >
                  View FAQs
                </a>
              </div>
              
              <div className="mt-12 flex items-center gap-8 border-t border-slate-100 pt-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500 font-medium">
                  Joined by <span className="text-slate-900 font-bold">500+</span> proactive parents this semester.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-300">
                <img 
                  src="https://picsum.photos/seed/parent-connect/800/800" 
                  alt="Parent Support" 
                  className="w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white p-5 rounded-3xl shadow-xl shadow-slate-200 z-20 flex items-center gap-4 border border-slate-50"
              >
                <div className="bg-green-100 p-3 rounded-2xl">
                  <ShieldCheck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Trust Factor</p>
                  <p className="text-sm font-bold text-slate-900">Secure Feedback</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white p-5 rounded-3xl shadow-xl shadow-slate-200 z-20 flex items-center gap-4 border border-slate-50"
              >
                <div className="bg-primary-100 p-3 rounded-2xl">
                  <HeartHandshake className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Community</p>
                  <p className="text-sm font-bold text-slate-900">Direct Support</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-lg">
                <HelpCircle className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold">Comprehensive FAQs</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Find instant answers to common questions about enrollment, health policies, and daily schedules.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-lg">
                <ArrowRight className="w-8 h-8 text-primary-400 rotate-[-45deg]" />
              </div>
              <h3 className="text-xl font-bold">Fast Response Times</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our administration monitors submissions daily to ensure your concerns are addressed within 48 hours.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-lg">
                <ShieldCheck className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold">Secure Auditing</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                 Every complaint is logged and audited to ensure fair resolution and continuous school improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <SubmissionForm />
    </Layout>
  );
}
