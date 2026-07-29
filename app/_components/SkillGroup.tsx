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
            className="inline-block rounded border border-border px-3 py-1.5 font-manrope text-sm text-muted-foreground"
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}
