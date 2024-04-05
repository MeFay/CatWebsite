import { useState, useEffect } from "react";
import catJsonData from "../../assets/cats.json";

type Cat = {
  id: string;
  race: string;
  name: string;
  color: string;
  weight: number;
  age: number;
  location: string;
  image: string;
  price: number;
};

export const useData = () => {
  const [data, setData] = useState<Cat[]>([]);
  useEffect(() => {
    const localData = localStorage.getItem("catData");
    if (localData) {
      setData(JSON.parse(localData));
    } else {
      const initialData = Object.entries(catJsonData).map(([catId, cat]) => ({
        id: catId,
        ...cat,
      }));
      setData(initialData);
      localStorage.setItem("catData", JSON.stringify(initialData));
    }
  }, []);

  const removeCat = (catId: string) => {
    const newData = data.filter((cat) => cat.id !== catId);
    setData(newData);
    localStorage.setItem("catData", JSON.stringify(newData));
  };

  return { data, removeCat };
};
