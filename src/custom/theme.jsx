import { createTheme } from "@mui/material/styles";
import { green, amber } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: amber[600],
      light: amber[600],
      dark: amber[600],
    },
    secondary: {
      main: green[600],
      light: green[600],
      dark: green[600],
    },
    textDark: "#392e28"
  },
  typography: {
    lineHeight: "1.5",
    fontFamily: [
        "Roboto",
        "Noto Sans TC",
        "sans-serif"
    ].join(','),
    h1: {
      color: amber[600]
    },
    h3: {
      color: amber[600]
    }
  },
});
