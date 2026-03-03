import { products } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

interface Props {
  params: { a: string; b: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const productA = products.find((p) => p.slug === params.a);
  const productB = products.find((p) => p.slug === params.b);

  if (!productA || !productB) return {};

  return {
    title: `${productA.name} vs ${productB.name} | Which is Best for You?`,
    description: `Compare ${productA.name} and ${productB.name} side by side. See features, pricing, and find out which ${productA.category} tool is better for your business.`,
  };
}

export default function ComparisonPage({ params }: Props) {
  const productA = products.find((p) => p.slug === params.a);
  const productB = products.find((p) => p.slug === params.b);

  if (!productA || !productB) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <Link href="/" className="text-blue-600 hover:underline mb-8 block">
        &larr; Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-8 text-center">
        {productA.name} <span className="text-gray-400">vs</span> {productB.name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[productA, productB].map((product) => (
          <div key={product.slug} className="border rounded-lg p-6 bg-white shadow-sm">
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.shortDescription}</p>
            <div className="mb-4">
              <span className="font-semibold">Category:</span> {product.category}
            </div>
            <div className="mb-6">
              <span className="font-semibold">Pricing:</span> {product.pricingTier}
            </div>
            <a
              href={product.affiliatePlaceholderUrl}
              className="block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit {product.name}
            </a>
          </div>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Detailed Comparison</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Both {productA.name} and {productB.name} are leading solutions in the {productA.category} space. 
          While {productA.name} is known for being {productA.shortDescription.toLowerCase()}, 
          {productB.name} offers a different approach by being {productB.shortDescription.toLowerCase()}.
        </p>
        <p className="text-gray-700 leading-relaxed">
          When choosing between {productA.name} and {productB.name}, consider your team's size and specific 
          workflow requirements. {productA.name} has a {productA.pricingTier} pricing model, while 
          {productB.name} is {productB.pricingTier}.
        </p>
      </section>
    </main>
  );
}
