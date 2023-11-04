import Container from "../container/container";
import Typography from "../ui/typography";
import ProjectCard from "./project-card";

import { allProjects } from "contentlayer/generated";

const Projects = () => {
  return (
    <Container className=" mt-10 sm:mt-36">
      <Typography variant="h1" className="text-center">
        Projects
      </Typography>{" "}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8  mt-10 sm:mt-20">
        {allProjects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </Container>
  );
};

export default Projects;
