import { useNavigate } from "react-router-dom";
import {
  StyledTable,
  StyledTableWrapper,
  StyledTableTh,
  StyledTableTr,
  StyledTableTd,
  StyledImage,
} from "./styled";

type TableProps = {
  headers: Array<string>;
  lines: {
    id: string;
    cols: (string | number)[];
  }[];
  navigateTo: string;
};

export const Table = ({ headers, lines, navigateTo }: TableProps) => {
  const navigate = useNavigate();
  const DisplayHeaders = headers.map((header) => {
    return <StyledTableTh key={header}>{header}</StyledTableTh>;
  });

  const DisplayTableData = lines.map((line) => {
    const DisplayColumns = line.cols.map((column, index) => {
      if (index === 2) {
        return (
          <StyledTableTd key={column.toString()}>
            <StyledImage src={column.toString()} alt="cat" />
          </StyledTableTd>
        );
      } else {
        return <StyledTableTd key={column.toString()}>{column}</StyledTableTd>;
      }
    });

    return (
      <StyledTableTr
        key={line.id}
        onClick={() => navigate(`/${navigateTo}/${line.id}`)}
      >
        {DisplayColumns}
      </StyledTableTr>
    );
  });

  return (
    <StyledTableWrapper>
      <StyledTable>
        <thead>
          <StyledTableTr>{DisplayHeaders}</StyledTableTr>
        </thead>
        <tbody>{DisplayTableData}</tbody>
      </StyledTable>
    </StyledTableWrapper>
  );
};
