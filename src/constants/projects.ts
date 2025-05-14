interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

export const Projects: Project[] = [
  {
    title: "Portifolio",
    description:
      "Portifolio pessoal desenvolvido com Next.js, Tailwind CSS e TypeScript.",
    image: "/projects/portifolio.png",
    link: "https://lucasfeva-portifolio.vercel.app/",
    technologies: [
      "react",
      "nextjs",
      "node",
      "tailwind",
      "typescript",
      "javascript",
      "html",
    ],
  },
];
