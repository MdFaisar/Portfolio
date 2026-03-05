// ============================================================
//  PORTFOLIO CONFIGURATION FILE
//  Edit this file to update all portfolio content
// ============================================================

const CONFIG = {

  // ── PERSONAL INFO ──────────────────────────────────────────
  name: "Mohammed Faisar A",
  tagline: "Aspiring AI/ML and Software Developer",
  shortBio: "Passionate CS student turning ideas into elegant code. I love building things that live on the internet — from sleek web apps to smart backend systems.",
  photo: "assets/profile.jpg", // Replace with your photo path or a URL
  resumeLink: "#", // Link to your resume PDF

  // ── CONTACT ────────────────────────────────────────────────
  contact: {
    email: "alex.rivera@email.com",
    phone: "+1 (555) 234-5678",
  },

  // ── SOCIAL LINKS ───────────────────────────────────────────
  socials: [
    { label: "GitHub",    icon: "github",   url: "https://github.com/alexrivera" },
    { label: "LinkedIn",  icon: "linkedin", url: "https://linkedin.com/in/alexrivera" },
    { label: "Twitter",   icon: "twitter",  url: "https://twitter.com/alexrivera" },
    { label: "LeetCode",  icon: "code",     url: "https://leetcode.com/alexrivera" },
  ],

  // ── ABOUT ME ───────────────────────────────────────────────
  about: {
    description: `I'm a final-year Computer Science student at State University with a deep passion for software development. 
    I thrive at the intersection of clean architecture and great user experience. 
    When I'm not coding, you'll find me contributing to open source, writing tech blogs, or exploring new frameworks. 
    My goal is to join a forward-thinking team where I can grow as a full-stack engineer and solve real-world problems.`,

    education: [
      {
        degree: "Pursuing – Bachelor's Degree",
        institution: "Sri Manakula Vinayagar Engineering College",
        field: "B.Tech – Information Technology",
        year: "2023–2027",
        gpa: "8.51 CGPA",
      },
      {
        degree: "Higher Secondary",
        institution: "Amalorpavam Higher Secondary School",
        field: "Bio-Maths",
        year: "2022–2023",
        gpa: "90%",
      },
    ],

    stats: [
      { label: "Projects Completed", value: "18+" },
      { label: "GitHub Commits",     value: "900+" },
      { label: "Certifications",     value: "6" },
      { label: "Hackathons",         value: "4" },
    ],

    languages: [
      { name: "English",  level: "Fluent" },
      { name: "Tamil",    level: "Native" },
      { name: "Hindi",    level: "Conversational" },
    ],
  },

  // ── SKILLS ─────────────────────────────────────────────────
  skills: {
    programmingLanguages: [
      { name: "Python",     level: 85 },
      { name: "Java",       level: 75 },
      { name: "C/C++",      level: 65 },
    ],
    frontend: [
      { name: "HTML5",      level: 92 },
      { name: "CSS3",       level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "React.js",   level: 80 },
    ],
    backend: [
      { name: "Node.js",    level: 78 },
      { name: "Express.js", level: 75 },
    ],
    databases: [
      "MongoDB",
      "SQL",
    ],
    other: [
      "Flask",
      "API Integration",
      "Llama AI",
      "Bootstrap",
    ],
    tools: [
      "Postman", "VS Code", "Git", "Firebase", "Figma", "Netlify",
    ],
  },

  // ── PROJECTS ───────────────────────────────────────────────
  projects: [
    {
      title: "DevCollab — Real-time Code Editor",
      description: "A collaborative, real-time code editor supporting 20+ languages, with video calling and whiteboard features. Built for remote pair programming.",
      tags: ["React", "Node.js", "Socket.io", "WebRTC"],
      image: "assets/project1.jpg",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "SmartBudget — Finance Tracker",
      description: "Personal finance web app with AI-powered expense categorization, budget forecasting, and visual analytics dashboard.",
      tags: ["Python", "Django", "Chart.js", "PostgreSQL"],
      image: "assets/project2.jpg",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "PathFinder — Algorithm Visualizer",
      description: "Interactive visualization tool for popular pathfinding and sorting algorithms with step-by-step animation controls.",
      tags: ["JavaScript", "HTML Canvas", "CSS"],
      image: "assets/project3.jpg",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "EcoTrack — Carbon Footprint App",
      description: "Mobile-first web app that tracks daily activities and calculates carbon emissions with personalized reduction tips.",
      tags: ["React", "Firebase", "REST API"],
      image: "",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "NewsAI — Summarizer",
      description: "Browser extension that uses OpenAI to summarize long news articles into 3-bullet TL;DR snippets on the fly.",
      tags: ["JavaScript", "OpenAI API", "Chrome Extension"],
      image: "",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "TaskFlow — Kanban Board",
      description: "Drag-and-drop project management tool with team workspaces, due-date reminders, and Slack integration.",
      tags: ["Vue.js", "Node.js", "MongoDB"],
      image: "",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ],

  // ── CERTIFICATIONS ─────────────────────────────────────────
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Jan 2024",
      credentialUrl: "#",
      logo: "aws",
    },
    {
      title: "Meta Front-End Developer",
      issuer: "Meta / Coursera",
      date: "Sep 2023",
      credentialUrl: "#",
      logo: "meta",
    },
    {
      title: "Google Data Analytics Certificate",
      issuer: "Google / Coursera",
      date: "Jun 2023",
      credentialUrl: "#",
      logo: "google",
    },
    {
      title: "JavaScript Algorithms & Data Structures",
      issuer: "freeCodeCamp",
      date: "Mar 2023",
      credentialUrl: "#",
      logo: "fcc",
    },
    {
      title: "Python for Everybody Specialization",
      issuer: "University of Michigan / Coursera",
      date: "Dec 2022",
      credentialUrl: "#",
      logo: "python",
    },
    {
      title: "Docker Essentials",
      issuer: "IBM / Cognitive Class",
      date: "Aug 2023",
      credentialUrl: "#",
      logo: "docker",
    },
  ],

  // ── FOOTER ─────────────────────────────────────────────────
  footer: {
    note: "Designed & built by Mohammed Faisar A",
    year: "2025",
  },
};