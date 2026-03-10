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
  const product1 = allProducts.find(p => p.slug === product1Slug);
  const product2 = allProducts.find(p => p.slug === product2Slug);

  if (!product1 || !product2) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product 1 */}
        <div className="border rounded-lg p-6">
          <div className="relative h-48 w-full mb-4">
            <Image
              src={product1.image || ''}
              alt={product1.name}
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">{product1.name}</h2>
          <p className="text-gray-600 mb-4">{product1.description}</p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-semibold">Starting Price:</span>
              <span>${product1.pricing.startingPrice}</span>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="border rounded-lg p-6">
          <div className="relative h-48 w-full mb-4">
            <Image
              src={product2.image || ''}
              alt={product2.name}
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">{product2.name}</h2>
          <p className="text-gray-600 mb-4">{product2.description}</p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-semibold">Starting Price:</span>
              <span>${product2.pricing.startingPrice}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link href="/" className="text-blue-600 hover:underline">
          Back to all products
        </Link>
      </div>
    </div>
  );
}
