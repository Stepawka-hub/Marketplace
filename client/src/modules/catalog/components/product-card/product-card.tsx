import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { ProductCardProps } from "./type";

export const ProductCard: FC<ProductCardProps> = ({ name, description }) => (
  <Card sx={{ p: 2, height: '100%' }}>
    <CardContent>
      <Typography variant="h5">{name}</Typography>
      <Typography>{description}</Typography>
    </CardContent>
    <CardActions>
      <Button variant="contained">Preview</Button>
    </CardActions>
  </Card>
);
