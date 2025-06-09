import { getTotalCount } from "@modules/cart/services/slices/cart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import { useSelector } from "@store";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const CartBadge: FC = () => {
  const navigate = useNavigate();
  const count = useSelector(getTotalCount);

  const handleClick = () => {
    navigate("/cart");
  };

  return (
    <IconButton aria-label="cart" onClick={handleClick}>
      <Badge badgeContent={count + 1} color="warning">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};
