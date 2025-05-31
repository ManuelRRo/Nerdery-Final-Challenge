export type VariantWithProductInfo = {
  product_id: string;
  product: {
    name: string;
    price: number;
    active: boolean;
  };
} | null;
