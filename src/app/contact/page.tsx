import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Contact Us</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 mb-12">
            Have questions about StackDuel? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
          </p>

          <div className="grid gap-8">
            <section className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-2">Email</h2>
              <p className="text-xl font-medium text-slate-900">
                <a href="mailto:contact@aiproductivityhub.co" className="hover:text-blue-600 transition-colors">
                  contact@aiproductivityhub.co
                </a>
              </p>
            </section>

            <section className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-2">Response Time</h2>
              <p className="text-slate-600">
                We typically respond to all inquiries within 24-48 business hours.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-100">
            <p className="text-sm text-slate-400">
              StackDuel is a project by AI Productivity Hub.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
