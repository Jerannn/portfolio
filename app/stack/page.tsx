import PageLink from "../_components/PageLink";
import SectionIntro from "../_components/SectionIntro";
import SkillGroup from "../_components/SkillGroup";
import { stacks } from "../_data/stack";

export default function StackPage() {
  return (
    <div className="py-6 space-y-10">
      <SectionIntro
        title="Stack"
        description="A collection of technologies I use across the frontend, backend, and infrastructure to build reliable web applications. "
      />

      <SkillGroup title="Languages" items={stacks.languages} />

      <SkillGroup title="Frontend" items={stacks.frontend} />

      <SkillGroup title="Backend" items={stacks.backend} />

      <SkillGroup title="Mobile" items={stacks.mobile} />

      <SkillGroup title="Devops & Cloud" items={stacks.devopsAndCloud} />

      <SkillGroup title="Tools" items={stacks.tools} />

      <SkillGroup title="Learning" items={stacks.learning} />

      <PageLink href="/experience" label="Experience" />
    </div>
  );
}
