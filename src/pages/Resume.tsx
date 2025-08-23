import { Box, Button, Typography } from "@mui/material";
import * as React from "react";
import { ProjectCardDisplay } from "../components/projectCardDisplay";

export const Resume: React.FC = () => {
  return (
    <Box
      sx={{
        width: "90%",
        justifyItems: "center",
        margin: "5vh auto 2vh auto",
      }}
    >
      <Box sx={{ maxWidth: "80%" }}>
        <Box id="headerBox" sx={{ textAlign: "center", marginBottom: "5vh" }}>
          <Typography gutterBottom variant="h3" component="div">
            Laura Leesi - CV
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            <br />I am a Unity developer with industry experience in web
            development. I have an enthusiasm for VR development and
            experimenting with immerging technologies to create meaningful
            experiences.
          </Typography>
        </Box>
        <Box
          id="skillsAndInterestsBox"
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              <b>Key Skills and Knowledge</b>
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{
                color: "text.secondary",
                paddingBottom: "1rem",
              }}
            >
              <ul style={{ marginTop: "0" }}>
                <li>
                  3+ Years of professional software development experience
                </li>
                <li>3+ Years using Unity Engine</li>
                <li>5+ Years using C#</li>
                <li>Experience with VR development</li>
                <li>
                  Experience with .Net EF, React, Typescript, Javascript, Java,
                  Python, MySQL, PHP, Kubernetes, AWS, Docker, GraphQL and
                  familiarity with C++
                </li>
                <li>3+ Years using Unity Engine</li>
              </ul>
              <br />
              <ul>
                <li>
                  Experience working both closely and independently while in
                  teams ranging from 3 to 10+ people
                </li>
                <li>Experience with agile and kanban development processes</li>
              </ul>
            </Typography>
          </Box>
          <Box sx={{ maxWidth: "50%" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              <b>Interests</b>
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{
                color: "text.secondary",
                paddingBottom: "1rem",
              }}
            >
              <ul style={{ marginTop: "0" }}>
                <li>VR development</li>
                <li>Co-operative video games</li>
                <li>Puzzle orientated video games</li>
                <li>Game Mechanics development</li>
              </ul>
            </Typography>
          </Box>
        </Box>
        <Box
          id="projectBox"
          sx={{
            // width: '90%',
            justifyItems: "center",
            margin: "5vh auto 2vh auto",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Projects
          </Typography>
          <ProjectCardDisplay projectCount={3}></ProjectCardDisplay>
        </Box>
        <Box
          id="workExperienceBox"
          sx={{
            justifyItems: "center",
            margin: "5vh auto 2vh auto",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Work Experience
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box sx={{ width: "50%", padding: "1vh" }}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ color: "text.secondary" }}
              >
                <b>Software Developer - WorkingMouse</b>
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                component="div"
                sx={{ color: "text.secondary" }}
              >
                July 2023 - December 2024
              </Typography>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  color: "text.secondary",
                  paddingBottom: "1rem",
                }}
              >
                <ul style={{ marginTop: "0" }}>
                  <li>Worked on developing new Web Applications</li>
                  <li>
                    Used proprietary software to create unique solutions to
                    customer problems
                  </li>
                  <li>
                    Worked in a multi-disciplinary team to develop a large scale
                    modernisation project over 12+ months
                  </li>
                  <li>
                    Worked across the whole development process, including
                    discovery, planning, estimations, and development
                  </li>
                  <li>Iteratively worked on .Net based systems</li>
                </ul>
              </Typography>
            </Box>
            <Box sx={{ maxWidth: "50%", padding: "1vh" }}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ color: "text.secondary" }}
              >
                <b>Support Developer - WorkingMouse</b>
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                component="div"
                sx={{ color: "text.secondary" }}
              >
                July 2021 - July 2023
              </Typography>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  color: "text.secondary",
                  paddingBottom: "1rem",
                }}
              >
                <ul style={{ marginTop: "0" }}>
                  <li>
                    Worked on live production Web and Mobile (Android and Apple)
                    applications
                  </li>
                  <li>
                    Made bug fixes and feature additions for pre-existing Web
                    and Mobile applications
                  </li>
                  <li>
                    Corresponded directly with customers to efficiently find
                    solutions to unique problems
                  </li>
                  <li>
                    Released new fixes and features to live apps using Docker
                    and Kubernetes
                  </li>
                  <li>
                    Released updates to mobile applications on both the Google
                    Play Store and Apple App Store
                  </li>
                  <li>
                    Worked with customers in a variety of industries, including
                    UniLodge, Moreton Island Adventures, Master Electricians
                    Australia, and Aptus Construction Systems among others
                  </li>
                </ul>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          id="educationBox"
          sx={{
            justifyItems: "center",
            margin: "5vh auto 2vh auto",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Education
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box sx={{ width: "33%", padding: "1vh" }}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ color: "text.secondary" }}
              >
                <b>Bachelor of Games and Interactive Environments</b>
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                component="div"
                sx={{ color: "text.secondary" }}
              >
                2019 - Current
              </Typography>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  color: "text.secondary",
                  paddingBottom: "1rem",
                }}
              >
                <ul style={{ marginTop: "0" }}>
                  <li>Queensland University of Technology</li>
                  <li>Major in Software Technology</li>
                </ul>
              </Typography>
            </Box>
            <Box sx={{ width: "33%", padding: "1vh" }}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ color: "text.secondary" }}
              >
                <b>Certificate II in Visual Arts</b>
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                component="div"
                sx={{ color: "text.secondary" }}
              >
                2018
              </Typography>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  color: "text.secondary",
                  paddingBottom: "1rem",
                }}
              >
                <ul style={{ marginTop: "0" }}>
                  <li>Cavendish Road State High School</li>
                </ul>
              </Typography>
            </Box>
            <Box sx={{ maxWidth: "33%", padding: "1vh" }}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ color: "text.secondary" }}
              >
                <b>Queensland Certificate of Education</b>
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                component="div"
                sx={{ color: "text.secondary" }}
              >
                2018
              </Typography>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  color: "text.secondary",
                  paddingBottom: "1rem",
                }}
              >
                <ul style={{ marginTop: "0" }}>
                  <li>Cavendish Road State High School</li>
                </ul>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
