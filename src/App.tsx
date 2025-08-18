import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {
  MemoryRouter,
  Route,
  Routes,
  Link,
  matchPath,
  useLocation,
  StaticRouter,
	BrowserRouter,
} from 'react-router';
import MuiThemeProvider from './themes/useTheme';
import { AppBar, Toolbar } from '@mui/material';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Resume } from './pages/Resume';

function Router(props: { children?: React.ReactNode }) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/home">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={['/home']} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

export const PageHeader: React.FC = () => {
  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch(['/home', '/projects', '/resume']);
  const currentTab = routeMatch?.pattern?.path;

  return (
      <AppBar position='sticky' color="inherit"> 
        <Toolbar sx={(theme) => ({ justifyContent: 'space-between'})}>
          <Box>
            Laura Leesi
          </Box>
          <Tabs 
            value={currentTab} 
            role="navigation"
            centered>
            <Tab label="Home" value="/home" to="/home" component={Link} />
            <Tab label="Projects" value="/projects" to="/projects" component={Link} />
            <Tab label="Resume" value="/resume" to="/resume" component={Link} />
          </Tabs>
          <Box>
            Contact
          </Box>
        </Toolbar>
      </AppBar>
  );
}

function CurrentRoute() {
  const location = useLocation();

  return (
    <Routes>
         <Route path="/home" element={<Home />} />
         <Route path="/projects" element={<Projects />} />
         <Route path="/resume" element={<Resume />} />
       </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider>
        <Box sx={{ width: '100%' }}>
          <PageHeader />
          <Routes>
            <Route path="*" element={<CurrentRoute />} />
          </Routes>
        </Box>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}