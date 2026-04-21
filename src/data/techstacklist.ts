export type TechStackProps = {
  category: string;
  stacklist: string[];
};

export const techstacklist: TechStackProps[] = [
  {
    category: "Languages",
    stacklist: ["Java", "Kotlin", "Python", "Dart", "C++", "C#"],
  },
  {
    category: "Web",
    stacklist: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Vite", "Node.js"],
  },
  {
    category: "Mobile",
    stacklist: ["Android", "Flutter", "React Native"],
  },
  {
    category: "Databases",
    stacklist: ["SQL", "SQLite", "MySQL"],
  },
  {
    category: "Developer Tools",
    stacklist: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "PyCharm", "CLion", "Android Studio", "Vercel", "Render"],
  },
];