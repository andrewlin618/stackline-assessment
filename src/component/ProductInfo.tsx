import Card from "@mui/material/Card";
import {
  Box,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store";

function ProductInfo() {
  const product = useSelector((state: RootState) => state.product.product);
  return (
    <Card sx={{ p: 5, minWidth: 280, height: "100%" }}>
      <CardMedia
        sx={{ height: 200, width: 200, m: "auto" }}
        image={product?.image || "https://via.placeholder.com/200"}
        title={product?.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product?.subtitle}
        </Typography>
        <Box
          sx={{ maxWidth: 500, display: "flex", flexWrap: "wrap", m: "auto" }}
        >
          {product?.tags.map((tag) => (
            <Chip
              sx={{ m: 1, borderRadius: 1 }}
              key={tag}
              label={tag}
              variant="outlined"
              clickable
            />
          ))}
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
}

export default ProductInfo;
