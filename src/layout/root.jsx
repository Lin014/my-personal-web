import { NavLink, Outlet } from "react-router-dom";

import logo from "../assets/images/logo-d.png";
import { theme } from "../custom/theme";

import { ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";

const RootLayout = () => {
  const getNavLinkClass = ({ isActive }) => {
    if (isActive) {
      return "nav-item-active";
    }
    return "nav-item-normal";
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" sx={{ bgcolor: "white" }}>
            <Toolbar component={Container}>
              <Stack
                direction="row"
                spacing={1}
                component={NavLink}
                to={"/"}
                sx={{
                  color: "#f0bd59",
                  alignItems: "center",
                  textDecoration: "none",
                  mr: 3,
                  flexGrow: 1,
                }}
              >
                <Avatar alt="Logo" src={logo} sx={{ width: { xs: 48, sm: 56 }, height: { xs: 48, sm: 56 } }} />
                <Typography
                  variant="h5"
                  color="primary"
                  sx={{ fontFamily: "Playpen Sans", fontSize: { xs: "16px", sm: "24px" } }}
                >
                  Amelia Chang
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <NavLink className={getNavLinkClass} to={"introduction"} >
                  Introduction
                </NavLink>
                <NavLink className={getNavLinkClass} to={"collections"} >
                  Collections
                </NavLink>
              </Stack>
            </Toolbar>
          </AppBar>
        </Box>

        <div style={{ marginTop: "64px" }}>
          <Outlet />
        </div>
      </ThemeProvider>
    </>
  );
};

export default RootLayout;
