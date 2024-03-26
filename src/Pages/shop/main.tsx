import { useState, useEffect } from "react";
import "../../index.css";
import { Table } from "../../components/Table/Table.tsx";
import catJsonData from "../../assets/cats.json";
import ReactPaginate from "react-paginate";
import { PaginationContainer } from "./styled.ts";

type Cat = {
  id: number;
  race: string;
  name: string;
  image: string;
};

export const MainSection = () => {
  const [data, setData] = useState<Array<Cat>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setData(
      Object.entries(catJsonData).map(([id, cat]) => ({
        id: Number(id),
        ...cat,
      }))
    );
  }, []);

  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data
    ? Object.values(data).slice(indexOfFirstItem, indexOfLastItem)
    : [];

  const TableLines = currentItems.map((cat) => {
    return {
      id: cat.id.toString(),
      cols: [cat.name, cat.race, cat.image],
    };
  });

  return (
    <>
      <Table headers={["Name", "Race", "Photo"]} lines={TableLines} />
      <PaginationContainer>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={({ selected }) => setCurrentPage(selected + 1)}
          pageRangeDisplayed={5}
          pageCount={Math.ceil(data.length / itemsPerPage)}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          activeClassName="active"
          activeLinkClassName="active-link"
        />
      </PaginationContainer>
    </>
  );
};
