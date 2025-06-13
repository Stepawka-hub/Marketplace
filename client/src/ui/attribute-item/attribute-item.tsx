import { ListItem, ListItemText, Divider, Box, Grid } from "@mui/material";

export const AttributeItem = ({
  name,
  value,
  showDivider = true,
}: {
  name: string;
  value: string;
  showDivider?: boolean;
}) => (
  <Box>
    <ListItem>
      <Grid container spacing={1} sx={{ width: "100%" }}>
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
