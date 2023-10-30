import React from "react";
import Iconify from "./iconify";
import Typography from "../ui/typography";
import Link from "next/link";
import Image from "next/image";

interface Props {
  id: number;
  imgSrc: string;
  title: string;
  description: string;
  repoLink: string;
  sourceLink: string;
  techIcons: string[];
}

export default function ProjectCard({
  id,
  imgSrc,
  title,
  description,
  repoLink,
  sourceLink,
  techIcons,
}: Props) {
  return (
    <div className="relative flex max-w-xs flex-col rounded-lg border border-border shadow-md">
      <Link href={`https://localhost:3000/projects/${id}`}>
        <Image
          className="h-[150px] w-full rounded-t-lg object-cover"
          src={imgSrc}
          alt={title}
          width={1800}
          height={150}
        />
      </Link>

      <div className="p-5">
        <Typography variant="h4" component="h3">
          {title}
        </Typography>

        <Typography variant="muted" component="p">
          {description}
        </Typography>

        {techIcons && techIcons.length > 0 && (
          <div className="mt-5 mb-12 flex flex-wrap gap-5">
            {techIcons.map((icon: string, i) => (
              <Iconify
                key={`icon-${i}`}
                className="text-2xl opacity-80"
                icon={icon}
              />
            ))}
          </div>
        )}
      </div>
      {(sourceLink !== "" || repoLink !== "") && (
        <div className="absolute bottom-5 right-5 flex items-center space-x-5">
          {repoLink !== "" && (
            <Link
              href={repoLink}
              target="_blank"
              rel="noreferrer"
              className="transform transition-all duration-200 hover:scale-110 hover:text-primary"
            >
              <Iconify className="text-2xl" icon="akar-icons:github-fill" />
            </Link>
          )}
          {sourceLink !== "" && (
            <Link
              href={sourceLink}
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
