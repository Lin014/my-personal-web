import { Typography, Container } from "@mui/material";
import { theme } from "../custom/theme";
import { ThemeProvider } from "@mui/material/styles";

function Introduction() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 10,
          }}
        >
          <Typography variant="h1">介紹</Typography>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Introduction;
