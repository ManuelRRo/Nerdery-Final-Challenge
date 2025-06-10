export type UpdateVariantsStockDto = {
  quantity: number;
  variants: {
    stock: number;
    id: string;
  };
};
