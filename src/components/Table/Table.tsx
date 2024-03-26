import {
  StyledTable,
  StyledTableWrapper,
  StyledTableTh,
  StyledTableTr,
  StyledTableTd,
  StyledImage,
} from "./styled";

export const Table = ({ headers, lines }: TableProps) => {
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

    return <StyledTableTr key={line.id}>{DisplayColumns}</StyledTableTr>;
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

type TableProps = {
  headers: Array<string>;
  lines: {
    id: string;
    cols: (string | number)[];
  }[];
};
