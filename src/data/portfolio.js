// ---------------------------------------------------------------------------
// Centralized portfolio content.
// Every value here is drawn directly from Sai Siri Kudaravalli's resume.
// Edit this file to update the site — no other file should need to change
// for a content update.
// ---------------------------------------------------------------------------

export const personal = {
  name: "Sai Siri Kudaravalli",
  role: "ServiceNow Developer · Computer Science Student",
  location: "Guntur, Andhra Pradesh, India",
  phone: "+91 8328507912",
  email: "sirikudaravalli24@gmail.com",
  linkedin: "https://linkedin.com/in/saisirik",
  linkedinLabel: "linkedin.com/in/saisirik",
  github: "https://github.com/saisiri-dev",
  githubLabel: "github.com/saisiri-dev",
  // Resume is expected at public/resume.pdf. This uses Vite's BASE_URL so the
  // link resolves correctly whether the site is served from the domain root
  // or a GitHub Pages project sub-path.
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "ServiceNow Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Project", href: "#project" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Research", href: "#research" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  label: "ServiceNow Developer · Computer Science Student",
  heading: "Sai Siri Kudaravalli",
  description:
    "B.Tech Computer Science student and ServiceNow Certified System Administrator (CSA) and Certified Application Developer (CAD), building foundational knowledge through hands-on ServiceNow workflow automation projects. Practical exposure to Service Catalog, Flow Designer, Business Rules, Client Scripts, UI Policies, Notifications, Reports, and Dashboards, alongside an AWS Certified Cloud Practitioner credential. Looking to grow as an entry-level ServiceNow Developer building impactful enterprise applications.",
  primaryCta: { label: "View Project", href: "#project" },
  secondaryCtas: [
    { label: "View GitHub", href: personal.github },
    { label: "Download Resume", href: personal.resumeUrl },
    { label: "Contact Me", href: "#contact" },
  ],
};

export const about = {
  paragraphs: [
    "I'm a B.Tech Computer Science & Engineering student at KKR & KSR Institute of Technology and Sciences, currently building a foundation in enterprise application development with a focus on the ServiceNow platform.",
    "I hold ServiceNow Certified System Administrator (CSA) and Certified Application Developer (CAD) certifications, along with an AWS Certified Cloud Practitioner certification. My interest in enterprise applications and workflow automation has taken shape through a hands-on ServiceNow project, where I worked with Service Catalog, Flow Designer, Business Rules, Client Scripts, UI Policies, and Reports & Dashboards.",
    "Alongside my ServiceNow-focused learning, I gained practical exposure to modern web application development as a Full Stack Developer Intern, working with Git, GitHub, REST API integration, and Agile methodologies.",
    "I'm currently looking for entry-level opportunities as a ServiceNow Developer, where I can keep learning and contribute to building enterprise workflow solutions.",
  ],
};

export const skills = {
  servicenow: {
    title: "ServiceNow Fundamentals",
    highlight: true,
    items: [
      "Service Catalog",
      "Flow Designer",
      "Business Rules",
      "Client Scripts",
      "UI Policies",
      "Notifications",
      "Tables & Forms",
      "Users / Groups / Roles",
      "Reports & Dashboards",
      "Workflow Automation",
    ],
  },
  categories: [
    {
      title: "Programming Languages",
      items: ["Java", "JavaScript", "Python", "SQL"],
    },
    {
      title: "Web Technologies",
      items: ["HTML", "CSS"],
    },
    {
      title: "Cloud",
      items: ["AWS"],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "VS Code"],
    },
  ],
};

export const experience = {
  role: "Full Stack Developer Intern",
  company: "Blackbucks Group",
  location: "Guntur, Andhra Pradesh — Remote",
  period: "May 2025 – July 2025",
  points: [
    "Gained practical exposure to modern web application development and collaborative software development practices.",
    "Worked with Git and GitHub for version control; learned REST API integration, debugging, and Agile methodologies.",
    "Strengthened software development, problem-solving, and teamwork skills in a professional environment.",
  ],
};

export const featuredProject = {
  title: "Automated Network Request Management",
  category: "ServiceNow · Workflow Automation · Enterprise Application",
  description:
    "Developed a ServiceNow enterprise application to automate the end-to-end lifecycle of network service requests, including submission, approvals, fulfillment, and completion.",
  features: [
    "Configured a Network Request Service Catalog with Users, Groups, and Roles for requesters, approvers, and network support teams.",
    "Implemented Client Scripts and UI Policies for form validation.",
    "Automated approval workflows using Flow Designer.",
    "Configured email notifications.",
    "Implemented Business Rules for request processing and lifecycle management.",
    "Automated network fulfillment task creation and assignment.",
    "Built Reports and Dashboards to monitor request status, approvals, and operational performance.",
  ],
  tags: [
    "ServiceNow",
    "Service Catalog",
    "Flow Designer",
    "Business Rules",
    "Client Scripts",
    "UI Policies",
    "Notifications",
    "Reports & Dashboards",
    "Workflow Automation",
  ],
  // Placeholders — replace with the real repository and demo URLs once available.
  // Leave as an empty string to show a "coming soon" state instead of a link.
  githubUrl: "https://github.com/saisiri-dev/Automated-Network-Request-Management-ServiceNow",
  demoUrl: "https://drive.google.com/file/d/1VVsJyoLoKSiEaekiOLONLUVFowFNwYTp/view",
};

export const secondProject = {
  title: "CoolQuench — Self-Cooling Smart Water Bottle",
  category: "Academic Project · Product Design",
  points: [
    "Proposed an innovative design using evaporative cooling, phase-change materials, and UV sterilization.",
    "Authored a detailed feasibility and sustainability report.",
    "Presented at the DTI showcase highlighting eco-friendly design.",
  ],
  demoUrl:
    "https://docs.google.com/presentation/d/1sCEUAdRyCStt2mOD5UUfhJmXrA8npfSR/edit?usp=drive_link&ouid=101268218236962558694&rtpof=true&sd=true",
};

export const education = [
  {
    school: "KKR & KSR Institute of Technology and Sciences",
    credential: "B.Tech — Computer Science & Engineering",
    period: "Aug 2023 – Jun 2027",
    detail: "CGPA: 8.43 / 10",
  },
  {
    school: "Bhashyam Junior College",
    credential: "Intermediate (MPC)",
    period: "Aug 2021 – May 2023",
    detail: "Percentage: 92%",
  },
  {
    school: "Dr. K.L.P Public School, CBSE",
    credential: "Class X",
    period: "Jun 2012 – May 2021",
    detail: "Percentage: 92%",
  },
];

export const certifications = [
  {
    name: "ServiceNow Certified System Administrator (CSA)",
    highlight: true,
  },
  {
    name: "ServiceNow Certified Application Developer (CAD)",
    highlight: true,
  },
  {
    name: "AWS Certified Cloud Practitioner",
    highlight: false,
  },
];

export const research = {
  title:
    "Advancements in Quantum Computing and Security: Hybrid Architectures, Optimization, and Intelligent Systems",
  authorship: "First Author",
  publication:
    "International Journal of Progressive Research in Engineering Management and Science (IJPREMS)",
  doi: "https://doi.org/10.58257/IJPREMS54213",  
  summary:
    "Researched hybrid quantum computing architectures, quantum security, cloud computing, and intelligent systems; explored applications in healthcare, finance, cybersecurity, and cloud computing.",
};

export const achievements = [
  {
    title: "3rd Place — Guntur Centralized Hackathon, Hackmelaa 2026",
    detail: "Among the Top 8 finalist teams.",
  },
  {
    title: "College Coding Clubs & Technical Events",
    detail:
      "Active participant in college coding clubs and technical events, engaging in technical learning and project activities.",
  },
  {
    title: "Cultural Event Volunteering",
    detail:
      "Volunteered in cultural events, supporting event management and student engagement.",
  },
];

export const contact = {
  heading: "Let's connect",
  message:
    "I'm looking for entry-level ServiceNow Developer opportunities where I can build on my CSA and CAD certifications and keep growing as a developer. If you have a role, project, or conversation in mind, I'd love to hear from you.",
};
