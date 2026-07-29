type SectionIntroProps = {
  title: string;
  description: string;
};

export default function SectionIntro({
  title,
  description,
}: SectionIntroProps) {
  return (
    <>
      <h1 className="inline-block border-b-4 border-double border-foreground font-manrope text-base font-bold uppercase">
        {title}
      </h1>
      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
        {description}
      </p>
    </>
  );
}
