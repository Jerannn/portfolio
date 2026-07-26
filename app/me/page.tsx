import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PageLink from "../_components/PageLink";

export default function MePage() {
  return (
    <div className="py-6 space-y-10">
      <div className="space-y-2">
        <Image
          src="/me.jpg"
          alt="Jeran"
          width={150}
          height={150}
          className="mx-auto grayscale-75 rounded-md"
        />

        <h1 className="text-xl font-manrope font-medium text-center">
          Jeran Peñaredonda Deduro
        </h1>
      </div>

      <div className="space-y-2">
        <p className="text-5xl font-extrabold font-manrope text-center">
          Full Stack Web Developer
        </p>

        <div className="max-w-50 mx-auto mb-0 grid grid-cols-2 grid-rows-2">
          <div className="flex flex-col items-center border-dashed border-r border-b p-2 w-full">
            <p className="font-bold text-sm font-manrope">3 yrs</p>
            <p className="font-extralight text-xs">Experience</p>
          </div>

          <div className="flex flex-col items-center border-dashed border-l border-b p-2 w-full">
            <p className="font-bold text-sm font-manrope">7</p>
            <p className="font-extralight text-xs">Projects</p>
          </div>

          <div className="flex flex-col items-center  col-span-2 border-dashed border-t p-2 ">
            <div className="flex justify-center items-center gap-3">
              <Link
                target="_blank"
                href="https://github.com/jeranpena"
                className="flex items-center gap-1 text-sm hover:text-primary hover:underline"
              >
                <span className="inline-block">Github</span>
                <SquareArrowOutUpRight className="w-3 h-3" />
              </Link>
              <Link
                target="_blank"
                href="https://github.com/jeranpena"
                className="flex items-center gap-1 text-sm hover:text-primary hover:underline"
              >
                <span className="inline-block">LinkedIn</span>
                <SquareArrowOutUpRight className="w-3 h-3" />
              </Link>
            </div>
            <p className="font-extralight text-xs">Links</p>
          </div>
        </div>
      </div>

      <div className="text-sm sm:text-base space-y-4 max-w-125 mx-auto leading-relaxed">
        <p>
          Hi there 👋<b>₍^. .^₎⟆</b>
        </p>
        <p>
          I build modern web applications using modern technologies. I enjoy
          turning ideas into intuitive, reliable digital experiences.
        </p>
        <p>
          I&apos;m a self-taught full-stack developer. I originally started out
          building mobile apps, which eventually led me to web development. I
          really enjoy taking a complex problem, figuring out how it works under
          the hood, and building something useful for people to use.
        </p>
        <p>
          Teaching yourself to code is tough, there are plenty of days filled
          with imposter syndrome, bugs that don&apos;t make sense, and burnout.
          But staying curious and showing up consistently is what keeps me
          going, and I always try to share what I learn along the way.
        </p>
      </div>

      <PageLink href="/projects" label="projects" />
    </div>
  );
}
