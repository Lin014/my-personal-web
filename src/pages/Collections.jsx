import { Typography, Container } from "@mui/material";
import { theme } from "../custom/theme";
import { ThemeProvider } from "@mui/material/styles";

function Collections() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Typography variant="h1">作品集</Typography>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Collections;
