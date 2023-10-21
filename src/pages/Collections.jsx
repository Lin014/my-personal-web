import { Typography, Container, Box, Stack } from "@mui/material";
import { theme } from "../custom/theme";
import { ThemeProvider } from "@mui/material/styles";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

import lingeringDream from "../assets/images/lingering-dream.png";
import turkeyRice from "../assets/images/turkey-rice.png";
import hairUniverse from "../assets/images/hair-universe.png";
import pm from "../assets/images/pm-question.png";
import crud from "../assets/images/hackmd-crud.png";

function Collections() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ bgcolor: "#fcf7ef" }}>
          <Container sx={{ py: 8 }}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Playpen Sans",
                fontSize: 40,
                textAlign: "center",
                color: "#392e28",
                mb: 5,
              }}
            >
              Collections
            </Typography>

            <Stack flexWrap="wrap" sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "center", sm: "space-between" }, alignItems: { xs: "center", sm: "stretch" } }}>
              <Card sx={{ maxWidth: 345, mb: 5, display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
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

              <Card sx={{ maxWidth: 345, mb: 5, display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <CardMedia
                  sx={{ height: 250 }}
                  image={turkeyRice}
                  title="Turkey Rice Store Ordering System"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                    color="textDark"
                  >
                    Turkey Rice Store Ordering System
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    雞肉飯點餐系統，內容包含點餐、訂單瀏覽、菜單編輯。
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    使用技術：React / Bootstrap / NodeJS / MongoDB
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    size="small"
                    component={Link}
                    href="https://github.com/Lin014/turkey-rice-store-ordering-system-frontend"
                    target="_blank"
                  >
                    GitHub Repo
                  </Button>
                  <Button
                    size="small"
                    component={Link}
                    href="https://turkey-rice-store-ordering-system.vercel.app/"
                    variant="contained"
                    color="primary"
                    sx={{ color: "white" }}
                    target="_blank"
                  >
                    前往查看
                  </Button>
                </CardActions>
              </Card>

              <Card sx={{ maxWidth: 345, mb: 5, display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
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

              <Card sx={{ maxWidth: 345, mb: 5, display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <CardMedia
                  sx={{ height: 250 }}
                  image={pm}
                  title="PM Question bank"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                    color="textDark"
                  >
                    PM Question bank
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    專案管理題庫網站，為了練習專案管理課程題目所做的簡易小網站。
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    使用技術：React / Bootstrap / Firestore Database
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    size="small"
                    component={Link}
                    href="https://github.com/Lin014/pm-question-bank"
                    target="_blank"
                  >
                    GitHub Repo
                  </Button>
                  <Button
                    size="small"
                    component={Link}
                    href="https://pm-question-bank.vercel.app/"
                    variant="contained"
                    color="primary"
                    sx={{ color: "white" }}
                    target="_blank"
                  >
                    前往查看
                  </Button>
                </CardActions>
              </Card>

              <Card sx={{ maxWidth: 345, mb: 5, display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <CardMedia
                  sx={{ height: 250 }}
                  image={crud}
                  title="CRUD APP"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                    color="textDark"
                  >
                    CRUD APP
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    新增查改簡易小網站，使用 MERN 架構。
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    使用技術：MongoDB / Express.js / React / NodeJS
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    size="small"
                    component={Link}
                    href="https://github.com/Lin014/senior-project-client"
                    target="_blank"
                  >
                    GitHub Repo
                  </Button>
                  <Button
                    size="small"
                    component={Link}
                    href="https://senior-project-web.vercel.app/"
                    variant="contained"
                    color="primary"
                    sx={{ color: "white" }}
                    target="_blank"
                  >
                    前往查看
                  </Button>
                </CardActions>
              </Card>

              <Card sx={{ maxWidth: 345, mb: 5, display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                    color="textDark"
                  >
                    Auto Potted Plant Backend
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  物件導向軟體工程 (OO) 課程專案作品，我負責後端程式撰寫，使用 Spring Boot 框架與物件導向資料庫。
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    使用技術：Spring Boot / ObjectDB
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    size="small"
                    component={Link}
                    href="https://github.com/Lin014/auto-pot-backend"
                    target="_blank"
                  >
                    GitHub Repo
                  </Button>
                </CardActions>
              </Card>
            </Stack>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default Collections;
