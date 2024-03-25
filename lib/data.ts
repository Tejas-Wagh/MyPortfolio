import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import InkSpire from "@/public/Ink.png";
import EventEase from "@/public/Evemt.png";

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
    title: "Diploma",
    location: "Amravati, Maharashtra",
    description:
      "I've attained my diploma in Computer Science from Government Polytechnic Amravati.",
    icon: React.createElement(LuGraduationCap),
    date: " 2016 - 2019",
  },
  {
    title: "Bachelor of Engineering",
    location: "Shegaon, Maharashtra",
    description:
      "I have acquired my Bachelor of Engineering in Computer Science and Engineering from SSGMCE, Shegaon.",
    icon: React.createElement(LuGraduationCap),
    date: " 2019 - 2022",
  },
  {
    title: "Analyst",
    location: "Deloitte USI",
    description:
      "I'm an Analyst in Deloitte USI. My stack includes React, TypeScript, Tailwind, Node JS, Prisma and MongoDB.",
    icon: React.createElement(CgWorkAlt),
    date: " 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "InkSpire",
    description:
      `InkSpire is your gateway to knowledge which let's you dive into the world of insightful articles, captivating stories, and expert advice.`,
    tags: ["React", "Redux","Hono (Cloudflare Workers)", "Postgres", "Tailwind", "Prisma"],
    imageUrl: InkSpire,
  },
  {
    title: "EventEase",
    description:
      "EventEase is a comprehensive, full-stack platform for managing global events.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Stripe", "Clerk", "MongoDB"],
    imageUrl: EventEase,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
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
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "JAVA",
  "TurboRepo",
  "Docker",
  "Python",
  "AWS",
  "Framer Motion",
] as const;
