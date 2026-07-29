import SectionIntro from "../_components/SectionIntro";
import ExperienceCard from "../_components/ExperienceCard";
import { experiences } from "../_data/experience";
import PageLink from "../_components/PageLink";

export const metadata = {
  title: "Experience / Jeran",
};

export default function ExperiencePage() {
  return (
    <div className="space-y-10 py-6">
      <SectionIntro
        title="Experience"
        description="A summary of my professional journey as a developer, including the roles, projects, and technologies that have shaped my growth from mobile development to full-stack web development."
      />

      <div className="space-y-10">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
      </div>

      <PageLink href="/projects" label="projects" />
    </div>
  );
}
