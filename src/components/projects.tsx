import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  CarouselItem,
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { Projects } from "../constants/projects";
import { Badge } from "./ui/badge";
import Image from "next/image";

export default function ProjectsCard() {
  return (
    <Carousel
      opts={{ align: "start" }}
      className="w-full cursor-grab active:cursor-grabbing"
    >
      <CarouselContent>
        {Projects.map((project) => (
          <CarouselItem
            key={project.title}
            className="md:basis-1/2 lg:basis-1/3"
          >
            <Card>
              <CardHeader className="p-4">
                <div className="relative w-full h-[170px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center rounded-md"
                  />
                </div>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardContent className="flex flex-col gap-3 px-0">
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:text-primary/90 transition duration-200"
                  >
                    Ver projeto
                  </a>
                </CardContent>
              </CardHeader>
            </Card>
            {/* <Card className="w-full h-max-[250px] h-[260px] flex flex-col gap-4 p-4">
              <CardHeader className="p-0">
                <CardTitle className="text-2xl font-bold">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <div className="flex flex-row gap-4">
                <div className="rounded-md w-[300px] h-[150px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-fit object-center"
                  />
                </div>
                <div className="flex flex-col gap-3 w-[210px]">
                  <h3 className="font-semibold">Tecnologias</h3>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:text-primary/90 transition duration-200"
                  >
                    Ver projeto
                  </a>
                </div>
              </div>
            </Card> */}
          </CarouselItem>
        ))}
        <div className="hidden lg:flex items-center justify-center gap-2 mt-6">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </CarouselContent>
    </Carousel>
  );
}
