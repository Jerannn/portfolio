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
      <h1 className="text-base font-manrope font-bold">{title}</h1>
      <p className="text-sm sm:text-base leading-relaxed mt-10">
        {description}
      </p>
    </>
  );
}
