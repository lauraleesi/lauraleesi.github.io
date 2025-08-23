import { Box, Typography } from '@mui/material';
import * as React from 'react';
import { ProjectCardDisplay } from '../components/projectCardDisplay';


export const Projects: React.FC = () => {
  return <div>
    <Box 
      sx={{ 
        width: '90%', 
        justifyItems: 'center',
        margin: '5vh auto 2vh auto'
        }}>
      <Box sx={{ textAlign: 'center', maxWidth: '80%' }}>
        <Typography gutterBottom variant="h3" component="div">
          Project Portfolio
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          <br/>
          Welcome to my portfolio. Here you’ll find a selection of my work. Explore my projects to learn more about what I do.
        </Typography>
      </Box>
    </Box>
    <Box 
      sx={{ 
        width: '90%', 
        justifyItems: 'center',
        margin: '5vh auto 2vh auto'
        }}>
          <ProjectCardDisplay/>
    </Box>
    </div>;
};
