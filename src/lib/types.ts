export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  pricing: {
    startingPrice: string;
    billingPeriod: string;
    free: boolean;
  };
  features: string[];
  pros: string[];
  cons: string[];
  rating?: number;
  reviews?: number;
  image?: string;
}
