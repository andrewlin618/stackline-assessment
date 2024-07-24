import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import ProductInfo from "./component/ProductInfo";
import SalesChart from "./component/SalesChart";
import SalesTable from "./component/SalesTable";
import LoadingPage from "./component/LoadingPage/LoadingPage";
import { fetchProduct } from "./features/product/productSlice";
import { AppDispatch, RootState } from "./store";
import stacklineLogo from "./assets/stackline_logo.svg";
import "./App.css";


function App() {
  const dispatch: AppDispatch = useDispatch();
  const status = useSelector((state: RootState) => state.product.status);
  const productId = "B007TIE0GQ";

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(fetchProduct(productId));
    }, 3000);

    return () => clearTimeout(timer);
  }, [dispatch, productId]);

  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <a id="logo" href="https://www.stackline.com/" target="_blank">
              <img src={stacklineLogo} alt="Stackline logo" />
            </a>
          </Toolbar>
        </AppBar>
      </Box>

      {status === "succeeded" && (
        <Container maxWidth={false} id="main">
          <Grid container mt={6}>
            <Grid item xs={12} lg={3} p={1}>
              <ProductInfo />
            </Grid>
            <Grid item xs={12} lg={9}>
              <Grid container direction="column">
                <Grid item xs={12} p={1}>
                  <SalesChart />
                </Grid>
                <Grid item xs={12} p={1} mt={4}>
                  <SalesTable />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}

      {(status === "idle" || status === "loading") && <LoadingPage />}
    </>
  );
}

export default App;
