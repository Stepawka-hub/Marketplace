import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      primary: string;
      appBar: {
        iconColor: string;
        iconHover: string;
      },
    };
  }
}
