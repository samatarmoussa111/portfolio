import Container from "@/components/container/container";
import Typography from "@/components/ui/typography";
import { Mdx } from "@/mdx-components";
import { allProjects } from "contentlayer/generated";
import Image from "next/image";

export const generateStaticParams = async () =>
  allProjects.map((project) => ({ slug: project._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const project = allProjects.find(
    (project) => project._raw.flattenedPath === params.slug
  );
  if (!project) throw new Error(`project not found for slug: ${params.slug}`);
  return { title: project.title };
};

const ProjectDetails = ({ params }: { params: { slug: string } }) => {
  const project = allProjects.find(
    (project) => project._raw.flattenedPath === params.slug
  );
  if (!project) throw new Error(`project not found for slug: ${params.slug}`);

  return (
    <Container className="flex items-center justify-center flex-col gap-7">
      <Typography variant="h1">{project.title}</Typography>
      <Image
        className="rounded-t-lg object-cover"
        src={project.imgSrc}
        alt={project.title}
        width={300}
        height={400}
      />
      <Mdx code={project.body.code} />
    </Container>
  );
};

export default ProjectDetails;
