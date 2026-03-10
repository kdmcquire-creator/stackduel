import products from '../../../lib/products.json';
import { Product } from '../../../lib/types';
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

  const allProducts = products as Product[];
  const product1 = allProducts.find((p) => p.slug === product1Slug);
  const product2 = allProducts.find((p) => p.slug === product2Slug);

  if (!product1 || !product2) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {product1.name} vs {product2.name}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[product1, product2].map((product) => (
          <div key={product.slug} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h2>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500">Starting Price</span>
                  <span className="font-semibold">{product.pricing.startingPrice}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500">Billing</span>
                  <span className="font-semibold">{product.pricing.billingPeriod}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
