import { type ProjectCardProps } from "../components/ProjectCard.tsx";

export const projects : ProjectCardProps[] = [
  {
    app: "Metal Metrics",
    description: "A real-time precious metals dashboard displaying live spot prices, market data, and financial news for Gold, Silver, Palladium, and Platinum.",
    tags: ["TypeScript", "React", "Tailwind", "Vite", "GoldAPI.io (live prices)", "NewsAPI.org (financial news)"],
    url: "https://metal-metrics.vercel.app",
    urlLabel: "metal-metrics.vercel.app",
    featured: true,
  },
  {
    app: "Quiz Forge",
    description: "A trivia quiz application built with React, powered by the Open Trivia Database (OpenTDB) API.",
    tags: ["JavaScript", "React", "CSS", "Vite", "(OpenTDB) API"],
    url: "https://quiz-forge-delta.vercel.app",
    urlLabel: "quiz-forge-delta.vercel.app",
    featured: true,
  },
  {
    app: "FileOrganizerPro – Intelligent File Automation",
    description: "Desktop app that automatically organizes files into categories (Images, Documents, Audio, Video, Code, etc.) and date-based folders. It features real-time file monitoring, preview mode, undo functionality, progress logs duplicate protection, and deep folder scanning, providing a fast, hands-free, and safe file organization experience.",
    tags: ["Python", "Tkinter"],
    url: "https://brightlabs.gumroad.com/l/FileOrganizerPro",
    urlLabel: "Gumroad",
    featured: true,
  },
  {
    app: "FileOrganizerBasic – File Automation",
    description: "Desktop app that automatically organizes files into categories (Images, Documents, Audio, Video, Code, etc.) and date-based folders. It features undo functionality, progress logs, providing a fast, hands-free, and safe file organization experience.",
    tags: ["Python", "Tkinter"],
    url: "https://brightlabs.gumroad.com/l/FileOrganizer",
    urlLabel: "Gumroad",
  },
  {
    app: "NumRace (Android App)",
    description: "NumRace is a simple 2-player Android game built in Kotlin. Players take turns entering numbers until one reaches a randomly chosen target value between 40 and 65.",
    tags: ["Android", "Kotlin"],
    url: "https://github.com/WilburStanley/android-kotlin-numrace",
    urlLabel: "Visit Github",
  },
  {
    app: "Student Database Management",
    description: "Java Swing desktop application with secure hashed authentication and MySQL integration for reliable data management. The system supports live search, interactive dashboards, inline editing, auto-generated student and admin IDs, school emails, and audit trail logging. The database is type-safe, modular, and configurable, with constraints on age, year level, and unique emails. Despite Java Swing’s UI limitations, the interface has been extensively modified with modern designs, reusable components, and polished visual elements for a professional look.",
    tags: ["Java", "Swing", "MySQL"],
    url: "https://github.com/WilburStanley/windows-app-java-student-record-management-system",
    urlLabel: "Visit Github",
    featured: true,
  },
  {
    app: "Chill Math Game",
    description: "Android app with endless mode math challenges, featuring addition, subtraction, multiplication, and division. It provides instant feedback, a custom number pad, smooth transitions, and auto-regenerating problems for continuous learning. Built with Kotlin and native Android UI components, it combines interactive gameplay with a clean, modern interface.",
    tags: ["Android", "Kotlin"],
    url: "https://github.com/WilburStanley/android-kotlin-chillmath",
    urlLabel: "Visit Github",
  },
]

