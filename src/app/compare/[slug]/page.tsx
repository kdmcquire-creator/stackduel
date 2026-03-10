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
        </p>
