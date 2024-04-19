import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Table } from "../../components/Table/Table.tsx";
import { SearchBar } from "../../components/SearchBar/SearchBar.tsx";
import { Pagination } from "../../components/Pagination/Pagination.tsx";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import CategoryFilter from "../../components/Filter/Filter.tsx";
import "../../index.css";
import { toggleFavorite } from "../../store/features/itemList.ts";
import isFavorite from "../../assets/isFavorite.png";
import isNotFavorite from "../../assets/isNotFavorite.png";
import { StyledImage, StyledNoItemsFound } from "./styled.ts";

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
  const itemData = useSelector((state: RootState) => state.itemList.list);
  const { pageId } = useParams();
  const [currentPage, setCurrentPage] = useState(Number(pageId) || 1);
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");

  const handleCategorySelect = (category: string) => {
    navigate(`/itemShop/${currentPage}?category=${category}`);
  };

  const filteredData = itemData
    .filter((item) => {
      if (!selectedCategory) return true;
      return item.category === selectedCategory;
    })
    .filter((item) => {
      if (debouncedSearch.toLowerCase() === "favorites") {
        return item.isFavorite;
      }
      return item.name.toLowerCase().includes(debouncedSearch.toLowerCase());
    });

  useEffect(() => {
    setCurrentPage(Number(pageId) || 1);
  }, [pageId]);

  const categories = [...new Set(itemData.map((item) => item.category))];

  const [selectedCategories, setSelectedCategories] = useState<
    Record<string, boolean>
  >({});

  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const tableLines = currentItems.map((item) => ({
    id: item.id.toString(),
    cols: [
      item.name,
      item.category || "N/A",
      item.image,
      <StyledImage
        src={item.isFavorite ? isFavorite : isNotFavorite}
        alt="Toggle Favorite"
        onClick={() => dispatch(toggleFavorite(item.id))}
      />,
    ],
  }));

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
    navigate(`/itemShop/${selected + 1}`);
  };

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      {filteredData.length > 0 ? (
        <>
          <CategoryFilter
            categories={categories}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            onCategorySelect={handleCategorySelect}
          />

          <Table
            headers={["Name", "Category", "Photo", "Favorite"]}
            lines={tableLines}
            dataType="item"
          />
          <Pagination
            pageCount={Math.ceil(filteredData.length / itemsPerPage)}
            handlePageChange={handlePageChange}
            currentPage={currentPage}
          />
        </>
      ) : (
        <StyledNoItemsFound>
          Sorry! Couldn't find that for you, try something else...
        </StyledNoItemsFound>
      )}
    </>
  );
};
