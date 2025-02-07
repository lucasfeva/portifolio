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
              className="flex aspect-square items-center justify-center px-6 py-24 rounded-lg shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${tech.color1}, ${tech.color2})`,
              }}
            >
              <div className="relative w-16 h-16">
                <Image src={tech.icon} fill alt="Ícone de tecnologia" />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
