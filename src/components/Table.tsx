export const Table = ({ headers, lines }: TableProps) => {
  const DisplayHeaders = headers.map((header) => {
    return <th key={header}>{header}</th>;
  });

  const DisplayTableData = lines.map((line) => {
    const DisplayColumns = line.cols.map((column) => {
      return <td key={column}>{column}</td>;
    });

    return <tr key={line.id}>{DisplayColumns}</tr>;
  });

  return (
    <table>
      <thead>
        <tr>{DisplayHeaders}</tr>
      </thead>
      <tbody>{DisplayTableData}</tbody>
    </table>
  );
};

type TableProps = {
  headers: Array<string>;
  lines: {
    id: string;
    cols: (string | number)[];
  }[];
};
