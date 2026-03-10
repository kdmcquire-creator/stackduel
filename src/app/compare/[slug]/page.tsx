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
        <div className="flex justify-center items-center space-x-8">
          <div className="text-center">
            <div className="relative w-48 h-48 mb-4">
              <Image
                src={product1.image}
                alt={product1.name}
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-semibold">{product1.name}</h2>
          </div>
          <div className="text-4xl font-bold text-gray-400">VS</div>
          <div className="text-center">
            <div className="relative w-48 h-48 mb-4">
              <Image
                src={product2.image}
                alt={product2.name}
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-semibold">{product2.name}</h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="h-12"></div>
          <div className="font-medium text-gray-500">Price</div>
          <div className="font-medium text-gray-500">Rating</div>
          <div className="font-medium text-gray-500">Reviews</div>
        </div>
        
        <div className="space-y-4 text-center">
          <div className="h-12 font-bold text-lg">{product1.name}</div>
          <div>{product1.price}</div>
          <div>{product1.rating} / 5</div>
          <div>{product1.reviews} reviews</div>
        </div>

        <div className="space-y-4 text-center">
          <div className="h-12 font-bold text-lg">{product2.name}</div>
          <div>{product2.price}</div>
          <div>{product2.rating} / 5</div>
          <div>{product2.reviews} reviews</div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <Link 
          href="/"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to all products
        </Link>
      </div>
    </div>
  );
}
