import { createTheme } from "@mui/material/styles";
import { amber, green } from "@mui/material/colors";

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
  },
  typography: {
    lineHeight: "1.5",
    fontFamily: [
        "Roboto",
        "Noto Sans TC",
        "sans-serif"
    ].join(','),
  }
});
