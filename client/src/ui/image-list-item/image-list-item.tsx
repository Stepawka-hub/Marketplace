import { ImageListItem as ImageListItemMui, styled } from "@mui/material";
import { ImageListItemProps } from "./type";

export const ImageListItem = styled(ImageListItemMui, {
  shouldForwardProp: (prop) => prop !== "isSelected",
})<ImageListItemProps>(({ theme, isSelected }) => ({
  cursor: "pointer",
  border: "2px solid",
  borderColor: isSelected ? theme.palette.primary.main : theme.palette.divider,
  borderRadius: "0.75rem",
  transition: "opacity 0.2s ease-in-out",
  "&:hover": {
    opacity: 0.8,
  },
  ".MuiImageListItem-img": {
    borderRadius: "0.5rem",
  },
}));
