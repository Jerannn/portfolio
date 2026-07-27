import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type CardProps = {
  items: {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    demo: string;
  };
};

export default function Card({ items }: CardProps) {
  return (
    <div className="space-y-10 bg-white rounded-md overflow-hidden">
      <div className="space-y-3 p-7 pb-0">
        <h2 className="text-base font-manrope font-bold lowercase">
          {items.title}
        </h2>

        <p className="text-sm sm:text-[15px] leading-relaxed text-muted-foreground">
          {items.description}
        </p>

        <div className="flex items-center gap-3">
          <Link
            target="_blank"
            href={items.github}
            className="flex items-center gap-1 text-sm hover:text-primary hover:underline text-muted-foreground"
          >
            <span className="inline-block">Github</span>
            <SquareArrowOutUpRight className="w-3 h-3" />
          </Link>
          <Link
            target="_blank"
            href={items.demo}
            className="flex items-center gap-1 text-sm hover:text-primary hover:underline text-muted-foreground"
          >
            <span className="inline-block">Live demo</span>
            <SquareArrowOutUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      <div className="relative aspect-video">
        <Image
          src={items.image}
          alt="Jeran"
          fill
          sizes="100%"
          className="object-cover"
        />
      </div>
    </div>
  );
}
