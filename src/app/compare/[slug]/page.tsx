import products from '../../../lib/products.json'
import { Product } from '../../../lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

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
      <h1 className="text-3xl font-bold mb-8">{product1.name} vs {product2.name}</h1>
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
          <h2 className="text-2xl font-bold mb-4">{product1.name}</h2>
          <p className="text-gray-600 mb-6">{product1.description}</p>
          <Link 
            href={product1.websiteUrl || '#'} 
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Visit {product1.name}
          </Link>
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
          <h2 className="text-2xl font-bold mb-4">{product2.name}</h2>
          <p className="text-gray-600 mb-6">{product2.description}</p>
          <Link 
            href={product2.websiteUrl || '#'} 
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Visit {product2.name}
          </Link>
        </div>
      </div>
    </div>
  );
}
