import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Table } from "../../components/Table/Table.tsx";
import { SearchBar } from "../../components/SearchBar/SearchBar.tsx";
import { Pagination } from "../../components/Pagination/Pagination.tsx";
import { CartItem } from "../../types.ts";
import "../../index.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/index.ts";
import { toggleFavorite } from "../../store/features/catList.ts";
import isFavorite from "../../assets/isFavorite.png";
import isNotFavorite from "../../assets/isNotFavorite.png";
import { StyledImage, StyledNoCatsFound } from "./styled.ts";

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
  const dispatch = useDispatch();

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
          cat.location.toLowerCase().includes(debouncedSearch.toLowerCase())) ||
        (debouncedSearch.toLowerCase() === "favorites" && cat.isFavorite))
  );

  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const tableLines = currentItems.map((cat) => ({
    id: cat.id.toString(),
    cols: [
      cat.name,
      cat.race || "N/A",
      cat.image,
      <StyledImage
        src={cat.isFavorite ? isFavorite : isNotFavorite}
        alt="Toggle Favorite"
        onClick={() => dispatch(toggleFavorite(cat.id))}
      />,
    ],
  }));

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
            headers={["Name", "Race", "Photo", "Favorite"]}
            lines={tableLines}
            dataType="cat"
          />

          <Pagination
            pageCount={Math.ceil(filteredData.length / itemsPerPage)}
            handlePageChange={handlePageChange}
            currentPage={currentPage}
          />
        </>
      ) : (
        <StyledNoCatsFound>
          Sorry! Couldn't find that for you, try something else...
        </StyledNoCatsFound>
      )}
    </>
  );
};
