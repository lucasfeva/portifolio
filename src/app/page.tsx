"use client";

import { Button } from "@/components/ui/button";
import Waves from "../components/waves";
import { Github, Linkedin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Header from "@/components/header";
import Link from "next/link";
import { TechnologyCarousel } from "@/components/technology-carousel";
import Footer from "@/components/footer";
import ProjectsCard from "@/components/projects";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const smoothScroll = () => {
      document.documentElement.style.scrollBehavior = "smooth";

      const style = document.createElement("style");
      style.textContent = `
        html {
          scroll-behavior: smooth !important;
        }
        * {
          scroll-behavior: smooth !important;
        }
      `;
      document.head.appendChild(style);
    };

    smoothScroll();
  }, []);

  useGSAP(() => {
    gsap.from(".waves", {
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".intro h1", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
    });

    gsap.from(".intro p", {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.7,
    });

    gsap.from(".buttons button", {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.2,
      delay: 0.9,
    });

    const buttons = document.querySelectorAll(".buttons button");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.1,
          duration: 0.3,
          ease: "back.out(1.7)",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: "back.out(1.7)",
        });
      });
    });

    gsap.from(".about h2", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(".about p", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(".technologies h2", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".technologies",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(".technology-carousel", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: ".technologies",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(".projects h2", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".projects",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(".projects-content", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: ".projects",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div className="scroll-smooth">
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
          <h2 className="text-4xl font-bold" id="about">
            Sobre mim
          </h2>
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
          <h2 className="text-4xl font-bold" id="technologies">
            Minhas técnologias
          </h2>
          <div className="technology-carousel">
            <TechnologyCarousel />
          </div>
        </div>
        <div className="projects space-y-6">
          <h2 className="text-4xl font-bold" id="projects">
            Projetos
          </h2>
          <div className="projects-content">
            <ProjectsCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
