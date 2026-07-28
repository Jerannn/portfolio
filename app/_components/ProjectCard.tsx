import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { Project } from "../_data/projects";
import Slider from "./Slider";
import SkillGroup from "./SkillGroup";

type ProjectCardProps = {
  items: Project;
};

export default function ProjectCard({ items }: ProjectCardProps) {
  return (
    <div className="space-y-10 overflow-hidden rounded-md bg-white">
      <div className="space-y-3 p-7 pb-0">
        <h2 className="font-manrope text-base font-bold lowercase">
          {items.title}
        </h2>

        <p className="text-muted-foreground text-sm leading-relaxed sm:text-[15px]">
          {items.description}
        </p>

        <SkillGroup
          title="Technologies"
          items={items.technologies.map((t) => ({ name: t }))}
        />

        <div className="flex items-center gap-3">
          <Link
            target="_blank"
            href={items.github}
            className="hover:text-primary text-muted-foreground font-manrope flex items-center gap-1 text-sm hover:underline"
          >
            <span className="inline-block">GitHub</span>
            <SquareArrowOutUpRight className="h-3 w-3" />
          </Link>
          <Link
            target="_blank"
            href={items.demo}
            className="hover:text-primary text-muted-foreground font-manrope flex items-center gap-1 text-sm hover:underline"
          >
            <span className="inline-block">Live Demo</span>
            <SquareArrowOutUpRight className="h-3 w-3" />
          </Link>
        </div>
      </div>

      <Slider images={items.images} />
    </div>
  );
}
