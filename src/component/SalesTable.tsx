import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store";

function formatData(input: string) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(input)) {
    const parts = input.split("-");
    return `${parts[1]}-${parts[2]}-${parts[0].slice(2)}`;
  }
  if (/^\d+$/.test(input)) {
    return +input < 3000 ? input : `$${parseInt(input, 10).toLocaleString()}`;
  }
  return input.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase();
}

function SalesTable() {
  const sales = useSelector(
    (state: RootState) => state.product.product?.sales || []
  );
  return (
    sales.length > 0 && (
      <TableContainer
        sx={{
          overflowX: "auto",
          maxHeight: "45vh",
          minWidth: 280,
          maxWidth: "calc(100vw - 48px)",
          px: 2,
        }}
        component={Paper}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow sx={{ height: 80 }}>
              {Object.keys(sales[0]).map((col, i) => (
                <TableCell key={i} align={i === 0 ? "left" : "right"}>
                  {formatData(col)}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sales.map((row, i) => (
              <TableRow key={i}>
                {Object.values(row).map((col, i) => (
                  <TableCell key={i} align={i === 0 ? "left" : "right"}>
                    {formatData(col as string)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
}

export default SalesTable;
