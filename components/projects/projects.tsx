import Link from "next/link";
import Container from "../container/container";
import Typography from "../ui/typography";
import ProjectCard from "./project-card";
import { projectsList } from "./projects-list";

const Projects = () => {
  return (
    <Container className=" mt-10 sm:mt-36">
      <Typography variant="h1" className="text-center">
        Projects
      </Typography>{" "}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8  mt-10 sm:mt-20">
        {projectsList.map((project) => (
          <div key={project.id} className="flex justify-center items-center">
            <ProjectCard
              id={project.id}
              title={project.title}
              description={project.description}
              imgSrc={project.imgSrc}
              techIcons={project.techIcons}
              repoLink={project.repoLink}
              sourceLink={project.sourceLink}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Projects;
