type SkillGroupProps = {
  title: string;
  items: Record<string, string>[];
};

export default function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-sm font-normal">{title}</h2>
      <div className="flex flex-wrap gap-3">
        {items?.map((item) => (
          <span
            key={item.name}
            className="border border-border rounded px-3 py-1.5 inline-block text-sm font-manrope"
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}
