import ReactPaginate from "react-paginate";
import { StyledPagination } from "./Styled";

type PaginationProps = {
  pageCount: number;
  handlePageChange: ({ selected }: { selected: number }) => void;
};

export const Pagination = ({
  pageCount,
  handlePageChange,
}: PaginationProps) => (
  <StyledPagination>
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageChange}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      containerClassName="pagination"
      activeClassName="active"
      activeLinkClassName="active-link"
    />
  </StyledPagination>
);
