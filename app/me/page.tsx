import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PageLink from "../_components/PageLink";
import { me } from "../_data/me";

export const metadata = {
  title: "Me / Jeran",
};

export default function MePage() {
  return (
    <div className="space-y-10 py-6">
      <div className="space-y-2">
        <div className="relative mx-auto h-40 w-40">
          <Image
            src={me.avatar}
            alt="Image of Jeran Peñaredonda Deduro"
            fill
            sizes="100%"
            className="rounded-md object-cover grayscale-20"
          />
        </div>

        <h1 className="text-center font-manrope text-xl font-medium">
          {me.name}
        </h1>
      </div>

      <div className="space-y-2">
        <p className="text-center font-manrope text-5xl font-extrabold">
          {me.title}
        </p>

        <div className="mx-auto mb-0 grid max-w-50 grid-cols-2 grid-rows-2">
          <div className="flex w-full flex-col items-center border-r border-b border-dashed p-2">
            <p className="font-manrope text-sm font-bold">{me.experience}</p>
            <p className="text-xs font-extralight">Experience</p>
          </div>

          <div className="flex w-full flex-col items-center border-b border-l border-dashed p-2">
            <p className="font-manrope text-sm font-bold">{me.projects}</p>
            <p className="text-xs font-extralight">Projects</p>
          </div>

          <div className="col-span-2 flex flex-col items-center border-t border-dashed p-2">
            <div className="flex items-center justify-center gap-3">
              {me.links.map((link) => (
                <Link
                  key={link.label}
                  target="_blank"
                  href={link.href}
                  className="flex items-center gap-1 text-sm hover:text-primary hover:underline"
                >
                  <span className="inline-block">{link.label}</span>
                  <SquareArrowOutUpRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
            <p className="text-xs font-extralight">Links</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-125 space-y-4 text-sm leading-relaxed sm:text-base">
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
