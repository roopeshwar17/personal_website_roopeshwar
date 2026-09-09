import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Moon,
  Sun,
  Code2,
  Database,
  Cloud,
  Layers3,
  Terminal,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import "./styles.css";

const skills = {
  Languages: ["Java", "C++", "JavaScript", "TypeScript", "Python"],
  Backend: [
    "Spring Boot",
    "Spring MVC",
    "Spring Data JPA",
    "Spring Security",
    "REST APIs",
    "Microservices",
  ],
  "Messaging & Streaming": [
    "Apache Kafka",
    "Confluent",
    "Kafka Connect",
    "Avro",
    "Schema Registry",
    "GCP Pub/Sub",
  ],
  "Databases & Caches": [
    "PostgreSQL",
    "YugabyteDB",
    "MySQL",
    "ScyllaDB",
    "Cassandra",
    "Elasticsearch",
    "Redis",
    "Aerospike",
  ],
  "Cloud & DevOps": [
    "GCP",
    "AWS",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Git",
    "Maven",
  ],
  Core: [
    "System Design",
    "Distributed Systems",
    "DSA",
    "Design Patterns",
    "OOP",
    "Concurrency",
    "JUnit",
    "Mockito",
  ],
};

const highlights = [
  { value: "3+", label: "Years Experience" },
  { value: "4M+", label: "Transactions / Day" },
  { value: "200K+", label: "Users Served" },
  { value: "800+", label: "Coding Problems" },
];

const experience = [
  {
    company: "HDFC Bank",
    role: "Software Engineer",
    period: "Jul 2023 — Present",
    points: [
      "Designed and developed scalable RESTful microservices for the SmartNow customer onboarding platform serving 200K+ users.",
      "Developed a fault-tolerant financial transaction validation microservice for real-time IMPS, NEFT & RTGS transactions, handling 4M+ transactions/day.",
      "Optimized Spring Boot services using PostgreSQL query optimization, CTEs, GIN indexes, materialized views and Aerospike caching, reducing database read latency by 60%.",
      "Implemented secure authentication and session management with MFA, OAuth, biometrics and PIN, reducing login latency by 25%.",
      "Built a Kafka-based data ingestion pipeline handling 50K+ CRM service requests with concurrent batch processing and reliable retry-driven persistence.",
      "Led Kafka serialization migration from JSON to Avro with Confluent Schema Registry, reducing network I/O by 40% and improving throughput by 30%.",
      "Developed a ScyllaDB data access layer and optimized shard-key distribution to eliminate hot partitions.",
      "Designed an audit trail system using YugabyteDB, Hibernate, Liquibase, Google Cloud Tasks and Pub/Sub.",
    ],
  },
];

const achievements = [
  "Exceptional Contributor at HDFC BANK",
  "800+ coding problems solved",
  "Codeforces rating: 1533 (Specialist)",
  "CodeChef rating: 1912 ( 4 ★ )",
  "Google Kick Start 2022 — Rank 711",
  "JEE 2019 — AIR 940, 99.93 percentile",
  "AWS Cloud Practitioner Essentials training",
  "EAMCET 2019 — Rank 608",
];

function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="app">
      <nav className="nav">
        <button className="brand" onClick={() => scrollTo("home")}>
          RJ<span>.</span>
        </button>
        <div className="nav-links">
          {["about", "experience", "skills", "achievements"].map((x) => (
            <button key={x} onClick={() => scrollTo(x)}>
              {x}
            </button>
          ))}
        </div>
        <div className="nav-actions">
          <a
            href="https://github.com/roopeshwar17"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/roopeshwar-jonnakuti"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <button
            className="theme-btn"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">SOFTWARE ENGINEER · BENGALURU</p>
              <h1>
                Building systems that
                <br />
                <em>scale.</em>
              </h1>
              <p className="hero-copy">
                Software Engineer specializing in high-throughput distributed
                systems, backend engineering and event-driven architectures.
              </p>
              <div className="hero-buttons">
                <button
                  className="primary"
                  onClick={() => scrollTo("experience")}
                >
                  View experience <ArrowUpRight size={17} />
                </button>
                <a
                  className="secondary"
                  href="mailto:roopeshwar.jonnakuti3@gmail.com"
                >
                  Get in touch <Mail size={16} />
                </a>
              </div>
            </div>
            <div className="hero-card">
              <div className="terminal-top">
                <span />
                <span />
                <span />
              </div>
              <pre>{`$ whoami

Roopeshwar Jonnakuti
Software Engineer

> Java / Spring Boot
> Kafka / Distributed Systems
> PostgreSQL / NoSQL
> Cloud / Kubernetes

status: building 🚀`}</pre>
            </div>
          </div>
          <button className="scroll" onClick={() => scrollTo("about")}>
            <ChevronDown size={18} />
          </button>
        </section>

        <section className="stats">
          {highlights.map((h) => (
            <div className="stat" key={h.label}>
              <strong>{h.value}</strong>
              <span>{h.label}</span>
            </div>
          ))}
        </section>

        <section id="about" className="section">
          <div className="section-label">01 / ABOUT</div>
          <div className="two-col">
            <div>
              <h2>
                Engineer with a<br />
                <span>systems mindset.</span>
              </h2>
            </div>
            <div className="about-copy">
              <p>
                I build scalable, reliable backend systems and microservices
                with a focus on performance, fault tolerance and clean
                architecture.
              </p>
              <p>
                At HDFC Bank, I work on transaction processing, customer
                onboarding, authentication, data ingestion and event-driven
                platforms handling millions of requests and transactions.
              </p>
              <div className="contact-row">
                <a href="mailto:roopeshwar.jonnakuti3@gmail.com">
                  <Mail size={16} /> Email
                </a>
                <a
                  href="https://github.com/roopeshwar17"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/roopeshwar-jonnakuti"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section alt">
          <div className="section-label">02 / EXPERIENCE</div>
          {experience.map((job) => (
            <div className="experience" key={job.company}>
              <div className="job-heading">
                <div>
                  <h3>{job.company}</h3>
                  <p>{job.role}</p>
                </div>
                <span>{job.period}</span>
              </div>
              <div className="job-points">
                {job.points.map((p, i) => (
                  <div className="job-point" key={i}>
                    <span>↳</span>
                    <p>{p}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="skills" className="section">
          <div className="section-label">03 / TECHNICAL SKILLS</div>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items], i) => (
              <div className="skill-card" key={category}>
                <div className="skill-icon">
                  {i === 0 ? (
                    <Code2 />
                  ) : i === 1 ? (
                    <Layers3 />
                  ) : i === 2 ? (
                    <Terminal />
                  ) : i === 3 ? (
                    <Database />
                  ) : i === 4 ? (
                    <Cloud />
                  ) : (
                    <Code2 />
                  )}
                </div>
                <h3>{category}</h3>
                <div className="chips">
                  {items.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="achievements" className="section alt">
          <div className="section-label">04 / ACHIEVEMENTS & CERTIFICATION</div>
          <div className="achievement-grid">
            {achievements.map((a, i) => (
              <div className="achievement" key={a}>
                <span>0{i + 1}</span>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="education">
          <div>
            <div className="section-label">05 / EDUCATION</div>
            <h2>
              Indian Institute of
              <br />
              <span>Technology Patna</span>
            </h2>
          </div>
          <div>
            <p className="degree">Bachelor of Technology</p>
            <p>Electrical & Electronics Engineering</p>
            <p className="muted">2019 — 2023 · Patna, India</p>
          </div>
        </section>

        <section className="cta">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>
            Have a challenging
            <br />
            <em>problem?</em>
          </h2>
          <a href="mailto:roopeshwar.jonnakuti3@gmail.com" className="primary">
            Say hello <ArrowUpRight size={18} />
          </a>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Roopeshwar Jonnakuti</span>
        <span>Designed & built with React</span>
        <a href="mailto:roopeshwar.jonnakuti3@gmail.com">
          roopeshwar.jonnakuti3@gmail.com
        </a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
