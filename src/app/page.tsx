import { Button } from "@/components/ui/button";
import Waves from "../components/Waves/Waves";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="max-w-[1300px] mx-auto py-24">
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
          className="!h-[467px] -z-10"
        />
        <div className="space-y-8">
          <h1 className="text-7xl font-bold">
            Olá, eu sou
            <br /> Lucas Ferreira.
          </h1>
          <p>Desenvolvedor web e Quality Assurance</p>
          <div className="flex items-center gap-2">
            <Button className="rounded-full">Contate me</Button>
            <Button className="rounded-full" size="icon" variant="secondary">
              <Linkedin />
            </Button>
            <Button className="rounded-full" size="icon" variant="secondary">
              <Github />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
