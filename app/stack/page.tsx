import SectionIntro from "../_components/SectionIntro";
import SkillGroup from "../_components/SkillGroup";
import { stacks } from "../_data/stack";

export const metadata = {
  title: "Stack / Jeran",
};

export default function StackPage() {
  return (
    <div className="space-y-10 py-6">
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
    </div>
  );
}
