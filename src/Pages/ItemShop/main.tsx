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
  const { itemData } = useContext(CartContext);
  const { pageId } = useParams();
  const [currentPage, setCurrentPage] = useState(Number(pageId) || 1);

  useEffect(() => {
    setCurrentPage(Number(pageId) || 1);
  }, [pageId]);

  const filteredData = itemData.filter(
    (item) =>
      !item.isSold &&
      (item.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        (item.category &&
          item.category.toLowerCase().includes(debouncedSearch.toLowerCase())))
  );

  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const tableLines = currentItems.map((item) => ({
    id: item.id.toString(),
    cols: [item.name, item.category || "N/A", item.image],
  }));

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
    navigate(`/itemShop/${selected + 1}`);
  };

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <Table headers={["Name", "Category", "Photo"]} lines={tableLines} dataType="item" />

      <Pagination
        pageCount={Math.ceil(filteredData.length / itemsPerPage)}
        handlePageChange={handlePageChange}
      />
    </>
  );
};
