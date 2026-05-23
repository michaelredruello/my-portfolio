export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "dotTxT",
    description: "Real-time chatgroup application inspired by CyberPunk 2077 built with React, Firebase, and Typescript.",
    tags: ["React", "Typescript", "Firebase", "Vite"],
    link: "https://dottxt-5993e.firebaseapp.com",
    github: "https://github.com/michaelredruello/chat-app",
  },
  {
    title: "Best Deals",
    description: "Pc Games sales aggregator built with React and Typescript, utilizing the CheapShark API for real-time game deals.",
    tags: ["React", "Typescript", "Vite", "API"],
    link: "https://best-deals-orcin.vercel.app/",
    github: "https://github.com/michaelredruello/capstone-project",
  },
];