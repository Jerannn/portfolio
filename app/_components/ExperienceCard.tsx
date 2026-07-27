import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { Experience } from "../_data/experience";

type ExperienceCardProps = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="space-y-15">
      <h1 className="text-5xl font-playfair font-extrabold">
        {experience.company}
      </h1>

      <p className="text-sm sm:text-[15px] leading-relaxed text-muted-foreground">
        {experience.description}
      </p>

      <div className="flex justify-between gap-10 text-sm sm:text-[15px]">
        <div className="w-1/2 space-y-0">
          <p className="uppercase">{experience.duration}</p>
          <p className="text-muted-foreground uppercase text-sm">
            {experience.employmentLength}
          </p>
        </div>

        <div className="space-y-3 w-1/2">
          {experience?.details.map((detail) => (
            <div key={detail.label} className="flex justify-between">
              <span className="text-muted-foreground">{detail.label}</span>
              <span className="font-medium">{detail.value}</span>
            </div>
          ))}

          {experience.website && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Website</span>

              <Link
                target="_blank"
                href={experience.website}
                className="flex items-center gap-1 hover:text-primary hover:underline"
              >
                <span className="inline-block">Visit website</span>
                <SquareArrowOutUpRight className="w-3 h-3" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
