import { products } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

interface Props {
  params: { category: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = params.category.replace("-", " ").toUpperCase();
  const validCategories = ["CRM", "PROJECT MANAGEMENT"];
  
  if (!validCategories.includes(category)) return {};

  return {
    title: `Best ${category} Tools of 2026 | Reviewed & Compared`,
    description: `Find the best ${category} software for your business. Read reviews, compare pricing, and select the right tool for your workflow.`,
  };
}

export default function BestCategoryPage({ params }: Props) {
  const categoryParam = params.category.replace("-", " ").toUpperCase();
  const filteredProducts = products.filter(
    (p) => p.category.toUpperCase() === categoryParam
  );

  if (filteredProducts.length === 0) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <Link href="/" className="text-blue-600 hover:underline mb-8 block">
        &larr; Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-4">
        Best {categoryParam} Tools
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Compare the top-rated {categoryParam} software solutions available today.
      </p>

      <div className="space-y-8">
        {filteredProducts.map((product, index) => (
          <div key={product.slug} className="border rounded-lg p-6 bg-white shadow-sm flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">
              {index + 1}
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-bold">{product.name}</h2>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {product.pricingTier}
                </span>
              </div>
              <p className="text-gray-600 mb-6">{product.shortDescription}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={product.affiliatePlaceholderUrl}
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
                <Link
                  href={`/compare/${product.slug}/vs/${filteredProducts[index === 0 ? 1 : 0].slug}`}
                  className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition font-medium"
                >
                  Compare
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
