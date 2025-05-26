import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "<Feva />",
  description:
    "Lucas Ferreira Silva, desenvolvedor web com paixão por criar sites inovadores e funcionais. Com dois anos de experiência, foco em entregar soluções de alta qualidade e contribuir para o sucesso dos projetos.",
  keywords: [
    "Lucas Ferreira Silva",
    "Desenvolvedor Web",
    "Desenvolvedor Frontend",
    "Desenvolvedor Backend",
    "Desenvolvedor Fullstack",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "PHP",
    "MySQL",
    "Laravel",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
