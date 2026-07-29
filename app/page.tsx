import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-[calc(100vh-2.5rem)] flex-col items-center justify-center py-8 text-center">
      {/* Background ambient glow effect */}
      <div className="pointer-events-none absolute -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="mx-auto flex max-w-2xl flex-col items-center space-y-6">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-xs backdrop-blur-md transition-colors hover:border-primary/40">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span>Available for new opportunities</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-manrope text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Hi, I&apos;m{" "}
          <span className="font-playfair font-normal text-primary italic">
            Jeran
          </span>
          .
          <br />
          <span className="text-3xl font-bold tracking-tight text-foreground/90 sm:text-4xl md:text-5xl">
            Crafting modern web experiences.
          </span>
        </h1>

        {/* Minimalist Subtitle */}
        <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
          Fullstack developer passionate about building modern web applications
          using the latest technologies and turning ideas into intuitive,
          reliable digital experiences.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/me"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-xs transition-all hover:bg-primary/90 hover:shadow-md"
          >
            <span>Learn more</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          {/* <Link
            href="/me"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-card/50 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-muted hover:text-foreground"
          >
            Learn more about me
          </Link> */}
        </div>
      </div>
    </div>
  );
}
