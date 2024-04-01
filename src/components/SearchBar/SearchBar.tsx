import { StyledSearchBar } from "./styled.ts";

type SearchBarProps = {
  search: string;
  setSearch: (search: string) => void;
};

export const SearchBar = ({ search, setSearch }: SearchBarProps) => (
  <StyledSearchBar
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search..."
  />
);
