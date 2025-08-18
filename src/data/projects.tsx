import tmpImage from "../images/seokin-chung-07-30.jpg";

export interface ProjectDetails {
  imageSrc: string;
  imageAlt: string;
  projectTitle: string;
  projectDesc: string;
  // projectModal: ReactNode;
}

export const projectArray: ProjectDetails[] = [
  {
    projectTitle: "Title3",
    projectDesc: "789",
    imageAlt: "Something bruv",
    imageSrc: tmpImage,
  },
  {
    projectTitle: "Title1",
    projectDesc: "123",
    imageAlt: "Something bruv",
    imageSrc: tmpImage,
  },
  {
    projectTitle: "Title2",
    projectDesc: "456",
    imageAlt: "Something bruv",
    imageSrc: tmpImage,
  },{
    projectTitle: "Title6",
    projectDesc: "789",
    imageAlt: "Something bruv",
    imageSrc: tmpImage,
  },
  {
    projectTitle: "Title4",
    projectDesc: "123",
    imageAlt: "Something bruv",
    imageSrc: tmpImage,
  },
  {
    projectTitle: "Title5",
    projectDesc: "456",
    imageAlt: "Something bruv",
    imageSrc: tmpImage,
  },
];
