import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Table } from "../../components/Table/Table.tsx";
import { SearchBar } from "../../components/SearchBar/SearchBar.tsx";
import { Pagination } from "../../components/Pagination/Pagination.tsx";
import { CartItem } from "../../types.ts";
import "../../index.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index.ts";

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
  const { pageId } = useParams();
  const catData = useSelector((state: RootState) => state.catList.list);
  const { search, setSearch, debouncedSearch } = useSearch();
  const [currentPage, setCurrentPage] = useState(Number(pageId) || 1);

  useEffect(() => {
    setCurrentPage(Number(pageId) || 1);
  }, [pageId]);

  const filteredData = catData.filter(
    (cat: CartItem) =>
      !cat.isSold &&
      (cat.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        (cat.race &&
          cat.race.toLowerCase().includes(debouncedSearch.toLowerCase())) ||
        (cat.color &&
          cat.color.toLowerCase().includes(debouncedSearch.toLowerCase())) ||
        (cat.location &&
          cat.location.toLowerCase().includes(debouncedSearch.toLowerCase())))
  );

  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const tableLines = currentItems.map((cat: CartItem) => ({
    id: cat.id.toString(),
    cols: [cat.name, cat.race || "N/A", cat.image],
  }));
  console.log("Table lines:", tableLines);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
    navigate(`/catShop/${selected + 1}`);
  };

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      {filteredData.length > 0 ? (
        <>
          <Table
            headers={["Name", "Race", "Photo"]}
            lines={tableLines}
            dataType="cat"
          />
          console.log("Table lines:", tableLines);
          <Pagination
            pageCount={Math.ceil(filteredData.length / itemsPerPage)}
            handlePageChange={handlePageChange}
            currentPage={currentPage}
          />
        </>
      ) : (
        <p>No cats found.</p>
        //TODO: STYLE THE P
      )}
    </>
  );
};
