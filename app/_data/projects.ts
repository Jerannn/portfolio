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
    demo: "https://polypous-frontend.vercel.app/",
  },
];
