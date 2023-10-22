import indexImage from "./assets/images/index-image.png";
import bio from "./assets/images/bio.png";
import skill from "./assets/images/skill.png";
import certifications from "./assets/images/license.png";
import html from "./assets/images/html.png";
import css from "./assets/images/css.png";
import js from "./assets/images/javascript.png";
import bootstrap from "./assets/images/bootstrap.png";
import react from "./assets/images/react.png";
import java from "./assets/images/java.png";
import python from "./assets/images/python.png";
import lingeringDream from "./assets/images/lingering-dream.png";
import hairUniverse from "./assets/images/hair-universe.png";
import potApp from "./assets/images/pot-app.png";

import { Container, Stack, Typography } from "@mui/material";
import { theme } from "./custom/theme";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import { amber } from "@mui/material/colors";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            data-aos="fade-up"
          >
            <Stack spacing={2} direction="column" >
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
                I’m a Software
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Playpen Sans",
                  fontSize: { xs: "16px", sm: "32px", md: "48px" },
                }}
                className="white-text-shadow"
              >
                Engineer
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Playpen Sans",
                  pl: { xs: 3, sm: 5 },
                  fontSize: { xs: "36px", sm: "56px", md: "84px" },
                }}
                className="white-text-shadow"
              >
                Amelia
              </Typography>
            </Stack>
            <img
              src={indexImage}
              alt="Amelia Image"
              className="w-60"
              
            />
          </Container>

          <Box sx={{ py: 10 }} bgcolor="primary.main" >
            <Container>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Playpen Sans",
                  mb: 4,
                  fontSize: { xs: "32px", sm: "48px" },
                  textAlign: "center",
                }}
                color="white"
                data-aos="fade-up"
              >
                Introduction
              </Typography>
              <Typography
                variant="h5"
                color="white"
                sx={{ lineHeight: "2", fontSize: { xs: "16px", sm: "24px" } }}
                data-aos="fade-up"
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
                textAlign: "center",
                fontSize: { xs: "32px", sm: "48px" },
              }}
              data-aos="fade-up"
            >
              About Me
            </Typography>
            <Stack sx={{ flexDirection: { md: "column", lg: "row" } }}>
              <ul
                className="w-50 w-md-100 home-about-me-ul"
                
              >
                <li data-aos="fade-up">
                  <HashLink
                    to="introduction#aboutme"
                    className="home-about-me-link"
                  >
                    <Stack
                      direction="column"
                      spacing={2}
                      sx={{ alignItems: "center" }}
                    >
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
                  </HashLink>
                </li>
                <li data-aos="fade-up">
                  <HashLink
                    to="introduction#skills"
                    className="home-about-me-link"
                  >
                    <Stack
                      direction="column"
                      spacing={2}
                      sx={{ alignItems: "center" }}
                    >
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
                  </HashLink>
                </li>
                <li data-aos="fade-up">
                  <HashLink
                    to="introduction#certifications"
                    className="home-about-me-link"
                  >
                    <Stack
                      direction="column"
                      spacing={2}
                      sx={{ alignItems: "center" }}
                    >
                      <Avatar
                        alt="certifications"
                        src={certifications}
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
                  </HashLink>
                </li>
              </ul>
              <Typography
                variant="h5"
                color="textDark"
                sx={{ lineHeight: "2", fontSize: { xs: "16px", sm: "24px" } }}
                className="w-50 w-md-100"
                data-aos="fade-up"
              >
                接觸網頁前端程式有兩年的經驗，熟悉 HTML、CSS、JavaScript，
                還學習了 Bootstrap CSS 框架與前端框架 React，
                除了前端網頁之外，還開發過 NodeJS、SpringBoot、Django 等等後端系統。
                希望能在未來工作中持續精進程式能力。
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
                textAlign: "center",
              }}
              data-aos="fade-up"
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
                data-aos="fade-up"
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
                data-aos="fade-up"
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
                data-aos="fade-up"
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
                data-aos="fade-up"
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
                data-aos="fade-up"
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
                data-aos="fade-up"
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
                data-aos="fade-up"
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

            <Typography
              variant="h3"
              sx={{
                fontFamily: "Playpen Sans",
                mb: 5,
                fontSize: { xs: "32px", sm: "48px" },
                textAlign: "center",
              }}
              data-aos="fade-up"
            >
              Collections
            </Typography>

            <Stack
              flexWrap="wrap"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: { xs: "center", sm: "space-between" },
                alignItems: { xs: "center", sm: "stretch" },
              }}
              
            >
              <Card
                sx={{
                  maxWidth: 345,
                  mb: 5,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                data-aos="fade-up"
              >
                <Box>
                  <CardMedia
                    sx={{ height: 250 }}
                    image={lingeringDream}
                    title="Lingering Dream"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: "bold" }}
                      color="textDark"
                    >
                      Lingering Dream - 繾綣夢
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      義式餐廳網站，兩人協作的作品，前端靜態網站。
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      使用技術：HTML / CSS / JavaScript
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      負責頁面：header、footer、首頁、關於我們、最新消息、美食饗宴、聯絡我們
                    </Typography>
                  </CardContent>
                </Box>

                <CardActions
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    size="small"
                    component={Link}
                    href="https://github.com/Lin014/lingering-dream"
                    target="_blank"
                  >
                    GitHub Repo
                  </Button>
                  <Button
                    size="small"
                    component={Link}
                    href="https://lingering-dream.vercel.app/index.html"
                    variant="contained"
                    color="primary"
                    sx={{ color: "white" }}
                    target="_blank"
                  >
                    前往查看
                  </Button>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  mb: 5,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                data-aos="fade-up"
              >
                <Box>
                  <CardMedia
                    sx={{ height: 250 }}
                    image={hairUniverse}
                    title="頭髮危機小百科"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: "bold" }}
                      color="textDark"
                    >
                      頭髮危機小百科
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      六角學院直播切版班三人合作專題，以介紹頭髮知識為題，包含頭髮結構、頭髮常見問題、如何保養頭髮、挑選洗髮精、查找附近診所等等內容。
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      使用技術：HTML / CSS / JavaScript / Bootstrap / jQuery
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      負責頁面：header、首頁、頭皮種類、頭髮結構、頭髮解惑指南、頭皮起膿包、紅疹、頭髮養護、洗髮精介紹、頭皮清潔、洗髮精推薦
                    </Typography>
                  </CardContent>
                </Box>

                <CardActions
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    size="small"
                    component={Link}
                    href="https://github.com/Lin014/hair-universe-web"
                    target="_blank"
                  >
                    GitHub Repo
                  </Button>
                  <Button
                    size="small"
                    component={Link}
                    href="https://lin014.github.io/hair-universe-web/index.html"
                    variant="contained"
                    color="primary"
                    sx={{ color: "white" }}
                    target="_blank"
                  >
                    前往查看
                  </Button>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  mb: 5,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                data-aos="fade-up"
              >
                <Box>
                  <CardMedia
                    sx={{
                      height: 250,
                      objectPosition: "center top",
                      objectFit: "none",
                    }}
                    image={potApp}
                    title="Pot App"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: "bold" }}
                      color="textDark"
                    >
                      Auto Potted Plant APP
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      物件導向軟體工程 (OO)
                      課程專案作品，自動澆水盆栽系統，利用魚菜共生的概念，頂部是植物，底下是水族箱，功能包含能自動偵測土壤濕度，適度給予澆水；偵測環境的亮度，當亮度不足時，自動打開燈光給予照明，
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      使用技術：Android Studio / Design Pattern
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      負責部分：APP 整體架構撰寫、整合、Design Pattern 撰寫
                    </Typography>
                  </CardContent>
                </Box>

                <CardActions sx={{ display: "flex", justifyContent: "start" }}>
                  <Button
                    size="small"
                    component={Link}
                    href="https://github.com/Lin014/auto-pot-app"
                    target="_blank"
                  >
                    GitHub Repo
                  </Button>
                  <Button
                    size="small"
                    comonent={Link}
                    href="https://drive.google.com/drive/folders/1-AqgGvTjj-YGohvK356uLWhe63pi0n0p?usp=share_link"
                    target="_blank"
                  >
                    PPT
                  </Button>
                </CardActions>
              </Card>
            </Stack>

            <Stack
              direction="row"
              sx={{ justifyContent: "end" }}
              data-aos="fade-up"
            >
              <Button
                variant="outlined"
                sx={{ ml: "auto" }}
                onClick={() => navigate("collections")}
              >
                查看更多
              </Button>
            </Stack>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
