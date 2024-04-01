import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "../../index.css";
import { Table } from "../../components/Table/Table.tsx";
import catJsonData from "../../assets/cats.json";
import { SearchBar } from "../../components/SearchBar/SearchBar.tsx";
import { Pagination } from "../../components/Pagination/Pagination.tsx";

type Cat = {
  id: string;
  race: string;
  name: string;
  color: string;
  location: string;
  image: string;
  price: number;
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

const useData = () => {
  const [data, setData] = useState<Array<Cat>>([]);

  useEffect(() => {
    setData(
      Object.entries(catJsonData).map(([_, cat]) => ({
        id: uuidv4(),
        ...cat,
      }))
    );
  }, []);

  return { data };
};

export const MainSection = () => {
  const itemsPerPage = 4;
  const navigate = useNavigate();
  const { search, setSearch, debouncedSearch } = useSearch();
  const { data } = useData();
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = data.filter(
    (cat) =>
      cat.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      cat.race.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      cat.color.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      cat.location.toLowerCase().includes(debouncedSearch.toLowerCase())
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
