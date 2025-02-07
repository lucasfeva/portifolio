import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function Header() {
  return (
    <div className="border-b">
      <div className="lg:max-w-[1150px] md:max-w-[600px] mx-auto lg:p-0 px-6">
        <div className="flex items-center justify-between py-4">
          <h1 className="font-bold text-2xl">{`<Feva />`}</h1>
          <div className="flex items-center gap-4">
            <span>Sobre</span>
            <span>Tecnoogias</span>
            <span>Projetos</span>
            <span>Contato</span>
            <ThemeToggle />
            <Separator orientation="vertical" className="h-6 bg-border" />
            <Button>Download CV</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
