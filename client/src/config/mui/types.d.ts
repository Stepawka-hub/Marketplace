// types/theme.d.ts или в файле с палитрой
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      primary: {
        main: string;
      };
      appBar: {
        iconColor: string;
        iconHover: string;
      };
    };
  }
  
  interface PaletteOptions {
    custom?: {
      primary?: {
        main?: string;
      };
      appBar?: {
        iconColor?: string;
        iconHover?: string;
      };
    };
  }
}