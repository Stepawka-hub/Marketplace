import { ListItem, ListItemText, Divider, Box, Grid } from "@mui/material";
import { FC } from "react";
import { TAttributeItemProps } from "./type";
import { gridContainerStyle } from "./styles";

export const AttributeItem: FC<TAttributeItemProps> = ({
  name,
  value,
  showDivider = true,
}) => (
  <Box>
    <ListItem>
      <Grid container spacing={1} sx={gridContainerStyle}>
        <Grid size={6}>
          <ListItemText primary={name} />
        </Grid>
        <Grid>
          <ListItemText primary={value} />
        </Grid>
      </Grid>
    </ListItem>
    {showDivider && <Divider />}
  </Box>
);
