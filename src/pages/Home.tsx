import { Box, Button, Typography } from "@mui/material";
import * as React from "react";
import { ProjectCardDisplay } from "../components/projectCardDisplay";

export const Home: React.FC = () => {
  return (
    <Box
      sx={{
        width: "90%",
        justifyItems: "center",
        margin: "5vh auto 2vh auto",
      }}
    >
      <Box sx={{ textAlign: "center", maxWidth: "80%" }}>
        <Typography gutterBottom variant="h3" component="div">
          Hi, I'm Laura!
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          <br />I am an aspiring game developer with experience as a software
          developer at a web development company. I have an enthusiasm for VR
          development and experimenting with immerging technologies to create
          meaningful experiences.
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          <br />
          Below you will find links to both a resume and a portfolio of projects
          I have undertaken.
          <br />
        </Typography>
      </Box>
      <Box>
        <Button variant="outlined">Resume</Button>
        <Button variant="outlined">Projects</Button>
      </Box>
      <FeaturedProjects />
    </Box>
  );
};

export const FeaturedProjects: React.FC = () => {
  return (
    <Box
      sx={{
        // width: '90%',
        justifyItems: "center",
        margin: "5vh auto 2vh auto",
      }}
    >
      <Typography gutterBottom variant="h4" component="div">
        Featured Projects
      </Typography>
      <ProjectCardDisplay projectCount={3}></ProjectCardDisplay>
    </Box>
  );
};
