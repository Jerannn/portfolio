import PageLink from "../_components/PageLink";
import SectionIntro from "../_components/SectionIntro";
import { projects } from "../_data/projects";
import ProjectCard from "../_components/ProjectCard";

export const metadata = {
  title: "Projects / Jeran",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-10 py-6">
      <SectionIntro
        title="Projects"
        description="A collection of projects I've built while exploring modern web
        development, from user-focused interfaces to full-stack applications.
        Each project represents my journey of learning, problem-solving, and
        applying technologies to create practical solutions."
      />

      {projects.map((project) => (
        <ProjectCard key={project.id} items={project} />
      ))}

      <PageLink href="/stack" label="stack" />
    </div>
  );
}
