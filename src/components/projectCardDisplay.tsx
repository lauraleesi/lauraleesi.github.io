import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { ReactNode } from "react";
import { projectArray, ProjectDetails } from "../data/projects";

interface ProjectCardDisplayProps {
  projectCount?: number;
}

export const ProjectCardDisplay: React.FC<ProjectCardDisplayProps> = (
  {projectCount}
) => {
  const projects = projectArray
    .sort((a, b) => a.name.localeCompare(b.name))
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

export interface ProjectCardProps {
    project: ProjectDetails;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
  return (
    <Card sx={{ margin: '2vh' }}>
        <CardActionArea sx={{ maxHeight: 300, display: 'flex', flexFlow: 'row'}}>
            <CardMedia
                component="img"
                alt={project.images[0].imageAlt}
                height="140"
                image= {project.images[0].imageSrc}
            />
            <Box>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {project.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {project.descriptionSummary}
                </Typography>
                <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            </CardContent>
            </Box>
        </CardActionArea>
    </Card>
  );
}
