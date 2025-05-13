"use client";

import { Button } from "@/components/ui/button";
import Waves from "../components/waves";
import { Github, Linkedin } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "@/components/header";
import Link from "next/link";
import { TechnologyCarousel } from "@/components/technology-carousel";
import Footer from "@/components/footer";

export default function Home() {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    tl.from(".waves", { y: -50, opacity: 0 })
      .from(".intro h1", { x: -100, opacity: 0 }, "-=0.5")
      .from(".intro p", { x: 100, opacity: 0 }, "-=0.5")
      .from(".buttons button", { scale: 0, opacity: 0, stagger: 0.2 }, "-=0.5")
      .from(".about h2", { y: 50, opacity: 0 })
      .from(".about p", { y: 50, opacity: 0 }, "-=0.5")
      .from(".technologies", { y: 50, opacity: 0 });
  });

  return (
    <div>
      <Header />
      <div className="lg:max-w-[1150px] md:max-w-[600px] mx-auto space-y-24 lg:p-0 px-6 mb-16">
        <div className="py-24">
          <Waves
            lineColor="#2dd4bf"
            backgroundColor="rgba(255, 255, 255, 0.0)"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={0}
            xGap={12}
            yGap={36}
            className="waves !h-[467px] -z-10 top-[72px]"
          />
          <div className="intro space-y-8">
            <h1 className="lg:text-7xl md:text-7xl font-bold text-5xl">
              Olá, eu sou
              <br /> Lucas Ferreira.
            </h1>
            <p className="font-semibold">Desenvolvedor full-stack</p>
            <div className="buttons flex items-center gap-2">
              <Button className="rounded-full font-semibold">
                <Link
                  href="mailto:luscas.png@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Contate me
                </Link>
              </Button>
              <Button
                className="rounded-full"
                size="icon"
                variant="secondary"
                asChild
              >
                <Link
                  href="https://www.linkedin.com/in/lucas-ferreira-821739275/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Linkedin />
                </Link>
              </Button>
              <Button
                className="rounded-full"
                size="icon"
                variant="secondary"
                asChild
              >
                <Link
                  href="https://github.com/lucasfeva"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Github />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="about space-y-6">
          <h2 className="text-4xl font-bold">Sobre mim</h2>
          <p>
            Meu nome é Lucas Ferreira Silva, sou desenvolvedor web com uma
            paixão por criar sites inovadores e funcionais. Com dois anos de
            experiência no mercado, busco constantemente aprimorar minhas
            habilidades e expandir meu conhecimento. Meu foco é entregar
            soluções de alta qualidade e contribuir para o sucesso dos projetos
            em que estou envolvido.
          </p>
        </div>
        <div className="technologies space-y-6">
          <h2 className="text-4xl font-bold">Minhas técnologias</h2>
          <TechnologyCarousel />
        </div>
      </div>
      <Footer />
    </div>
  );
}
