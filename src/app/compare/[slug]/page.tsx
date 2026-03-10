import products from '@/lib/products.json';
import { Product } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ComparePage({ params }: PageProps) {
  const { slug } = params;
  const [product1Slug, product2Slug] = slug.split('-vs-');

  if (!product1Slug || !product2Slug) {
    notFound();
  }

  const product1 = (products as Product[]).find((p) => p.slug === product1Slug);
  const product2 = (products as Product[]).find((p) => p.slug === product2Slug);

  if (!product1 || !product2) {
    notFound();
  }

  return (
    <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12\">
      <div className=\"text-center mb-12\">
        <h1 className=\"text-4xl font-bold text-gray-900 mb-4\">
          {product1.name} vs {product2.name}
        </h1>
        <p className=\"text-xl text-gray-600\">
          Compare features, pricing, and more to find the best tool for your needs.
        </p
      </div>

      <div className=\"grid grid-cols-1 md:grid-cols-2 gap-8\">
        {[product1, product2].map((product) => (
          <div key={product.slug} className=\"bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200\">
            <div className=\"p-6\">
              <div className=\"flex items-center justify-between mb-4\">
                <h2 className=\"text-2xl font-bold text-gray-900\">{product.name}</h2>
                <span className=\"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800\">
                  {product.category}
                </span>
              </div>
              <p className=\"text-gray-600 mb-6\">{product.description}</p

              <div className=\"space-y-4\">
                <div>
                  <h3 className=\"font-semibold text-gray-900\">Key Features:</h3>
                  <ul className=\"mt-2 list-disc list-inside text-gray-600\">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className=\"font-semibold text-gray-900\">Pricing:</h3>
                  <p className=\"mt-1 text-gray-600\">{product.pricing}</p
                </div>
              </div>

              <div className=\"mt-8\">
                <a
                  href={product.url}
                  target=\"_blank\"
                  rel=\"noopener noreferrer\"
                  className=\"block w-full text-center bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200\"
                >
                  Visit {product.name}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=\"mt-12 text-center\">
        <Link href=\"/\" className=\"text-blue-600 hover:text-blue-800 font-medium\">
          ← Back to all comparisons
        </Link>
      </div>
    </div>
  );
}
