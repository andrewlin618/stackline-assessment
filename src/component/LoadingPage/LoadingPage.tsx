import { Container, Typography } from "@mui/material";
import "./LoadingPage.css";

function LoadingPage() {
  return (
    <Container
      sx={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="loader"></div>
      <Typography variant="h5" m={2}>
        Loading Data from:
        <a
          href="https://run.mocky.io/v3/7b43d5e9-db0d-492b-ba2d-d31ea68cca6f"
          target="_blank"
        >
          Mock API
        </a>
      </Typography>
    </Container>
  );
}

export default LoadingPage;
