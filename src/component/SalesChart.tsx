// import { useState } from 'react'
import Card from "@mui/material/Card";
import { LineChart } from "@mui/x-charts/LineChart";
import { CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { format, parseISO } from "date-fns";
import { RootState } from "../store";

function formatDate(date: string) {
  return format(parseISO(date), "MM-dd-yy");
}

function SalesChart() {
  const sales = useSelector(
    (state: RootState) => state.product.product?.sales || []
  );

  const weekEnding = sales.map((item) => formatDate(item.weekEnding));
  const retailSales = sales.map((item) => item.retailSales);
  const wholesaleSales = sales.map((item) => item.wholesaleSales);
  const retailerMargin = sales.map((item) => item.retailerMargin);

  return (
    <Card sx={{ p: 2, textAlign: "start" }}>
      <CardContent>
        <Typography variant="h5" sx={{ color: "#777" }}>
          Retail Sales
        </Typography>
        <LineChart
          xAxis={[{ scaleType: "point", data: weekEnding }]}
          series={[
            { data: retailSales, label: "Retail Sales", showMark: false },
            { data: wholesaleSales, label: "WholeSale Sales", showMark: false },
            { data: retailerMargin, label: "Retailer Margin", showMark: false },
          ]}
          height={400}
          margin={{ left: 70, right: 70, top: 70, bottom: 30 }}
        />
      </CardContent>
    </Card>
  );
}

export default SalesChart;
