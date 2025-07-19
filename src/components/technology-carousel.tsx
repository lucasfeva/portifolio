"use client";

import * as React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Technologies } from "../constants/technology";

export function TechnologyCarousel() {
  return (
    <Carousel
      opts={{ align: "start" }}
      className="w-full cursor-grab active:cursor-grabbing"
    >
      <CarouselContent>
        {Technologies.map((tech) => (
          <CarouselItem key={tech.icon} className="md:basis-1/3 lg:basis-1/5">
            <div
              className="relative group flex aspect-square items-center justify-center px-6 py-24 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${tech.color1}, ${tech.color2})`,
              }}
            >
              <div className="relative w-16 h-16 transition-all duration-300 group-hover:brightness-50 group-hover:scale-90">
                <Image src={tech.icon} fill alt={`${tech.name}`} />
              </div>
              <div className="absolute inset-0 bg-neutral-950/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h3 className="text-secondary dark:text-foreground font-semibold text-lg text-center px-2">
                  {tech.name}
                </h3>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden lg:flex items-center justify-center gap-2 mt-6">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
