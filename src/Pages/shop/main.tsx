import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import { Table } from "../../components/Table/Table.tsx";
import catJsonData from "../../assets/cats.json";
import ReactPaginate from "react-paginate";
import { StyledPagination, StyledSearchBar } from "./styled.ts";

type Cat = {
  id: number;
  race: string;
  name: string;
  color: string;
  location: string;
  image: string;
  price: number;
};

export const MainSection = () => {
  const [data, setData] = useState<Array<Cat>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearch(search);
    }, 230);

    return () => {
      clearTimeout(timerId);
    };
  }, [search]);

  const filteredData = data.filter(
    (cat) =>
      cat.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      cat.race.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      cat.color.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      cat.location.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

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
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const TableLines = currentItems.map((cat) => {
    return {
      id: cat.id.toString(),
      cols: [cat.name, cat.race, cat.image],
    };
  });

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
    navigate(`/shop/${selected + 1}`);
  };

  return (
    <>
      <StyledSearchBar
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />

      <Table headers={["Name", "Race", "Photo"]} lines={TableLines} />

      <StyledPagination>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageChange}
          pageRangeDisplayed={5}
          pageCount={Math.ceil(data.length / itemsPerPage)}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          activeClassName="active"
          activeLinkClassName="active-link"
        />
      </StyledPagination>
    </>
  );
};
