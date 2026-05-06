// ─────────────────────────────────────────
// data/content.js
// Single source of truth for all site content.
// Update this file to change copy, experience, projects, or skills.
// ─────────────────────────────────────────

// ── HERO ──────────────────────────────────
export const hero = {
  badge: "Available for Work",
  headline: ["Building systems", "that ", "scale", " and endure."],
  description:
    "I build reliable backend systems in Java and Spring Boot: from event-driven pipelines to REST APIs, shipped with test coverage and production observability.",
  skills: [
    "Java ",
    "Spring Boot",
    "Spring Security",
    "PostgreSQL",
    "Apache Kafka",
    "Microservices",
    "REST APIs",
  ],
};

// ── EXPERIENCE (homepage summary) ─────────
export const experienceSummary = [
  {
    current: true,
    role: "Senior Java Developer",
    co: "Options Clearing Corporation · Industry Services, Data Platform",
    date: "Mar 2025 to Present",
  },
  {
    current: false,
    role: "Associate Java Developer",
    co: "Options Clearing Corporation",
    date: "May 2023 to Mar 2025",
  },
  {
    current: false,
    role: "Java Developer (Contractor via FDM Group)",
    co: "Options Clearing Corporation",
    date: "Jan 2022 to May 2023",
  },
];

// ── EXPERIENCE (full timeline) ────────────
export const experienceFull = [
  {
    current: true,
    date: "Mar 2025 to Present",
    role: "Senior Java Developer",
    company: "Options Clearing Corporation · Industry Services, Data Platform",
    type: "Permanent · Promoted",
    desc: "Leading development of the event-driven data integration platform serving financial industry participants. Responsible for microservice architecture decisions, pipeline design, and production reliability across a system handling 30+ daily file submissions.",
    highlights: [
      "Architected Kafka-based event pipelines for high-throughput file ingestion across multiple industry data formats",
      "Built and maintained Spring Batch workflows for reliable, restartable batch processing of ~15–20K records/day",
      "Integrated Apache Iceberg on AWS S3 for data lakehouse storage with schema evolution and time-travel capabilities",
      "Drove production observability through Splunk dashboards, alerting rules, and log-based monitoring",
      "Mentored junior developers and contributed to architectural reviews and technical planning",
    ],
    tags: ["Java 17+", "Spring Boot", "Kafka", "Spring Batch", "Apache Iceberg", "AWS S3", "Splunk", "Microservices"],
  },
  {
    current: false,
    date: "May 2023 to Mar 2025",
    role: "Associate Java Developer",
    company: "Options Clearing Corporation · Industry Services, Data Platform",
    type: "Permanent · Converted from Contractor",
    desc: "Converted to permanent employee after consistent delivery as a contractor. Expanded scope of ownership to include schema design, pipeline resilience, and CI/CD improvements.",
    highlights: [
      "Built and maintained file ingestion microservices handling industry participant data submissions",
      "Contributed to database schema design decisions for data pipeline storage and retrieval patterns",
      "Improved pipeline fault-tolerance through retry mechanisms, dead-letter handling, and monitoring improvements",
      "Supported CI/CD pipeline improvements, reducing deployment friction for the team",
      "Took on increased ownership of production support, debugging, and incident response",
    ],
    tags: ["Java", "Spring Boot", "Microservices", "SQL", "CI/CD", "REST APIs"],
  },
  {
    current: false,
    date: "Jan 2022 to May 2023",
    role: "Java Developer",
    company: "Options Clearing Corporation (via FDM Group)",
    type: "Contractor · FDM Group Placement",
    desc: "Placed at OCC through FDM Group's graduate training and deployment programme. Joined the Industry Services team from day one, contributing to production Java microservices.",
    highlights: [
      "Developed production Java microservices for financial data processing from the start of placement",
      "Gained hands-on experience with enterprise Spring Boot patterns and financial data formats",
      "Participated in code reviews, sprint planning, and production deployments",
      "Built foundation for permanent conversion through consistent delivery and technical growth",
    ],
    tags: ["Java", "Spring Boot", "Financial Services", "Enterprise Patterns"],
  },
];

// ── SKILLS (experience page) ──────────────
export const skillGroups = [
  {
    title: "Languages & Frameworks",
    tags: ["Java 17+", "Spring Boot", "Spring Batch", "Spring Security", "REST APIs"],
  },
  {
    title: "Data & Messaging",
    tags: ["Apache Kafka", "Apache Iceberg", "SQL", "AWS S3", "Event-driven Architecture"],
  },
  {
    title: "Observability & Ops",
    tags: ["Splunk", "CI/CD", "Production Monitoring", "Incident Response"],
  },
  {
    title: "Testing & Quality",
    tags: ["JUnit 5", "TestContainers", "Integration Testing", "OpenAPI"],
  },
];

// ── PROJECTS ──────────────────────────────
export const projects = [
  {
    badge: "★ Featured Project",
    title: "Dallas Muslim Hub",
    subtitle: "A full-stack community resource platform for the DFW Muslim community.",
    githubUrl: "https://github.com/MohammedSummers",
    liveUrl: "#",
    description: [
      "Dallas Muslim Hub is a community-driven web application I built to solve a real problem: there's no single, reliable place to find Muslim-friendly businesses, halal restaurants, mosques, Islamic schools, and community events in the Dallas-Fort Worth area.",
      "The project is also a deliberate exercise in building things properly: time pressure in professional environments often forces compromises. This is my space to do it right from the start.",
    ],
    sections: [
      {
        heading: "Architecture & backend",
        items: [
          "Spring Boot REST API with layered architecture (controller → service → repository)",
          "Spring Security with JWT authentication and role-based access control",
          "PostgreSQL with Flyway migrations for schema version control",
          "OpenAPI / Swagger documentation for all endpoints",
          "Structured logging and application-level observability",
        ],
      },
      {
        heading: "Testing strategy",
        items: [
          "JUnit 5 unit tests for all service-layer business logic",
          "TestContainers for integration tests with real PostgreSQL instances",
          "MockMvc for controller-layer tests",
          "Target: 80%+ test coverage across the backend",
        ],
      },
      {
        heading: "Frontend & DevOps",
        items: [
          "React frontend with component-based architecture",
          "GitHub Actions CI/CD pipeline running tests on every push",
          "Docker for local development consistency",
        ],
      },
    ],
    meta: [
      { label: "Status", type: "status", value: "In development" },
      { label: "Type", type: "text", value: "Full-stack web application" },
      { label: "Backend", type: "tags", value: ["Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Flyway"] },
      { label: "Testing", type: "tags", value: ["JUnit 5", "TestContainers", "MockMvc"] },
      { label: "Frontend", type: "tags", value: ["React", "JavaScript"] },
      { label: "DevOps", type: "tags", value: ["GitHub Actions", "Docker", "OpenAPI"] },
    ],
    // Homepage summary card
    summary: {
      status: "In development",
      desc: "A community platform centralising halal restaurants, mosques, Islamic schools, and local resources across the DFW area. Built with production-quality standards from day one.",
      stack: ["Spring Boot", "React", "Spring Security", "JWT", "PostgreSQL", "JUnit 5", "TestContainers", "Docker"],
    },
  },
  {
    badge: "Personal Project",
    title: "Project Placeholder",
    subtitle: "A placeholder project to test the layout.",
    githubUrl: "#",
    liveUrl: "#",
    description: [
      "This is a placeholder project description. Replace this with actual project details when ready.",
    ],
    sections: [
      {
        heading: "Features",
        items: [
          "Feature placeholder 1",
          "Feature placeholder 2",
          "Feature placeholder 3",
        ],
      },
    ],
    meta: [
      { label: "Status", type: "status", value: "Planned" },
      { label: "Type", type: "text", value: "TBD" },
      { label: "Stack", type: "tags", value: ["TBD"] },
    ],
    // Homepage summary card
    summary: {
      status: "Planned",
      desc: "Placeholder project description. Update this with actual project details when ready. Update this with actual project details when ready.",
      stack: ["TBD", "Placeholder", "Stack"],
    },
  },
];

// ── ABOUT ─────────────────────────────────
export const about = {
  stats: [
    ["3+", "Years at OCC"],
    ["30+", "Daily file submissions"],
    ["20K", "Records/day"],
    ["1st", "Class Honours"],
  ],
  coreStack: [
    "Java 17+ / Spring Boot",
    "Apache Kafka",
    "Spring Batch",
    "Hibernate / Spring Data JPA",
    "PostgreSQL",
    "Splunk",
    "CI/CD (Jenkins, Harness)",
    "AWS S3",
  ],
  education: {
    degree: "BEng Aerospace Engineering",
    school: "Queen Mary University of London",
    result: "First Class Honours",
  },
  location: ["Dallas / Carrollton, TX", "Open to remote roles"],
};

// ── CONTACT ───────────────────────────────
export const contact = {
  channels: [
    { name: "Email", value: "contact@mohammedsummers.com", href: "mailto:contact@mohammedsummers.com" },
    { name: "LinkedIn", value: "linkedin.com/in/mohammedsummers", href: "https://www.linkedin.com/in/mohammedsummers/" },
    { name: "GitHub", value: "github.com/MohammedSummers", href: "https://github.com/MohammedSummers" },
  ],
};

// ── FOOTER SOCIALS ────────────────────────
export const socials = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/mohammedsummers/" },
  { label: "GitHub", url: "https://github.com/MohammedSummers" },
  { label: "YouTube", url: "https://www.youtube.com/@MohammedSummers" },
  { label: "X", url: "https://x.com/MohammdSummers" },
];