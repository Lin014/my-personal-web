import { Typography, Container, Box, Stack } from "@mui/material";
import { theme } from "../custom/theme";
import { ThemeProvider } from "@mui/material/styles";

import myImage from "../assets/images/index-image2.png";
import { amber } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import { useEffect } from "react";

function Introduction() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box id="aboutme" sx={{ bgcolor: "#fcf7ef" }}>  
          <Container sx={{ pt: 8 }}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Playpen Sans",
                fontSize: 40,
                textAlign: "center",
                color: "#392e28",
                mb: 5,
              }}
              data-aos="fade-up"
            >
              About Me
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} sx={{ alignItems: { xs: "center", sm: "start" } }}>
              <Avatar
                src={myImage}
                sx={{ width: { xs: "80%", sm: "35%" }, height: { xs: "80%", sm: "35%" }, mb: { xs: 5, sm: 0 } }}
                data-aos="fade-up"
              />
              <Stack direction="column" sx={{ alignItems: "start" }} data-aos="fade-up">
                <Typography variant="body1" sx={{ mb: 1 }} color="textDark">
                  我來自美食之都臺南，目前就讀國立雲林科技大學資訊管理系四年級，曾參與六角學院網頁切版直播班，並且曾擔任宿舍網路管理小組副組長。
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    borderBottom: `3px solid ${amber[600]}`,
                  }}
                  color="textDark"
                  display="inline-block"
                >
                  求學經歷
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }} color="textDark">
                  在高中時，由於是特色招生的班級，所以有許多程式設計的課程，發現自己較喜歡網頁程式領域，曾在科展中參與網頁程式類的比賽，並且取得第一名。
                  大學求學期間主要往IT系統開發類修習課程，涉及前後端、資料庫與AI領域，並且在俗稱雲科資管大魔王的
                  SA (系統分析設計) 與OO (物件導向軟體工程) 課程分別取得 77、82
                  分的成績。 我在 SA 課程中擔任小組組長，帶領團隊並且扛起 SA 與
                  OO 後端程式撰寫的重擔，還參與 APP 實作，撰寫 Design Pattern
                  且幫助組員除錯，是團隊中不可或缺的主要角色。
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    borderBottom: `3px solid ${amber[600]}`,
                  }}
                  color="textDark"
                  display="inline-block"
                >
                  社團經歷
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }} color="textDark">
                  在大一時，秉持想學習新技術、開拓新視野、廣交好友的心態，進入了宿舍網路管理小組，學習如何壓接網路線、DVO
                  、網路故障維修， 更接觸到了 JS、SQL、Linux、Python
                  等等相關技術，在此期間還擔任過文書組組長、副組長，學習如何處理信件、與人溝通、辦理活動，認識了志同道合的一群好友，
                  網管是個大家庭，風氣自由、搞怪，但最重要的是我們都擁有一顆熱忱服務與不斷追求進步的心。
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    borderBottom: `3px solid ${amber[600]}`,
                  }}
                  color="textDark"
                  display="inline-block"
                >
                  其他經歷
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }} color="textDark">
                  大三升大四的暑假期間，我報名了六角學院的網頁切版直播班，主要學習
                  HTML、CSS，除了每周的影音直播、主線任務，還參與小組討論與小組專題，
                  在此期間收穫良多，包含要怎麼切出 1 px 也不差的網頁、Bootstrap
                  CSS 框架、Git
                  小組協作等等，更重要的是與組員溝通的技巧，我們從專題發想至設計稿再到專案開發，
                  合作產出完整的網站，期間也發生過許多摩擦、意見不合、Git
                  協作衝突，使我更體認到了溝通技巧的重要性。
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }} color="textDark">
                  在程式開發的這條路中，除了持續提升自己的技術，在這科技快速發展的年代，更要不斷吸收新知。管理與溝通方面也是不可缺少的，尤其在網頁開發中，需要考慮的事情良多，
                  除了程式技術，使用者的感受、視覺美觀設計、團隊溝通也是我所重視的，我希望在未來的工作中能學習到並持續進步。
                </Typography>
              </Stack>
            </Stack>
          </Container>

          <Box id="skills" sx={{ pb: 8 }} />

          <Container>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Playpen Sans",
                fontSize: 40,
                textAlign: "center",
                color: "#392e28",
                mb: 5,
                fontWeight: "bold",
              }}
              data-aos="fade-up"
            >
              Skills
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 1,
                borderBottom: `3px solid ${amber[600]}`,
              }}
              color="textDark"
              display="inline-block"
              data-aos="fade-up"
            >
              前端 Frontend
            </Typography>

            <ul className="introduction-ul" data-aos="fade-up">
              <li>熟悉 HTML、CSS、JavaScript</li>
              <li>
                Bootstrap CSS 框架、RWD，可獨立切版
                (暑假曾參與六角學院直播切版班)
              </li>
              <li>React Hook 初學者</li>
            </ul>

            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 1,
                borderBottom: `3px solid ${amber[600]}`,
              }}
              color="textDark"
              display="inline-block"
              data-aos="fade-up"
            >
              其他 Others
            </Typography>

            <ul className="introduction-ul" data-aos="fade-up">
              <li>Git 協作</li>
              <li>Java 物件導向</li>
              <li>開發過 Android Studio APP</li>
              <li>開發過 Django + PostgreSQL 後端系統</li>
              <li>寫過 MERN Stack - CRUD</li>
            </ul>
          </Container>

          <Box id="certifications" sx={{ pb: 8 }} />

          <Container sx={{ pb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Playpen Sans",
                fontSize: 40,
                textAlign: "center",
                color: "#392e28",
                mb: 5,
                fontWeight: "bold",
              }}
              data-aos="fade-up"
            >
              Certifications
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 1,
                borderBottom: `3px solid ${amber[600]}`,
              }}
              color="textDark"
              display="inline-block"
            >
              Microsoft
            </Typography>

            <ul className="introduction-ul" data-aos="fade-up">
              <li>AI-900 AI 人工智慧基礎認證</li>
            </ul>

            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 1,
                borderBottom: `3px solid ${amber[600]}`,
              }}
              color="textDark"
              display="inline-block"
              data-aos="fade-up"
            >
              平面／網頁／多媒體相關證照
            </Typography>

            <ul className="introduction-ul" data-aos="fade-up">
              <li>丙級網頁設計技術士</li>
            </ul>

            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 1,
                borderBottom: `3px solid ${amber[600]}`,
              }}
              color="textDark"
              display="inline-block"
              data-aos="fade-up"
            >
              TQC／EEC
            </Typography>

            <ul className="introduction-ul" data-aos="fade-up">
              <li>TQC-OA -Excel</li>
              <li>TQC-OA -Word</li>
              <li>TQC-OA -中文輸入</li>
            </ul>

            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 1,
                borderBottom: `3px solid ${amber[600]}`,
              }}
              color="textDark"
              display="inline-block"
              data-aos="fade-up"
            >
              職訓局
            </Typography>

            <ul className="introduction-ul" data-aos="fade-up">
              <li>乙級電腦軟體應用技術士</li>
              <li>丙級電腦軟體應用技術士</li>
            </ul>

            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 1,
                borderBottom: `3px solid ${amber[600]}`,
              }}
              color="textDark"
              display="inline-block"
              data-aos="fade-up"
            >
              財務會計相關證照
            </Typography>

            <ul className="introduction-ul" data-aos="fade-up">
              <li>丙級會計事務技術士</li>
              <li>會計能力測驗三級合格證書</li>
            </ul>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default Introduction;
