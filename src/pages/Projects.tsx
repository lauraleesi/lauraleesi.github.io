import { Box } from '@mui/material';
import * as React from 'react';
import { ProjectCardDisplay } from '../components/projectCardDisplay';


export const Projects: React.FC = () => {
  return <div>
    <h1>Projects Page</h1>
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
