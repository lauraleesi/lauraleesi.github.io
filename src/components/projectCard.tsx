import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { ReactNode } from 'react';
import { ProjectDetails } from '../data/projects';

export interface ProjectCardProps {
    project: ProjectDetails;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
  return (
    <Card sx={{ margin: '2vh' }}>
        <CardActionArea sx={{ maxHeight: 300, display: 'flex', flexFlow: 'row'}}>
            <CardMedia
                component="img"
                alt={project.imageAlt}
                height="140"
                image= {project.imageSrc}
            />
            <Box>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {project.projectTitle}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {project.projectDesc}
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