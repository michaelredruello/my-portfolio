export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "taskmaster",
    description: "Collaborative task manager with real-time team workspaces and drag-and-drop boards.",
    tags: ["react", "typescript", "firebase"],
    link: "https://taskmaster.app",
    github: "https://github.com/you/taskmaster",
  },
  {
    title: "analytics-dash",
    description: "Lightweight e-commerce analytics dashboard with CSV export and revenue forecasting.",
    tags: ["nextjs", "supabase", "tailwind"],
    link: "https://analytics-demo.vercel.app",
    github: "https://github.com/you/analytics-dash",
  },
  {
    title: "weather-cli",
    description: "Terminal weather app with geolocation and 7-day forecasts via OpenWeatherMap.",
    tags: ["go", "cli", "api"],
    link: "https://github.com/you/weather-cli",
    github: "https://github.com/you/weather-cli",
  },
];