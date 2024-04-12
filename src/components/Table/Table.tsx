import { useNavigate, Link } from "react-router-dom";
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
  dataType: "cat" | "item";
};

export const Table = ({ headers, lines, dataType }: TableProps) => {
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
    console.log("cenas", +line.id.split("-")[2], dataType);
    return (
      <StyledTableTr
        key={line.id}
        onClick={() =>
          navigate(`/${dataType}/${Number(line.id.split("-")[2])}`)
        }
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
