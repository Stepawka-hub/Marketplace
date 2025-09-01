export const cardStyle = {
  flexDirection: "row",
  height: "auto",
  borderRadius: "0.75rem",
  backgroundColor: "custom.primary",
  p: {
    xs: 1,
    sm: 2,
  },
  "&:hover": {
    transform: "none",
  },
} as const;

export const cardMediaStyle = {
  width: {
    xs: "8rem",
    sm: "10rem",
  },
  p: 1,
  borderRadius: "1rem",
} as const;

export const cardContentStyle = {
  flexGrow: 1,
  px: 0,
  ml: 2,
} as const;

export const gridContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
} as const;

export const titleStyle = {
  fontSize: { xs: "1rem", sm: "1.15rem" },
} as const;

export const cardActionsStyle = {
  flexDirection: { xs: "column-reverse", sm: "row" },
} as const;

export const checkboxStyle = {
  mr: { sm: 1 },
} as const;

export const priceStyle = {
  fontWeight: "600",
} as const;
