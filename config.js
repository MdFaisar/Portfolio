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
    email: "amohammedfaisar@gmail.com",
    phone: "+91 8015375860",
  },

  // ── SOCIAL LINKS ───────────────────────────────────────────
  socials: [
    { label: "GitHub", icon: "github", url: "https://github.com/MdFaisar" },
    { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/mohammedfaisar" },
    { label: "Social", icon: "twitter", url: "https://x.com/Faisar05" },
    { label: "LeetCode", icon: "code", url: "https://leetcode.com/u/h9Swl9Damz/" },
  ],

  // ── ABOUT ME ───────────────────────────────────────────────
  about: {
    description: `I'm a Pre-final year B.Tech IT student, with deep passion in AI, Cybersecurity, and upcoming technologies. Skilled in crafting
full-stack applications with Java, Python, Flask, and contemporary web technologies. Experienced in incorporating
GenAI, Agentic AI, and Blockchain into practical solutions. Looking for opportunities to apply my technical skills to jobs
and projects to innovate and create impact.`,

    education: [
      {
        degree: "Pursuing – Bachelor's Degree",
        institution: "Sri Manakula Vinayagar Engineering College",
        field: "B.Tech – Information Technology",
        year: "2023–2027",
        gpa: "8.5 CGPA",
      },
      {
        degree: "Higher Secondary",
        institution: "Amalorpavam Higher Secondary School",
        field: "Bio-Maths",
        year: "2022–2023",
        gpa: "89.83%",
      },
    ],

    stats: [
      { label: "Projects Completed", value: "18+" },
      { label: "GitHub Commits", value: "900+" },
      { label: "Certifications", value: "6" },
      { label: "Hackathons", value: "4" },
    ],

    languages: [
      { name: "English", level: "Fluent" },
      { name: "French", level: "Intermediate" },
      { name: "Tamil", level: "Native" },
      { name: "Hindi", level: "Conversational" },
    ],
    aboutPhoto: "assets/about.jpg",
  },

  // ── SKILLS ─────────────────────────────────────────────────
  skills: {
    programmingLanguages: [
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
      { name: "C/C++", level: 65 },
    ],
    frontend: [
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 80 },
    ],
    backend: [
      { name: "Node.js", level: 78 },
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
      title: "PixelMnd",
      description: "PixelMind is an advanced text-to-image encryption system with chat-bot designed to transform sensitive text files into innocent-looking images and secure PDF documents with the help of AI and Custom algorithm. .",
      image: "assets/p1.jpg",
      tags: ["Python", "Flask", "MongoDB", "Llama AI", "HTML", "CSS"],
      liveUrl: "https://pixelmind.pythonanywhere.com/",
      githubUrl: "https://github.com/MdFaisar/PIXELMIND-IMAGE-TYPE-TEXT-ENCRYPTION-SYSTEM",
      featured: true

    },
    {
      title: "Career AI",
      description: "A comprehensive web application designed to assist individuals in discovering their ideal career paths by leveraging artificial intelligence and user-specific data.",
      image: "assets/p2.jpg",
      tags: ["Python", "Flask", "Llama AI", "HTML", "CSS"],
      liveUrl: "https://faisar.pythonanywhere.com/login",
      githubUrl: "https://github.com/MdFaisar/Career-recommendation-using-AI-and-Chatbot/",
      featured: true
    },
    {
      title: "To-DO List",
      description: "A full-stack To-Do List application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to efficiently manage their tasks with full CRUD operations",
      image: "assets/p3.jpg",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
      liveUrl: "https://mohammedfaisar-portfolio.netlify.app/",
      githubUrl: "https://github.com/MdFaisar/ToDo-List-MERN-Stack-Project",
      featured: true
    },
    {
      title: "Trip-AI",
      description: "It's a AI based trip planning assistant. Which gives a clear layout of the travel planning (day-to-day)",
      image: "assets/p4.jpg",
      tags: ["Python", "Streamlit", "Llama AI", "Groq"],
      liveUrl: "https://tripai.pythonanywhere.com/",
      githubUrl: "https://github.com/MdFaisar/trip_ai",
      featured: true
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
      title: "AWS Certified Cloud Foundations",
      description: "Professional certification demonstrating expertise in designing distributed systems and applications on AWS platform with best practices for security, reliability, and cost optimization.",
      image: "assets/aws.jpg",
      issuer: "Amazon Web Services",
      technologies: ["AWS", "Cloud Computing", "System Architecture", "Security"],
      credentialLink: "https://www.credly.com/badges/837e2e85-f8fb-4701-8daf-f60c5314147d/print",
      issueDate: "2024",
    },
    {
      title: "Cisco Certified Network Associate (CCNA)",
      description: "Industry-recognized certification validating foundational knowledge in networking, including IP connectivity, security fundamentals, automation, and Cisco network infrastructure.",
      image: "assets/cisco.jpg",
      issuer: "Cisco",
      technologies: ["Networking", "Routing & Switching", "IP Services", "Network Security"],
      credentialLink: "https://www.credly.com/badges/c236f597-b50c-4d89-8ae1-27c695cb49b6",
      issueDate: "2025",
    },
    {
      title: "Infosys Certified - Frontend Developer",
      description: "Certification validating skills in building attractive UI with scalable and reliable templates.",
      image: "assets/infosys.jpg",
      issuer: "Infosys Springboard",
      technologies: ["HTML", "CSS", "JavaScript"],
      credentialLink: "https://drive.google.com/file/d/13GyQav8RK_yaOTPPKAMGipvgwTifuJf1/view?usp=drivesdk",
      issueDate: "2025",
    },
    {
      title: "MongoDB Certified Developer",
      description: "Certification demonstrating proficiency in MongoDB database access, development, and the use of NoSQL in modern applications.",
      image: "assets/mongodb.jpg",
      issuer: "MongoDB Inc.",
      technologies: ["MongoDB", "NoSQL", "Database Design", "Node.js"],
      credentialLink: "https://drive.google.com/file/d/1awcIDuY5WUM_8sZ7QwRMd3KCo9bA1L10/view?usp=drivesdk",
      issueDate: "2024",
    },
    {
      title: "Python For Data Science",
      description: "Professional certificate program in python skills and data science application through python.",
      image: "assets/nptel.jpg",
      issuer: "NPTEL",
      technologies: ["Python", "Linear Regression", "Matplotlib", "NumPy & Pandas"],
      credentialLink: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS68S14460038002702746",
      issueDate: "2024",
    },
    {
      title: "AICTEE - AI/ML",
      description: "Professional certification validating skills in accessing and demonstrating Artificial Intelligence and Machine Learning practices.",
      image: "assets/aictee.jpg",
      issuer: "AICTEE",
      technologies: ["Docker", "Containers", "DevOps", "Kubernetes"],
      credentialLink: "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=559bffdc11a063b1d0cbea8e644e883b",
      issueDate: "2025",
    },
  ],

  // ── FOOTER ─────────────────────────────────────────────────
  footer: {
    note: "Designed & built by Mohammed Faisar A",
    year: "2026",
  },
};
