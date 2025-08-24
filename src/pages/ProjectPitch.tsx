import { Box, Typography } from "@mui/material";
import * as React from "react";
import { ProjectCardDisplay } from "../components/projectCardDisplay";

export const ProjectPitch: React.FC = () => {
  return (
    <div>
      <Box
        sx={{
          width: "90%",
          justifyItems: "center",
          margin: "5vh auto 2vh auto",
        }}
      >
        <Box sx={{ textAlign: "center", maxWidth: "65%" }}>
          <Typography gutterBottom variant="h3" component="div">
            Project Portfolio
          </Typography>
          <Box sx={{ textAlign:"left"}}>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              <br />I have developed a reasonable portfolio while working on a
              degree in Games and Interactive Environments. Majoring in Software
              Development has prepared me for work in Unity environments, as
              well as giving me exposure to many different programming
              languages, such as C#, Python and Java. Furthermore, my
              professional experience working as a Software Developer at a Web
              Development company has given me many soft skills to take with me,
              along with additional exposure to a large number of languages and
              frameworks, both used for development and delivery.
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              <br />
              All this has placed me in good standing for many IT jobs but does
              not cover the full scope of requirements for a games industry job.
              Ultimately, I would love to work in a VR development position,
              specifically in pursuit of medical improvements, such as patient
              rehabilitation. Job advertisements for jobs of this nature are not
              common or easy to find, especially when looking at only a small
              area like Brisbane. Due to this, I have found some similar VR
              developer job listings to draw on for desired skills. These jobs
              are either for studios that do not specialise in medical work or
              are based overseas.{" "}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              <br />A job listing by Motion Curve, an animation focused XR
              studio, lists some expected skills for a developer position as
              “Proficiency in Unreal Engine, Unity, C# and C++ programming”,
              “Proficiency in Virtual Reality and Mixed Reality programming” and
              “Knowledge of networking and traditional programming languages (C,
              C#, C++)”. (https://motioncurve.com.au/jobs/xr-developer) My
              portfolio already includes multiple VR games, and all my game
              projects are made in Unity. I also already have traditional
              programming knowledge thanks to my previous work experience.
              However, what I am unable to show a proficiency in is both working
              in Unreal Engine and in networking. Note that due to the animation
              focus of their studio not all of their criteria will match the
              standard expectations of a software developer in the XR space.{" "}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              <br />A job listing from an American company, Augment Jobs, lists
              some desired skills as “…proficiency in Unity3D or Unreal Engine”,
              “Experience with VR hardware and software integration”, and
              “Strong understanding of 3D mathematics, physics, and spatial
              reasoning.”.
              (https://jobsinxr.com/job/augment-jobs-virtual-reality-vr-developer-17203)
              Once again, Unreal Engine is a gap in my experience (although here
              it is suggested as interchangeable with experience in Unity3D).{" "}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              <br />
              Finally, another American company, Sabre Systems inc., suggest
              knowledge in “…Unity or Unreal game engine…”, “…experience in 3D
              model creation pipeline, lighting, texturing and shader
              development.”, and “artificial intelligence programming”.
              (https://jobsinxr.com/job/sabre-systems-inc-arvr-developer-junior-17190)
              Unreal Engine development experience is once again shown to be
              desirable, alongside graphics development and AI.{" "}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              <br />
              Unreal Engine development experience, although not overtly
              required, does seem to be a desirable skill. The Big Game Engines
              Report of 2025
              (https://vginsights.com/assets/reports/The_Big_Game_Engines_Report_of_2025.pdf
              page 10) by Video Game Insights found that 31% of all Steam sales
              in 2024 were for games produced using Unreal Engine. This is in
              comparison to 26% for Unity, and approximately 41% for custom
              engines. Analysing this metric across the last 10 years shows a
              few more interesting metrics. Firstly, the prevalence of custom
              engines has dropped significantly, overall dropping by 42% since
              2014. Secondly, historically the usage of Unity and Unreal Engine
              are fairly evenly distributed. This changed between 2020 and 2023,
              where Unity dominated over Unreal by 8-10%. This shifted in favour
              of Unreal in 2024, when they overtook Unity by 5%. Based just on
              this data it is hard to say what the future of game engines will
              be, but it is clear that Unreal Engine is a strong contender to
              Unity and therefore worthwhile learning from an industry relevance
              perspective. The metrics compared by me here are in relation to
              units sold, not overall number of games published and therefore is
              looking at the use of game engines mostly from the perspective of
              AAA and AA game studios and some highly successful indie studios.{" "}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              <br />
              With these factors considered, I would like to undertake a project
              built using Unreal Engine with a focus on improving my visual
              presentation skills. Until present, my contributions to the
              projects on my portfolio have focused mainly on gameplay systems
              without much consideration for the visuals of the game. Not only
              is the ability to create something visually appealing attractive
              from an employment perspective (see the Sabre Systems inc. job
              listing), but it can also help to create a more engaging and
              immersive experience for the player. This will help me to fill two
              major gaps in my portfolio.{" "}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              <br />
              The project would involve very simple first-person exploration
              gameplay in a “walking simulator” style. The project will require
              building a small level, complete with interesting lighting,
              shaders and ambient sounds. With respect to scope, there is the
              possibility of adding small gameplay features that encourage the
              player to explore and pay attention to their surroundings. A
              simple implementation of this would be adding collectables for the
              player to find. A more complex but also more interesting feature
              would be the addition of a camera and photo album mechanic.
              Furthermore, these photos could be leveraged at different points
              in the gameplay to trigger environmental change, something as
              small as an animal appearing, or as dramatic as the lighting in a
              specific area changing. While these features may lead to a more
              compelling player experience and allow for some interesting
              learning opportunities, they are not the primary goals of this
              project and are likely out of scope due to the short timeframe.{" "}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              <br />
              Overall, the goal is to create a novel and immersive experience
              using different visual tools, like shaders and VFX, as well as
              appropriately placed ambient sounds. Most importantly, the project
              should be completed using Unreal Engine in order to develop skills
              in a new game engine. Finally, once completed the project should
              be uploaded to itch.io so it can be easily shared on my portfolio.{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
