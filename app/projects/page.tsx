import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PageLink from "../_components/PageLink";
import SectionIntro from "../_components/SectionIntro";

export default function ProjectsPage() {
  return (
    <div className="py-6 space-y-10">
      <SectionIntro
        title="Projects"
        description="A collection of projects I've built while exploring modern web
        development, from user-focused interfaces to full-stack applications.
        Each project represents my journey of learning, problem-solving, and
        applying technologies to create practical solutions."
      />

      <div className="space-y-10 bg-white rounded-md overflow-hidden">
        <div className="space-y-3 p-7 pb-0">
          <h2 className="text-base font-manrope font-bold lowercase">
            polypous
          </h2>

          <p className="text-sm sm:text-[15px] leading-relaxed text-muted-foreground">
            A collection of projects I&apos;ve built while exploring modern web
            development, from user-focused interfaces to full-stack
            applications. Each project represents my journey of learning,
            problem-solving, and applying technologies to create practical
            solutions.
          </p>

          <div className="flex items-center gap-3">
            <Link
              target="_blank"
              href="https://github.com/jeranpena/polypous"
              className="flex items-center gap-1 text-sm hover:text-primary hover:underline text-muted-foreground"
            >
              <span className="inline-block">Github</span>
              <SquareArrowOutUpRight className="w-3 h-3" />
            </Link>
            <Link
              target="_blank"
              href="https://github.com/jeranpena/polypous"
              className="flex items-center gap-1 text-sm hover:text-primary hover:underline text-muted-foreground"
            >
              <span className="inline-block">Live demo</span>
              <SquareArrowOutUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        <div className="relative aspect-video">
          <Image
            src="/projects/polypous.jpg"
            alt="Jeran"
            fill
            sizes="100%"
            className="object-cover"
          />
        </div>
      </div>

      <PageLink href="/stack" label="stack" />
    </div>
  );
}
