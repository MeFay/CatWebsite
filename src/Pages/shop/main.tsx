import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Table } from "../../components/Table/Table.tsx";
import { SearchBar } from "../../components/SearchBar/SearchBar.tsx";
import { Pagination } from "../../components/Pagination/Pagination.tsx";
import { CartContext } from "../../Pages/cartPage/CartContext";
import "../../index.css";

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
  const { pageId } = useParams();
  const [currentPage, setCurrentPage] = useState(Number(pageId) || 1);

  useEffect(() => {
    setCurrentPage(Number(pageId) || 1);
  }, [pageId]);

  const filteredData = data.filter(
    (cat) =>
      !cat.isSold &&
      (cat.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        cat.race.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        cat.color.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        cat.location.toLowerCase().includes(debouncedSearch.toLowerCase()))
  );

  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const TableLines = currentItems.map((cat) => ({
    id: cat.id.toString(),
    cols: [cat.name, cat.race, cat.image],
  }));

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
    navigate(`/shop/${selected + 1}`);
  };

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <Table headers={["Name", "Race", "Photo"]} lines={TableLines} />
      <Pagination
        pageCount={Math.ceil(filteredData.length / itemsPerPage)}
        handlePageChange={handlePageChange}
      />
    </>
  );
};
