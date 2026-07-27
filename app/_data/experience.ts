export interface Experience {
  company: string;
  position: string;
  description: string;
  duration: string;
  employmentLength: string;
  details: ExperienceDetail[];
  website?: string;
}

export interface ExperienceDetail {
  label: string;
  value: string;
}

export const experiences: Experience[] = [
  {
    company: "Your Asian Team (YAT)",
    position: "Web Developer",
    description:
      "Worked on building and maintaining client-facing web interfaces using HTML5, CSS3, JavaScript, Bootstrap, and jQuery. I built the website from the ground up, translating requirements into a responsive, fully functional, and user-friendly web experience while creating a solid foundation for future improvements and updates. Focused on improving the overall user experience by developing responsive layouts, optimizing front-end performance, and refining existing features. I also contributed to debugging, code reviews, and improving code quality to make the application more maintainable and accessible.",
    duration: "Aug 2024 — Nov 2025",
    employmentLength: "1y & 3M",

    details: [
      {
        label: "Position",
        value: "Web Developer",
      },
      {
        label: "Location",
        value: "Philippines",
      },
      {
        label: "Industry",
        value: "Information Technology",
      },
    ],
    website: "https://yourasianteam.com/",
  },
  {
    company: "GoPlus Technology",
    position: "Mobile Application & Web Developer",
    description:
      "Developed and maintained features for native Android and web applications, focusing on creating reliable and user-friendly experiences across different platforms. Worked with RESTful APIs and external SDK integrations to support features such as user verification and data synchronization. Collaborated with UI/UX designers and backend developers to transform designs and requirements into functional, production-ready components.",
    duration: "Dec 2023 — Aug 2024",
    employmentLength: "9M",

    details: [
      {
        label: "Position",
        value: "Mobile Application & Web Developer",
      },
      {
        label: "Location",
        value: "Philippines",
      },
      {
        label: "Industry",
        value: "Information Technology",
      },
    ],
    website: "",
  },
];
