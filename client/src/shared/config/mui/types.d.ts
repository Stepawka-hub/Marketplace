import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      appBar: {
        iconColor: string;
        iconHover: string;
      },
      drawer: {
        bg: string;
      },
      productCard: {
        bg: string;
      },
    };
  }
}
