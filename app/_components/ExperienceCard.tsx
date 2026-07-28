import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { Experience } from "../_data/experience";

type ExperienceCardProps = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="space-y-15">
      <h1 className="font-playfair text-5xl font-extrabold">
        {experience.company}
      </h1>

      <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
        {experience.description}
      </p>

      <div className="flex justify-between gap-10 text-sm sm:text-base">
        <div className="w-1/2 space-y-0">
          <p className="uppercase">{experience.duration}</p>
          <p className="text-muted-foreground text-sm uppercase">
            {experience.employmentLength}
          </p>
        </div>

        <div className="w-1/2 space-y-3">
          {experience?.details.map((detail) => (
            <div key={detail.label} className="flex justify-between gap-2">
              <span className="text-muted-foreground">{detail.label}</span>
              <span className="text-right font-medium">{detail.value}</span>
            </div>
          ))}

          {experience.website && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Website</span>

              <Link
                target="_blank"
                href={experience.website}
                className="hover:text-primary flex items-center gap-1 hover:underline"
              >
                <span className="inline-block">Visit website</span>
                <SquareArrowOutUpRight className="h-3 w-3" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
