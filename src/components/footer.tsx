import Link from "next/link";
import { Button } from "./ui/button";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div className="border-t">
      <div className="lg:max-w-[1150px] md:max-w-[600px] mx-auto lg:p-0 px-6">
        <div className="flex items-center justify-between py-4">
          <h1 className="font-bold text-2xl">{`<Feva />`}</h1>
          <span className="flex items-center gap-4">
            Copyright {new Date().getFullYear()} &copy;
          </span>
          <div className="flex gap-2">
            <Button
              className="rounded-full"
              size="icon"
              variant="ghost"
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
              variant="ghost"
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
    </div>
  );
}
