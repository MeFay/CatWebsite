export type Cat = {
  id: string;
  race: string;
  name: string;
  color: string;
  weight: number;
  age: number;
  location: string;
  image: string;
  price: number;
  isSold: boolean;
  quantity: number;
  isFavorite: boolean;
};

export type Item = {
  quantity: number;
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  isSold: boolean;
  isFavorite: boolean;
};

export type CartItem = {
  isFavorite: boolean;
  id: string;
  price: number;
  name: string;
  image: string;
  isSold: boolean;
  quantity: number;
  race?: string;
  color?: string;
  location?: string;
  category?: string;
};