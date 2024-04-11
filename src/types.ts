export type Cat = {
  id: number;
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
};

export type Item = {
  quantity: number;
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  isSold: boolean;
};
