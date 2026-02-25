import React from 'react';

const experience = [
  {
    company: "National Association of Boards of Pharmacy (NABP)",
    role: "Technical Program Coordinator – SaaS Operations",
    period: "April 2023 – Present",
    points: [
      "Manage cloud-based testing platform operations serving 70+ institutions; oversee scheduling, user access, and data compliance.",
      "Designed and implemented a lifecycle-based RBAC model, reducing manual permission errors by 40% and improving onboarding speed.",
      "Automated SQL/Excel dashboards to improve compliance monitoring and operational visibility for executive reporting.",
      "Lead Tier 2/3 escalation processes; coordinate with internal teams and vendors to resolve complex issues.",
      "Created LMS-based training programs and documentation, reducing recurring support tickets by 25% YoY.",
      "Enhanced audit readiness by establishing structured access logs and versioned change management processes."
    ]
  },
  {
    company: "Heritage-Crystal Clean LLC",
    role: "System Administrator (Contract)",
    period: "April 2022 – August 2022",
    points: [
      "Directed digital file governance and migration efforts post-merger, improving data accuracy and compliance.",
      "Developed automated error detection techniques in Excel, reducing QA review time by 35%.",
      "Managed secure access workflows and enforced data privacy standards across departments."
    ]
  },
  {
    company: "Yusen Logistics (Americas) Inc.",
    role: "Technical Support Specialist (Contract)",
    period: "March 2021 – August 2021",
    points: [
      "Delivered technology support to high-volume logistics teams, resolving 200+ SLA-bound tickets.",
      "Organized logistics records and reconciled system data to support cross-team efficiency.",
      "Assisted in system-based issue tracking and documentation flow improvements."
    ]
  },
  {
    company: "DePaul University",
    role: "Computer Science Mentor",
    period: "December 2022 – April 2023",
    points: [
      "Mentored 50+ students in key areas including cloud computing, DevOps fundamentals, and cybersecurity principles.",
      "Increased placement success by 40% through interactive mentorship programs."
    ]
  },
  {
    company: "Gujarat Technological University",
    role: "Project Manager – College",
    period: "August 2016 – May 2018",
    points: [
      "Led academic and administrative initiatives, improving coordination and operational efficiency.",
      "Allocated resources and executed project plans to meet quality and timeline goals."
    ]
  }
];

const projects = [
  {
    title: "Automated Program Tracker",
    description: "Built an Excel-based monitoring tool that reduced reporting time by 30% through automated data reconciliation.",
    tags: ["Excel Automation", "Data Reporting", "VLOOKUP/Pivot"]
  },
  {
    title: "Access Audit Toolkit",
    description: "Designed an ITIL-aligned audit tracker that cut turnaround time by 50% for compliance reviews.",
    tags: ["Compliance", "Audit Readiness", "ITIL"]
  },
  {
    title: "Self-Service Help Center",
    description: "Built an onboarding portal that reduced repetitive support tickets by 20% through structured knowledge base development.",
    tags: ["SOP", "Knowledge Base", "User Onboarding"]
  },
  {
    title: "Technical Showcase: OpenRize",
    description: "Engineering platform showcasing AI/ML services with fully automated IaC (Terraform) provisioning on AWS.",
    tags: ["Terraform", "AWS", "Next.js", "AI/ML"]
  },
  {
    title: "Foodies Choice POS",
    description: "Cloud-based restaurant platform with Kubernetes microservices and 99.9% uptime SLA.",
    tags: ["Next.js", "Kubernetes", "Supabase", "Node.js"]
  }
];

const competencies = [
  "SaaS Systems Operations", "RBAC/IAM Access Governance", "Audit & Compliance (HIPAA, GDPR)",
  "Process Automation", "SQL & Excel Reporting", "Tier 2/3 Support", "AWS Cloud Fundamentals"
];

function App() {
  return (
    <div className="portfolio">
      <nav>
        <div className="container nav-inner">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>HIMANI PATEL</h2>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
          </div>
        </div>
      </nav>

      <section className="hero container">
        <p className="chip" style={{ marginBottom: '1rem' }}>Technical Program & Systems Specialist</p>
        <h1>Strategic Systems Leadership.</h1>
        <p>Optimizing SaaS operations, compliance, and data-driven process automation for global scale.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#experience" className="btn">View Experience</a>
          <a href="mailto:himaniwork489@gmail.com" className="btn" style={{ background: 'transparent', color: 'var(--accent)', border: '1px solid var(--accent)' }}>Contact Me</a>
        </div>
      </section>

      <section id="about" className="container">
        <div className="card" style={{ border: 'none', background: 'var(--accent-light)', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Professional Summary</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-sub)', maxWidth: '850px', margin: '0 auto' }}>
            Results-driven Technical Program & Systems Specialist with 6+ years of experience leading SaaS operations, access governance (RBAC/IAM), and compliance frameworks. Proven success in designing scalable systems and improving audit readiness across healthcare and logistics.
          </p>
        </div>
      </section>

      <section id="experience" className="container">
        <h2 style={{ fontSize: '2rem', marginBottom: '3rem' }}>Professional Experience</h2>
        <div style={{ maxWidth: '800px' }}>
          {experience.map((exp, i) => (
            <div key={i} className="timeline-item">
              <h3 style={{ fontSize: '1.25rem' }}>{exp.role}</h3>
              <p style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 600, marginBottom: '1rem' }}>{exp.company} | {exp.period}</p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-sub)' }}>
                {exp.points.map((p, j) => <li key={j} style={{ marginBottom: '0.4rem' }}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="container" style={{ background: 'var(--bg-sub)', borderRadius: '2rem', padding: '4rem 2rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Core Competencies</h2>
        <div className="chips" style={{ justifyContent: 'center' }}>
          {competencies.map((c, i) => (
            <span key={i} className="chip" style={{ background: 'white', border: '1px solid var(--border)', padding: '0.75rem 1.5rem', fontSize: '1rem' }}>{c}</span>
          ))}
        </div>
      </section>

      <section id="projects" className="container">
        <h2 style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center' }}>Achievements & Projects</h2>
        <div className="project-grid">
          {projects.map((p, i) => (
            <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ marginBottom: '1rem' }}>{p.title}</h3>
              <p style={{ color: 'var(--text-sub)', flex: 1, marginBottom: '1.5rem' }}>{p.description}</p>
              <div className="chips">
                {p.tags.map((t, j) => <span key={j} className="chip" style={{ fontSize: '0.75rem' }}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="container">
          <h2 style={{ marginBottom: '2rem' }}>Connect with Me</h2>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <a href="mailto:himaniwork489@gmail.com" style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none' }}>Email</a>
            <a href="https://www.linkedin.com/in/himani-patel-cs/" target="_blank" style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none' }}>LinkedIn</a>
            <a href="https://github.com/harshilp0210" target="_blank" style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none' }}>GitHub Profile</a>
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-sub)' }}>&copy; {new Date().getFullYear()} Himani Patel. Certified Program & Systems Specialist.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
