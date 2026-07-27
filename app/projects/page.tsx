import PageLink from "../_components/PageLink";
import SectionIntro from "../_components/SectionIntro";
import { projects } from "../_data/projects";
import Card from "../_components/Card";

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

      {projects.map((project) => (
        <Card key={project.id} items={project} />
      ))}

      <PageLink href="/stack" label="stack" />
    </div>
  );
}
