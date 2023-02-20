export type ShoppingCartItem = {
  id: string;
  price: string;
  name: string;
};

export type ShoppingCart = ShoppingCartItem[];

export type ProductInfo = {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  quantity: number;
  image: string | null;
  weight: number;
  model: string;
};
