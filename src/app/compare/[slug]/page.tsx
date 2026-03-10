import Link from 'next/link';
import Image from 'next/image';
import productsData from '@/lib/products.json';
import { Product } from '@/lib/types';

export default function ComparePage({ params }: { params: { slug: string } }) {
  const products = productsData.products as Product[];
  const [slug1, slug2] = params.slug.split('-vs-');

  const product1 = products.find((p) => p.slug === slug1);
  const product2 = products.find((p) => p.slug === slug2);

  if (!product1 || !product2) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Comparison Not Found</h1>
        <p className="text-gray-600">We couldn't find the products you're looking for.</p>
        <Link href="/" className="text-blue-600 hover:underline mt-4 inline-block">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">
        {product1.name} vs {product2.name}
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Product 1 */}
        <div className="border rounded-lg p-6 flex flex-col items-center">
          <div className="relative w-32 h-32 mb-4">
            <Image
              src={product1.image || ''}
              alt={product1.name}
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">{product1.name}</h2>
          <p className="text-gray-600 mb-4 text-center">{product1.description}</p>
          <div className="mt-auto w-full">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Starting Price:</span>
              <span>${product1.pricing.startingPrice}</span>
            </div>
            <a 
              href={product1.websiteUrl || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors mt-4"
            >
              Visit {product1.name}
            </a>
          </div>
        </div>

        {/* Product 2 */}
        <div className="border rounded-lg p-6 flex flex-col items-center">
          <div className="relative w-32 h-32 mb-4">
            <Image
              src={product2.image || ''}
              alt={product2.name}
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">{product2.name}</h2>
          <p className="text-gray-600 mb-4 text-center">{product2.description}</p>
          <div className="mt-auto w-full">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Starting Price:</span>
              <span>${product2.pricing.startingPrice}</span>
            </div>
            <a 
              href={product2.websiteUrl || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors mt-4"
            >
              Visit {product2.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
