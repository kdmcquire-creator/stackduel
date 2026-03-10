import React from 'react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 font-sans text-slate-900">
      <h1 className="text-4xl font-bold tracking-tight mb-8">About StackDuel</h1>
      
      <section className="mb-12">
        <p className="text-lg leading-relaxed text-slate-600 mb-6">
          StackDuel is the premier platform for side-by-side software comparisons. We help developers, 
          founders, and tech teams make informed decisions by providing clear, data-driven insights 
          into the tools that power modern business.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed">
            To eliminate "choice paralysis" in the tech industry by providing objective, 
            comprehensive, and easy-to-digest comparisons of SaaS products and developer tools.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-4">Our Approach</h2>
          <p className="text-slate-600 leading-relaxed">
            We analyze features, pricing, performance, and user sentiment to create a 
            holistic view of every tool in our database, ensuring you choose the right 
            stack for your specific needs.
          </p>
        </section>
      </div>

      <section className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-200">
        <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
        <p className="text-slate-600 mb-0">
          Have questions or want to see a specific comparison? Reach out to our team 
          at <a href="mailto:contact@aiproductivityhub.co" className="text-blue-600 hover:underline">contact@aiproductivityhub.co</a>.
        </p>
      </section>
    </div>
  );
}
