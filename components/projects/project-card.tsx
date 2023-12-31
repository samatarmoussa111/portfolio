import React from "react";
import Iconify from "./iconify";
import Typography from "../ui/typography";
import Link from "next/link";
import Image from "next/image";

import { Project } from "contentlayer/generated";

export default function ProjectCard(project: Project) {
  return (
    <div className="relative flex max-w-xs flex-col  rounded-lg border border-border shadow-md">
      <Link href={project.url} className="mb-10">
        <Image
          className="h-[150px] w-full rounded-t-lg object-cover"
          src={project.imgSrc}
          alt={project.title}
          width={1800}
          height={150}
        />

        <div className="p-5">
          <Typography variant="h4" component="h3">
            {project.title}
          </Typography>

          <Typography variant="muted" component="p">
            {project.description}
          </Typography>
        </div>
      </Link>
      {(project.sourceLink !== "" || project.repoLink !== "") && (
        <div className="absolute bottom-5 right-5 flex items-center space-x-5">
          {project.repoLink !== "" && (
            <Link
              href={project.repoLink as string}
              target="_blank"
              rel="noreferrer"
              className="transform transition-all duration-200 hover:scale-110 hover:text-primary"
            >
              <Iconify className="text-2xl" icon="akar-icons:github-fill" />
            </Link>
          )}
          {project.sourceLink !== "" && (
            <Link
              href={project.sourceLink as string}
              target="_blank"
              rel="noreferrer"
              className="transform transition-all duration-200 hover:scale-110 hover:text-primary"
            >
              <Iconify className="text-2xl" icon="iconoir:open-new-window" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
