import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Undergrad @BITS Pilani",
    location: "Hyderabad, India",
    description:
      "• Majored in Electronics and Instrumentation with a minor in Computing and Intelligence",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
  {
    title: "Intern @Jio Platforms Ltd",
    location: "Remote",
    description:
      `• Worked on the development of a web app for audio transcription and translation
        • Used Speech to Text frameworks and NLP algorithms
      `,
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
] as const;

export const projectsData = [
  {
    title: "Online Supermarket",
    description:
      "An E-commerce website simulating a supermarket. Added various roles for better management of the inventory and orders.",
    tags: ["React", "Spring Boot", "MySQL"],
    githubUrl: 'https://github.com/shaurya5/online-supermarket',
    imageUrl: '/online-supermarket.png'
  },
  {
    title: "Expense Tracker",
    description:
      "A web app for tracking your spendings and savings. Implemented budgeting visualizations for effective money management.",
    tags: ["React", "NodeJS", "MongoDB"],
    githubUrl: 'https://github.com/shaurya5/expense-tracker',
    imageUrl: '/expense-tracker.png'
  },
  {
    title: "Treasure Hunt",
    description: 
      "A platform for hosting treasure hunts. Users can join and decode the problems and a leaderboard is maintained for the same.",
    tags: ["React", "Supabase", "Cloudinary"],
    githubUrl: 'https://github.com/shaurya5/treasure-hunt',
    imageUrl: '/treasure-hunt.png'
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
] as const;