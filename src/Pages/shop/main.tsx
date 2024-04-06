import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../../index.css";
import { Table } from "../../components/Table/Table.tsx";
import { SearchBar } from "../../components/SearchBar/SearchBar.tsx";
import { Pagination } from "../../components/Pagination/Pagination.tsx";
import { useContext } from "react"; // Add this line
import { CartContext } from "../../Pages/cartPage/CartContext"; 

type Cat = {
  id: string;
  race: string;
  name: string;
  color: string;
  location: string;
  image: string;
  price: number;
  isSold: boolean;
};

const useSearch = (initialSearch = "") => {
  const [search, setSearch] = useState(initialSearch);
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearch(search);
    }, 230);
    return () => {
      clearTimeout(timerId);
    };
  }, [search]);

  return { search, setSearch, debouncedSearch };
};


export const MainSection = () => {
  const itemsPerPage = 4;
  const navigate = useNavigate();
  const { search, setSearch, debouncedSearch } = useSearch();
  const { data } = useContext(CartContext);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = data.filter(
    (cat) =>
      !cat.isSold &&
      (cat.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        cat.race.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        cat.color.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        cat.location.toLowerCase().includes(debouncedSearch.toLowerCase()))
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const { pageId } = useParams();

  useEffect(() => {
    setCurrentPage(Number(pageId) || 1);
  }, [pageId]);

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
      <SearchBar search={search} setSearch={setSearch} />

      <Table headers={["Name", "Race", "Photo"]} lines={TableLines} />

      <Pagination
        pageCount={Math.ceil(data.length / itemsPerPage)}
        handlePageChange={handlePageChange}
      />
    </>
  );
};
