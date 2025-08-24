import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  MemoryRouter,
  Route,
  Routes,
  Link,
  matchPath,
  useLocation,
  StaticRouter,
  BrowserRouter,
  useNavigate,
} from "react-router";
import MuiThemeProvider from "./themes/useTheme";
import { AppBar, Button, TextField, Toolbar, Typography } from "@mui/material";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Resume } from "./pages/Resume";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";
import { ProjectPitch } from "./pages/ProjectPitch";

function Router(props: { children?: React.ReactNode }) {
  const { children } = props;
  if (typeof window === "undefined") {
    return <StaticRouter location="/home">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={["/home"]} initialIndex={0}>
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
  const routeMatch = useRouteMatch([
    "/home",
    "/projects",
    "/resume",
    "/project-pitch",
  ]);
  const currentTab = routeMatch?.pattern?.path;
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" color="inherit">
      <Toolbar sx={(theme) => ({ justifyContent: "space-between" })}>
        <Box>
          <Button
            variant="text"
            onClick={() => navigate("/home")}
            color="secondary"
          >
            Laura Leesi
          </Button>
        </Box>
        <Tabs
          value={currentTab}
          role="navigation"
          textColor="secondary"
          indicatorColor="secondary"
          centered
        >
          <Tab label="Home" value="/home" to="/home" component={Link} />
          <Tab
            label="Projects"
            value="/projects"
            to="/projects"
            component={Link}
          />
          <Tab label="Resume" value="/resume" to="/resume" component={Link} />
          <Tab
            label="Project Pitch"
            value="/project-pitch"
            to="/project-pitch"
            component={Link}
          />
        </Tabs>
        <Box>
          <Button
            variant="text"
            color="secondary"
            onClick={() => navigate(`${currentTab}#contactFooter`)}
          >
            Contact Me
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export const ContactForm: React.FC = () => {
  const [name, setName] = useState("");

  // function handleChange(e) {
  //   setName(e.target.value);
  // }

  return (
    // <form>
    //   <label>Enter your name:
    //     <input
    //       type="text"
    //       value={name}
    //       onChange={handleChange}
    //     />
    //   </label>
    //   <p>Current value: {name}</p>
    // </form>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "5vh",
        width: "70%",
      }}
    >
      <form>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <TextField
            required
            id="nameField"
            label="Name"
            placeholder="Name"
            sx={{ margin: "1vh", maxWidth: "35%" }}
          />
          <TextField
            required
            id="addressField"
            label="Email Address"
            placeholder="Email Address"
            sx={{ margin: "1vh", flexGrow: 1 }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <TextField
            required
            id="subjectField"
            label="Subject"
            placeholder="Subject"
            sx={{ margin: "1vh", flexGrow: 1 }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <TextField
            required
            id="messageField"
            label="Message"
            placeholder="Message"
            multiline
            sx={{ margin: "1vh", flexGrow: 1 }}
            minRows={6}
          />
        </Box>
        <Button variant="contained" sx={{ margin: "1vh" }}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export const PageFooter: React.FC = () => {
  return (
    <Box
      id="contactFooter"
      sx={{
        width: "90%",
        justifyItems: "center",
        margin: "5vh auto 2vh auto",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          width: "35%",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          padding: "5vh",
        }}
      >
        <Typography gutterBottom variant="h4" component="div">
          {" "}
          Get in Touch
        </Typography>
        <Button
          variant="text"
          startIcon={<EmailIcon />}
          href="mailto:laurakaileesi@gmail.com"
          target="_blank"
        >
          laurakaileesi@gmail.com
        </Button>
        <Button
          variant="text"
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/laura-leesi/"
          target="_blank"
        >
          LinkedIn
        </Button>
        <br />
        <Typography
          variant="body1"
          component="div"
          sx={{ color: "text.secondary" }}
        >
          {" "}
          Thank you for visiting my site. I'm always interested in hearing about
          stories from the VR space and development opportunities. Get in
          contact with me to chat.
        </Typography>
      </Box>
      <ContactForm />
    </Box>
  );
};

function CurrentRoute() {
  const location = useLocation();

  return (
    <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/project-pitch" element={<ProjectPitch />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider>
        <Box sx={{ width: "100%" }}>
          <PageHeader />
          <Routes>
            <Route path="*" element={<CurrentRoute />} />
          </Routes>
          <PageFooter />
        </Box>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}
