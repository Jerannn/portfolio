export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "polypous",
    description: `A modern full-stack client and invoice management dashboard designed for freelancers and agencies. Simplifies financial workflows with real-time payment tracking, custom invoice lifecycle management, client directory records, and interactive revenue analytics.`,
    images: [
      "/projects/polypous/homepage.png",
      "/projects/polypous/dashboard.png",
      "/projects/polypous/client.png",
      "/projects/polypous/invoice.png",
      "/projects/polypous/payment.png",
      "/projects/polypous/analytics.png",
    ],
    technologies: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "TanStack Router",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "Zod",
      "React Hook Form",
      "Axios",
    ],
    github: "https://github.com/Jerannn/polypous-frontend",
    demo: "https://polypous.vercel.app/",
  },
  {
    id: 2,
    title: "Recall",
    description: `An AI-powered second brain and knowledge retention platform designed to capture, organize, and retain digital content. Features intelligent web scraping and markdown extraction, AI-driven content summaries, semantic vector search via pgvector, and an adaptive spaced repetition study system powered by the SM-2 algorithm.`,
    images: [
      "/projects/recall/homepage.png",
      "/projects/recall/dashboard.png",
      "/projects/recall/library.png",
      "/projects/recall/collection.png",
      "/projects/recall/tags.png",
      "/projects/recall/search.png",
    ],
    technologies: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "pgvector",
      "Prisma ORM",
      "Better Auth",
      "Vercel AI SDK",
      "OpenAI Embeddings",
      "Shadcn UI",
      "Zod",
    ],
    github: "https://github.com/Jerannn/recall",
    demo: "https://recallsecondbrain.vercel.app/",
  },
];
