type projectType = {
  id: number;
  imgSrc: string;
  title: string;
  description: string;
  repoLink: string;
  sourceLink: string;
  techIcons: string[];
};

const TECHICONS: { label: string; value: string }[] = [
  {
    label: "HTML",
    value: "vscode-icons:file-type-html",
  },
  {
    label: "CSS",
    value: "vscode-icons:file-type-css",
  },
  {
    label: "JAVASCRIT",
    value: "logos:javascript",
  },
  {
    label: "typescript",
    value: "logos:typescript-icon",
  },
  {
    label: "reactjs",
    value: "vscode-icons:file-type-reactjs",
  },
  {
    label: "nextjs",
    value: "cib:next-js",
  },
  {
    label: "tailwindcss",
    value: "logos:tailwindcss-icon",
  },
  {
    label: "styled-components",
    value: "simple-icons:styled-components",
  },
  {
    label: "redux",
    value: "logos:redux",
  },
  {
    label: "react-router",
    value: "logos:react-router",
  },
  {
    label: "react-hook-form",
    value: "fluent:form-20-regular",
  },
  {
    label: "rest api",
    value: "dashicons:rest-api",
  },
  {
    label: "prisma",
    value: "vscode-icons:file-type-light-prisma",
  },
  {
    label: "PostgreSQL",
    value: "vscode-icons:file-type-pgsql",
  },
  {
    label: "MySQL",
    value: "logos:mysql",
  },
  {
    label: "vercel",
    value: "logos:vercel-icon",
  },
  {
    label: "firebase",
    value: "vscode-icons:file-type-firebase",
  },
  {
    label: "tRPC",
    value: "simple-icons:trpc",
  },
  {
    label: "Strapi",
    value: "logos:strapi-icon",
  },
  {
    label: "Supabase",
    value: "logos:supabase-icon",
  },
];

export const projectsList: projectType[] = [
  {
    id: 1,
    imgSrc: "/images/JobsForYou.png",
    title: "Remote Monkey",
    description: "A project management tool for remote teams",
    repoLink: "#",
    sourceLink: "#",
    techIcons: [
      "cib:next-js",
      "logos:typescript-icon",
      "logos:tailwindcss-icon",
      "vscode-icons:file-type-light-prisma",
      "logos:vercel-icon",
      "logos:mysql",
      "simple-icons:trpc",
    ],
  },
  {
    id: 2,
    imgSrc: "/images/commercial_cleaning.jpg",
    title: "Project 1",
    description: "A project management tool for remote teams",
    repoLink: "#",
    sourceLink: "#",
    techIcons: [
      "cib:next-js",
      "logos:typescript-icon",
      "logos:tailwindcss-icon",
      "vscode-icons:file-type-light-prisma",
      "logos:vercel-icon",
      "logos:mysql",
      "simple-icons:trpc",
    ],
  },
  {
    id: 3,
    imgSrc: "/images/commercial_cleaning.jpg",
    title: "Project 1",
    description: "A project management tool for remote teams",
    repoLink: "#",
    sourceLink: "#",
    techIcons: [
      "cib:next-js",
      "logos:typescript-icon",
      "logos:tailwindcss-icon",
      "vscode-icons:file-type-light-prisma",
      "logos:vercel-icon",
      "logos:mysql",
      "simple-icons:trpc",
    ],
  },
];
