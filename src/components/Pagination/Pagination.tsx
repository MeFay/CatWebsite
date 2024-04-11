import ReactPaginate from "react-paginate";
import { StyledPagination } from "./Styled";

type PaginationProps = {
  pageCount: number;
  handlePageChange: ({ selected }: { selected: number }) => void;
  currentPage: number;
};

export const Pagination = ({
  pageCount,
  handlePageChange,
  currentPage,
}: PaginationProps) => (
  <StyledPagination>
    <ReactPaginate
      breakLabel="| "
      nextLabel={currentPage < pageCount ? "next >" : ""}
      onPageChange={handlePageChange}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      forcePage={pageCount > 0 ? currentPage - 1 : 0}
      previousLabel={currentPage > 1 ? "< previous" : ""}
      renderOnZeroPageCount={null}
      containerClassName="pagination"
      activeClassName="active"
      activeLinkClassName="active-link"
    />
  </StyledPagination>
);
