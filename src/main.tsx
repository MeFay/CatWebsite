import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Table } from "./components/Table.tsx";
import { useEffect, useState } from "react";

type Cat = {
  id: number;
  race: string;
  name: string;
  color: string;
  weight: number;
  age: number;
  location: string;
  image: string;
  price: number;
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export const MainSection = () => {
  const [catList, setCatList] = useState<Array<Cat>>([]);

  useEffect(() => {
    fetch("https://localhost:8080/cats")
      .then((response) => {
        return response.json();
      })
      .then((cats: Array<Cat>) => {
        setCatList(cats);
      });
  }, []);

  const TableLines = catList.map((cat) => {
    return {
      id: cat.id.toString(),
      cols: [cat.name, cat.race, cat.price],
    };
  });

  return (
    <div>
      <Table headers={["Name", "Race", "Price"]} lines={TableLines} />
    </div>
  );
};
