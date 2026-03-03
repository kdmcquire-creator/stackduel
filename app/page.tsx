import Link from "next/link";
import { products } from "@/lib/data";

export default function Home() {
  const categories = Array.from(new Set(products.map((p) => p.category)));
  
  // Get 10 top comparisons (mixing CRM and PM)
  const topComparisons = [
    { a: "hubspot", b: "salesforce" },
    { a: "asana", b: "trello" },
    { a: "monday-pm", b: "clickup" },
    { a: "pipedrive", b: "zoho-crm" },
    { a: "notion", b: "asana" },
    { a: "clickup", b: "trello" },
    { a: "hubspot", b: "pipedrive" },
    { a: "salesforce", b: "monday-crm" },
    { a: "jira", b: "monday-pm" },
    { a: "wrike", b: "asana" },
  ];

  return (
    <main className="max-w-5xl mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          StackDuel
        </h1>
        <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
          Compare the world's best SaaS tools side-by-side. 
          Unbiased data to help you build the perfect stack.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <section>
          <h2 className="text-3xl font-bold mb-6">Top Categories</h2>
          <div className="space-y-4">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/best/${cat.toLowerCase().replace(" ", "-")}`}
                className="block p-6 border rounded-xl hover:border-blue-500 hover:shadow-md transition bg-white"
              >
                <h3 className="text-xl font-bold text-blue-600">Best {cat} Tools &rarr;</h3>
                <p className="text-gray-600 mt-2">
                  Browse and compare the top-rated {cat} solutions for your team.
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Popular Comparisons</h2>
          <div className="grid grid-cols-1 gap-4">
            {topComparisons.map((comp) => {
              const pA = products.find((p) => p.slug === comp.a);
              const pB = products.find((p) => p.slug === comp.b);
              if (!pA || !pB) return null;
              return (
                <Link
                  key={`${comp.a}-vs-${comp.b}`}
                  href={`/compare/${comp.a}/vs/${comp.b}`}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition flex justify-between items-center group bg-white"
                >
                  <span className="font-medium text-gray-800">
                    {pA.name} <span className="text-gray-400 mx-2 text-sm">VS</span> {pB.name}
                  </span>
                  <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition">
                    Compare &rarr;
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      </div>

      <section className="bg-blue-50 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to optimize your workflow?</h2>
        <p className="text-lg text-gray-700 mb-8">
          Check out our latest guides on selecting the best software for your business needs.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/best/crm" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
            Best CRM Tools
          </Link>
          <Link href="/best/project-management" className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition">
            Best Project Management
          </Link>
        </div>
      </section>
    </main>
  );
}
