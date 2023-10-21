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
import { amber } from "@mui/material/colors";

import Link from "@mui/material/Link";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import EmailIcon from '@mui/icons-material/Email';

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
          <AppBar position="fixed" sx={{ bgcolor: "#fcf7ef" }}>
            <Toolbar
              component={Container}
              sx={{ justifyContent: "space-between" }}
            >
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
                }}
              >
                <Avatar
                  alt="Logo"
                  src={logo}
                  sx={{ width: { xs: 48, sm: 56 }, height: { xs: 48, sm: 56 } }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Playpen Sans",
                    fontSize: { xs: "16px", sm: "24px" },
                  }}
                  color="primary"
                >
                  Amelia Chang
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <NavLink className={getNavLinkClass} to={"introduction"}>
                  Introduction
                </NavLink>
                <NavLink className={getNavLinkClass} to={"collections"}>
                  Collections
                </NavLink>
              </Stack>
            </Toolbar>
          </AppBar>
        </Box>

        <div style={{ marginTop: "64px" }}>
          <Outlet />
        </div>

        <Box sx={{ bgcolor: `${amber[600]}` }}>
          <Container sx={{ pt: 5, pb: 2 }}>
            <Stack
              direction="row"
              sx={{ justifyContent: "space-between", alignItems: "center", mb: 3 }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Playpen Sans",
                  fontSize: 24,
                }}
                color="white"
              >
                Amelia Chang
              </Typography>

              <Stack direction="row" spacing={1}>
                <Link
                  href="https://github.com/Lin014"
                  sx={{ color: "white", fontSize: 20 }}
                  target="_blank"
                >
                  <Avatar sx={{ bgcolor: "white", width: 40, height: 40 }}>
                    <GitHubIcon color="primary" />
                  </Avatar>
                </Link>

                <Link
                  href="https://www.facebook.com/lin027/"
                  sx={{ color: "white", fontSize: 20 }}
                  target="_blank"
                >
                  <Avatar sx={{ bgcolor: "white", width: 40, height: 40 }}>
                    <FacebookRoundedIcon color="primary" />
                  </Avatar>
                </Link>
              </Stack>
            </Stack>

            <Stack direction={{ xs: "column", sm: "row" }} sx={{ mb: 2 }}>
              <Stack direction="row" sx={{ alignItems: "center", mb: { xs: 2, sm: 0}, mr: 3 }}>
                <LocalPhoneIcon sx={{ color: "white", mr: 1 }} />
                <Link
                  href="tel:+4733378901"
                  sx={{ color: "white", fontSize: 20 }}
                >
                  0968-001922
                </Link>
              </Stack>

              <Stack direction="row" sx={{ alignItems: "center" }}>
                <EmailIcon sx={{ color: "white", mr: 1 }} />

                <Link
                  href="mailto:ciling000@gmail.com"
                  sx={{ color: "white", fontSize: 20 }}
                >
                  ciling000@gmail.com
                </Link>
              </Stack>
            </Stack>

            <Typography color="white" sx={{ textAlign: "center" }}>
              Copyright © 2023. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default RootLayout;
