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
  {
    title: "Calcular Nota",
    description:
      "Aplicação desenvolvida para calcular a média final e indicar a nota mínima necessária para aprovação com média 5, de acordo com os critérios da FHO.",
    image: "/projects/calcular-nota.png",
    link: "https://calcularnota.com.br/",
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
