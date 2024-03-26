import  { useState } from "react";

import "../../index.css";
import { Table } from "../../components/Table/Table.tsx";
import catJsonData from "../../assets/cats.json";
import ReactPaginate from "react-paginate";

type Cat = {
  id: number;
  race: string;
  name: string;
  image: string;
};

export const MainSection = () => {
  const [catList, setCatList] = useState<Array<Cat>>(
    Object.entries(catJsonData).map(([id, cat]) => ({ id: Number(id), ...cat }))
  );

  const TableLines = catList.map((cat) => {
    return {
      id: cat.id.toString(),
      cols: [cat.name, cat.race, cat.image],
    };
  });

  return (
    <>
      <Table headers={["Name", "Rsdd", "Photo"]} lines={TableLines} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(a) => {
          console.log(a);
        }}
        pageRangeDisplayed={5}
        pageCount={5}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};
