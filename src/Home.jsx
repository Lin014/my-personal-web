import indexImage from "./assets/images/index-image.png";
import bio from "./assets/images/bio.png";
import skill from "./assets/images/skill.png";
import license from "./assets/images/license.png";
import html from "./assets/images/html.png";
import css from "./assets/images/css.png";
import js from "./assets/images/javascript.png";
import bootstrap from "./assets/images/bootstrap.png";
import react from "./assets/images/react.png";
import java from "./assets/images/java.png";
import python from "./assets/images/python.png";

import { Container, Stack, Typography } from "@mui/material";
import { theme } from "./custom/theme";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { amber } from "@mui/material/colors";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ bgcolor: "#fcf7ef" }}>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              py: 10,
            }}
          >
            <Stack spacing={2} direction="column">
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Playpen Sans",
                  fontSize: { xs: "16px", sm: "32px", md: "48px" },
                }}
                className="white-text-shadow"
              >
                Hi
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Playpen Sans",
                  fontSize: { xs: "16px", sm: "32px", md: "48px" },
                }}
                className="white-text-shadow"
              >
                I’m a front-end
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Playpen Sans",
                  fontSize: { xs: "16px", sm: "32px", md: "48px" },
                }}
                className="white-text-shadow"
              >
                developer
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Playpen Sans",
                  pl: { xs: 3, sm: 5 },
                  fontSize: { xs: "36px", sm: "64px", md: "90px" },
                }}
                className="white-text-shadow"
              >
                Amelia
              </Typography>
            </Stack>
            <img src={indexImage} alt="Amelia Image" className="w-60" />
          </Container>

          <Box sx={{ py: 10 }} bgcolor="primary.main">
            <Container>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Playpen Sans",
                  mb: 4,
                  fontSize: { xs: "32px", sm: "48px" },
                }}
                color="white"
              >
                Introduction
              </Typography>
              <Typography
                variant="h5"
                color="white"
                sx={{ lineHeight: "2", fontSize: { xs: "16px", sm: "24px" } }}
              >
                Hello, I am Amelia.
                我來自美食之都台南，自臺南高商畢業，現就讀於國立雲林科技大學—資訊管理系四年級。
                個性親切、富有責任心，具備換位思考能力且有天馬行空想像力的女孩。有團隊協作的經驗，享受和他人溝通的過程。
              </Typography>
            </Container>
          </Box>

          <Container sx={{ py: 10 }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Playpen Sans",
                mb: 4,
                textAlign: "right",
                fontSize: { xs: "32px", sm: "48px" },
              }}
            >
              About me
            </Typography>
            <Stack sx={{ flexDirection: { md: "column", lg: "row" } }}>
              <ul className="w-50 w-md-100 home-about-me-ul">
                <li>
                  <NavLink to={"introduction"} className="home-about-me-link">
                    <Stack direction="column" spacing={2} sx={{ alignItems: "center" }}>
                      <Avatar
                        alt="biography"
                        src={bio}
                        sx={{ width: 120, height: 120 }}
                      />
                      <Typography
                        variant="h4"
                        sx={{
                          textAlign: "center",
                          fontWeight: "medium",
                          fontSize: { xs: "20px", sm: "34px" },
                        }}
                      >
                        自傳
                      </Typography>
                    </Stack>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"introduction"} className="home-about-me-link">
                    <Stack direction="column" spacing={2} sx={{ alignItems: "center" }}>
                      <Avatar
                        alt="skill"
                        src={skill}
                        sx={{ width: 120, height: 120 }}
                      />
                      <Typography
                        variant="h4"
                        sx={{
                          textAlign: "center",
                          fontWeight: "medium",
                          fontSize: { xs: "20px", sm: "34px" },
                        }}
                      >
                        專長
                      </Typography>
                    </Stack>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"introduction"} className="home-about-me-link">
                    <Stack direction="column" spacing={2} sx={{ alignItems: "center" }}>
                      <Avatar
                        alt="license"
                        src={license}
                        sx={{ width: 120, height: 120 }}
                      />
                      <Typography
                        variant="h4"
                        sx={{
                          textAlign: "center",
                          fontWeight: "medium",
                          fontSize: { xs: "20px", sm: "34px" },
                        }}
                      >
                        證照
                      </Typography>
                    </Stack>
                  </NavLink>
                </li>
              </ul>
              <Typography
                variant="h5"
                color="textDark"
                sx={{ lineHeight: "2", fontSize: { xs: "16px", sm: "24px" } }}
                className="w-50 w-md-100"
              >
                接觸網頁前端程式有兩年的經驗，熟悉 HTML、CSS、JavaScript，
                還學習了 Bootstrap CSS 框架與前端框架 React，
                在開發過程中，注重使用者的感受、視覺美觀設計、團隊溝通，
                希望能打造出讓顧客滿意的網頁。
              </Typography>
            </Stack>
          </Container>

          <Container sx={{ pb: 10 }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Playpen Sans",
                mb: 4,
                fontSize: { xs: "32px", sm: "48px" },
              }}
            >
              Skills
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "column", md: "row" }}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                mb: 8,
              }}
              spacing={8}
            >
              <Stack
                direction="column"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="HTML"
                  src={html}
                  sx={{
                    width: { xs: 150, md: 120, lg: 150 },
                    height: { xs: 120, md: 120, lg: 150 },
                    mb: 2,
                  }}
                />
                <Box
                  sx={{
                    width: 150,
                    height: 20,
                    border: `3px solid ${amber[600]}`,
                  }}
                >
                  <Box
                    sx={{
                      width: 120,
                      height: 20,
                      backgroundColor: "primary.main",
                    }}
                  />
                </Box>
              </Stack>
              <Stack
                direction="column"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="CSS"
                  src={css}
                  sx={{
                    width: { xs: 150, md: 120, lg: 150 },
                    height: { xs: 120, md: 120, lg: 150 },
                    mb: 2,
                  }}
                />
                <Box
                  sx={{
                    width: 150,
                    height: 20,
                    border: `3px solid ${amber[600]}`,
                  }}
                >
                  <Box
                    sx={{
                      width: 110,
                      height: 20,
                      backgroundColor: "primary.main",
                    }}
                  />
                </Box>
              </Stack>
              <Stack
                direction="column"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="Javascript"
                  src={js}
                  sx={{
                    width: { xs: 150, md: 120, lg: 150 },
                    height: { xs: 120, md: 120, lg: 150 },
                    mb: 2,
                  }}
                />
                <Box
                  sx={{
                    width: 150,
                    height: 20,
                    border: `3px solid ${amber[600]}`,
                  }}
                >
                  <Box
                    sx={{
                      width: 100,
                      height: 20,
                      backgroundColor: "primary.main",
                    }}
                  />
                </Box>
              </Stack>
              <Stack
                direction="column"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="Bootstrap"
                  src={bootstrap}
                  sx={{
                    width: { xs: 150, md: 120, lg: 150 },
                    height: { xs: 120, md: 120, lg: 150 },
                    mb: 2,
                  }}
                />
                <Box
                  sx={{
                    width: 150,
                    height: 20,
                    border: `3px solid ${amber[600]}`,
                  }}
                >
                  <Box
                    sx={{
                      width: 85,
                      height: 20,
                      backgroundColor: "primary.main",
                    }}
                  />
                </Box>
              </Stack>
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "column", md: "row" }}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                mb: 8,
              }}
              spacing={8}
            >
              <Stack
                direction="column"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="React"
                  src={react}
                  sx={{
                    width: { xs: 150, md: 120, lg: 150 },
                    height: { xs: 120, md: 120, lg: 150 },
                    mb: 2,
                  }}
                />
                <Box
                  sx={{
                    width: 150,
                    height: 20,
                    border: `3px solid ${amber[600]}`,
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 20,
                      backgroundColor: "primary.main",
                    }}
                  />
                </Box>
              </Stack>
              <Stack
                direction="column"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="Java"
                  src={java}
                  sx={{
                    width: { xs: 150, md: 120, lg: 150 },
                    height: { xs: 120, md: 120, lg: 150 },
                    mb: 2,
                  }}
                />
                <Box
                  sx={{
                    width: 150,
                    height: 20,
                    border: `3px solid ${amber[600]}`,
                  }}
                >
                  <Box
                    sx={{
                      width: 75,
                      height: 20,
                      backgroundColor: "primary.main",
                    }}
                  />
                </Box>
              </Stack>
              <Stack
                direction="column"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="Python"
                  src={python}
                  sx={{
                    width: { xs: 150, md: 120, lg: 150 },
                    height: { xs: 120, md: 120, lg: 150 },
                    mb: 2,
                  }}
                />
                <Box
                  sx={{
                    width: 150,
                    height: 20,
                    border: `3px solid ${amber[600]}`,
                  }}
                >
                  <Box
                    sx={{
                      width: 30,
                      height: 20,
                      backgroundColor: "primary.main",
                    }}
                  />
                </Box>
              </Stack>
            </Stack>


          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
