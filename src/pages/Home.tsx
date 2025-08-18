import { Box, Button } from '@mui/material';
import * as React from 'react';
import { ProjectCard } from '../components/projectCard';
import tmpImage from '../images/seokin-chung-07-30.jpg';
import { ProjectCardDisplay } from '../components/projectCardDisplay';


export const Home: React.FC = () => {
  return (
    <Box 
      sx={{ 
        width: '90%', 
        justifyItems: 'center',
        margin: '5vh auto 2vh auto'
        }}>
      <Box sx={{ textAlign: 'center'}}><h2>Hi, I'm Laura!</h2></Box>
      <Box sx={{ textAlign: 'center'}}><p>I am an aspiring game developer with experience as a software developer 
        at a web development company. I have an enthusiasm for VR development and 
        experimenting with immerging technologies to create meaningful experiences.</p>
            <p>Below you will find links to both a resume and a portfolio of projects I have undertaken.</p></Box>
      <Box>
        <Button variant="outlined">Resume</Button>
        <Button variant="outlined">Projects</Button>
      </Box>
      <FeaturedProjects/>
    </Box>
  );
};

export const FeaturedProjects: React.FC = () => {
  return (
    <Box 
      sx={{ 
        width: '90%', 
        justifyItems: 'center',
        margin: '5vh auto 2vh auto'
        }}>
          <ProjectCardDisplay projectCount={2}></ProjectCardDisplay>
      {/* <ProjectCard 
        project={{
          projectTitle: 'Title1',
          projectDesc: '123',
          imageAlt: 'Something bruv',
          imageSrc: tmpImage
        }}
        />
      <ProjectCard 
        project={{
          projectTitle: 'Title2',
          projectDesc: '456',
          imageAlt: 'Something bruv',
          imageSrc: tmpImage
        }}
        /> */}
    </Box>
  );
};