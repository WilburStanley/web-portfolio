export type TechStackProps = {
  category: string;
  stacklist: string[];
};

export const techstacklist: TechStackProps[] = [
  {
    category: "Web Development",
    stacklist: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Vite", "Node.js"],
  },
  {
    category: "Native Android Development",
    stacklist: ["Java", "Kotlin", "Android SDK", "XML Layouts"],
  },
  {
    category: "Cross-Platform Mobile Development",
    stacklist: ["React Native", "NativeWind", "Flutter", "Dart"],
  },
  {
    category: "AI, Automation & Embedded",
    stacklist: ["Python", "C++"],
  },
  {
    category: "Databases & Backend Services",
    stacklist: ["SQL", "SQLite", "MySQL", "Firebase", "Render"],
  },
  {
    category: "Developer Tools",
    stacklist: [
      "Git", "GitHub", "VS Code",
      "Android Studio", "IntelliJ IDEA", "PyCharm", "CLion",
      "Expo", "Vercel",
    ],
  },
];