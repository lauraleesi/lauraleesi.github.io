import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Modal,
  Typography,
} from "@mui/material";
import { projectArray, ProjectDetails, ProjectImage } from "../data/projects";
import { imageUnavailable } from "../data/projectImageImports";
import React, { useEffect, useState } from "react";
import { FastAverageColor, FastAverageColorResource, FastAverageColorResult } from "fast-average-color";

interface ProjectCardDisplayProps {
  projectCount?: number;
  disableModals?: boolean;
}

export const ProjectCardDisplay: React.FC<ProjectCardDisplayProps> = ({
  projectCount,
  disableModals,
}) => {
  // Sort projects by weight, largest first
  const projects = projectArray
    .sort((a, b) => b.weight - a.weight)
    .filter((proj, index) => {
      return projectCount ? index < projectCount : true;
    });

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
        <ProjectCard project={value} disableModal={disableModals} />
      ))}
    </Box>
  );
};

export interface ProjectCardProps {
  project: ProjectDetails;
  disableModal?: boolean;
}

var fallbackImage: ProjectImage = {
  imageAlt: "Image missing",
  imageSrc: imageUnavailable,
  displayOnCard: true,
  displayOnModal: false,
};

function openModal(projectName: string) {
  console.log(projectName);
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  disableModal,
}) => {
  const [averageColour, setAverageColour] = useState("")
  // Set up modal states
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const projFeatureImage = project.images.find((img) => img.displayOnCard);
  // Use fallback if there is no feature/card image defined
  var featureImage = projFeatureImage ? projFeatureImage : fallbackImage;
  var projectImages = project.images.filter(
    (img) => img.displayOnModal != false
  );
  const cardHeight = 230;
  const cardWidth = 500;

  // const averageColour : string = findAverageColour(featureImage);

  useEffect(() => {
    findAverageColour(featureImage)
      .then((value) => {setAverageColour(value)})
      .catch(() => setAverageColour("white"))
  },[featureImage])

  // TODO disable modals based on input
  return (
    <>
      <Card
        sx={{
          margin: "2vh",
          maxHeight: cardHeight,
          width: cardWidth,
        }}
      >
        <CardActionArea
          onClick={handleOpen}
          sx={{
            maxHeight: cardHeight,
            height: cardHeight,
            display: "flex",
            flexFlow: "row",
            justifyContent: "start",
          }}
        >
          <img
            src={featureImage.imageSrc}
            style={{
              height: cardHeight,
              maxWidth: cardWidth / 2,
              objectFit: "cover",
            }}
          />
          <Box
            sx={{
              maxHeight: cardHeight,
              maxWidth: cardWidth / 2,
              height: "100%",
              width: "100%",
              display: "flex",
            }}
          >
            <CardContent sx={{ width: "100%" }}>
              <Typography gutterBottom variant="h5" component="div">
                {project.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {project.role ? (
                  <>
                    <b>Role: </b> {project.role} <br />
                  </>
                ) : (
                  ""
                )}
                {project.platform ? (
                  <>
                    <b>Platform: </b> {project.platform} <br />
                  </>
                ) : (
                  ""
                )}
                {project.genre ? (
                  <>
                    <b>Genre: </b> {project.genre} <br />
                  </>
                ) : (
                  ""
                )}
                {project.engine ? (
                  <>
                    <b>Engine: </b> {project.engine} <br />
                  </>
                ) : (
                  ""
                )}
              </Typography>
              <CardActions
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                }}
              >
                <Button size="small" onClick={handleOpen}>
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Box>
        </CardActionArea>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "80%",
            overflowY: "scroll",
            bgcolor: "white",
            // backgroundImage: `linear-gradient(180deg, ${averageColour}, white)`,
            borderRadius: 3,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            gutterBottom
            id="modal-modal-title"
            variant="h4"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            {project.name}
          </Typography>
          <Box
            id="modal-modal-description"
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box sx={{ width: "35%" }}>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                {project.role ? (
                  <>
                    <b>Role: </b> {project.role} <br />
                  </>
                ) : (
                  ""
                )}
                {project.platform ? (
                  <>
                    <b>Platform: </b> {project.platform} <br />
                  </>
                ) : (
                  ""
                )}
                {project.genre ? (
                  <>
                    <b>Genre: </b> {project.genre} <br />
                  </>
                ) : (
                  ""
                )}
                {project.engine ? (
                  <>
                    <b>Engine: </b> {project.engine} <br />
                  </>
                ) : (
                  ""
                )}
                {project.timeToComplete ? (
                  <>
                    <b>Timeline: </b> {project.timeToComplete} <br />
                  </>
                ) : (
                  ""
                )}
                {project.teamSize ? (
                  <>
                    <b>Team Size: </b> {project.teamSize} <br />
                  </>
                ) : (
                  ""
                )}
                {project.link ? (
                  <>
                    <b>Link: </b>{" "}
                    <a href={project.link} target="_blank">
                      {project.linkText ? project.linkText : "Download link"}
                    </a>
                    {project.linkNote ? (
                      <i style={{ fontSize: 12 }}> * {project.linkNote}</i>
                    ) : (
                      ""
                    )}
                    <br />
                  </>
                ) : (
                  ""
                )}
                {project.accoladeImage ? (
                  <>
                    <br/>
                    <img src={project.accoladeImage.imageSrc} alt={project.accoladeImage.imageAlt} style={{maxHeight: "8vh"}}/>
                    <br />
                  </>
                ) : (
                  ""
                )}
              </Typography>
            </Box>
            <Box sx={{ maxWidth: "65%" }}>
              {/* Summary */}
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "text.secondary" }}
              >
                <b>Summary</b>
              </Typography>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  color: "text.secondary",
                  paddingLeft: "1rem",
                  paddingBottom: "1rem",
                }}
              >
                {project.descriptionSummaryExtra ? (
                  <>
                    <i>{project.descriptionSummaryExtra}</i>
                    <br />
                    <br />
                  </>
                ) : (
                  ""
                )}
                {project.descriptionSummary}
              </Typography>
              {/* Role */}
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "text.secondary" }}
              >
                <b>Role</b>
              </Typography>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  color: "text.secondary",
                  paddingLeft: "1rem",
                  paddingBottom: "1rem",
                }}
              >
                {project.descriptionRole}
              </Typography>
              {/* Responsibilities */}
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "text.secondary" }}
              >
                <b>Key Responsibilities</b>
              </Typography>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  color: "text.secondary",
                  paddingLeft: "1rem",
                  paddingBottom: "1rem",
                }}
              >
                <ul style={{ marginTop: "0" }}>
                  {project.descriptionResponsibilities.map((value) => (
                    <li>{value}</li>
                  ))}
                </ul>
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              <b>Images</b>
            </Typography>
            <ImageList variant="masonry" cols={2} gap={8}>
              {projectImages.map((item) => (
                <ImageListItem key={item.imageSrc}>
                  <img
                    srcSet={`${item.imageSrc}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.imageSrc}?w=248&fit=crop&auto=format`}
                    alt={item.imageAlt}
                    loading="lazy"
                  />
                  <ImageListItemBar position="below" title={item.imageAlt} sx={{ color: "text.secondary", whiteSpace: "break-spaces" }}/>
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Box>
      </Modal>
    </>
  );
};


function findAverageColour(featureImage: ProjectImage) {
  const fac = new FastAverageColor();
  const averageColour = fac.getColorAsync(featureImage.imageSrc, {
    ignoredColor: [
      // [red (0-255), green (0-255), blue (0-255), alpha (0-255), treshold (0-255)]
      [255, 0, 100, 255, 5]
    ],
  }).then(color => { return color.hex; }).catch(() => { return "white"; });
  return averageColour;
}

// videoLink?: string;````````
