import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    appBar?: {
      iconColor?: string;
      iconHover?: string;
    };
  }

  interface Palette {
    appBar: {
      iconColor: string;
      iconHover: string;
    };
  }
}
