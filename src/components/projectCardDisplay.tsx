import { Box } from "@mui/material";
import { ReactNode } from "react";
import { projectArray } from "../data/projects";
import { ProjectCard } from "./projectCard";

interface ProjectCardDisplayProps {
  projectCount?: number;
}

export const ProjectCardDisplay: React.FC<ProjectCardDisplayProps> = (
  {projectCount}
) => {
  const projects = projectArray
    .sort((a, b) => a.projectTitle.localeCompare(b.projectTitle))
    .filter((proj, index) => {return projectCount ? index < projectCount : true})

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      })}
    >
      {projects.map((value) => (
        <ProjectCard project={value} />
      ))}
    </Box>
  );
};
