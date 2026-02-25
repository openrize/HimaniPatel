import React, { useEffect } from 'react';

const experience = [
  {
    company: "National Association of Boards of Pharmacy (NABP)",
    role: "Technical Program Coordinator | SaaS Operations",
    period: "APRIL 2023 – PRESENT",
    location: "MOUNT PROSPECT, IL",
    summary: "Leading digital transformation and operational governance for cloud-based testing platforms.",
    points: [
      "Optimized SaaS operations for 70+ global institutions, ensuring 100% data compliance.",
      "Engineered a high-impact RBAC lifecycle model, reducing operational friction by 40%.",
      "Pioneered automated SQL-driven executive reporting, increasing leadership visibility by 35%.",
      "Commanded Tier 2/3 escalation responses, maintaining peak operational reliability.",
      "Established a cultural shift toward structured audit readiness and versioned compliance controls."
    ]
  },
  {
    company: "Heritage-Crystal Clean LLC",
    role: "System Administrator | Operations Governance",
    period: "APRIL 2022 – AUGUST 2022",
    location: "ELGIN, IL",
    summary: "Post-merger digital infrastructure consolidation and data governance.",
    points: [
      "Orchestrated large-scale post-merger data migrations, improving cross-departmental accuracy.",
      "Developed proprietary error-detection frameworks, streamlining QA cycles by 35%.",
      "Enforced rigid access standards and privacy protocols to protect enterprise assets."
    ]
  },
  {
    company: "Yusen Logistics (Americas) Inc.",
    role: "Technical Support Specialist | Systems Efficiency",
    period: "MARCH 2021 – AUGUST 2021",
    location: "ELK GROVE VILLAGE, IL",
    summary: "Optimizing technology throughput for high-volume logistics environments.",
    points: [
      "Resolved mission-critical SLA dependencies, enhancing operational uptime for logistics teams.",
      "Architected system Reconciliation workflows to drive cross-team data integrity.",
      "Managed documentation frameworks to facilitate seamless technical onboarding."
    ]
  },
  {
    company: "DePaul University",
    role: "Computer Science Mentor | Strategic Advisor",
    period: "DECEMBER 2022 – APRIL 2023",
    location: "CHICAGO, IL",
    summary: "Fostering the next generation of technology leaders in cloud and cybersecurity.",
    points: [
      "Mentored high-potential students in Cloud Architecture and DevOps fundamentals.",
      "Increased placement outcomes by 40% through targeted professional development programs."
    ]
  }
];

const impactProjects = [
  {
    title: "Strategic Operations Tracker",
    description: "Enterprise-grade Excel automation engine reducing reporting latency by 30% through advanced data modeling.",
    metric: "30% Efficiency Gain",
    tags: ["Decision Support", "Data Strategy"]
  },
  {
    title: "Regulatory Compliance Framework",
    description: "Deployment of an ITIL-aligned audit infrastructure that accelerated compliance turnarounds by 50%.",
    metric: "50% Faster Audits",
    tags: ["Governance", "SaaS Ops"]
  },
  {
    title: "Leadership Knowledge Ecosystem",
    description: "Centralized SaaS onboarding portal that decreased technical debt and support inquiries by 20%.",
    metric: "20% Support Reduction",
    tags: ["Change Management", "Onboarding"]
  }
];

const technicalShowcase = [
  {
    title: "OpenRize Platform",
    description: "Cloud infrastructure provisioning with Terraform and AWS.",
    link: "https://github.com/harshilp0210/openrize"
  },
  {
    title: "Foodies Choice POS",
    description: "Kubernetes-deployed microservices for peak reliability.",
    link: "https://github.com/harshilp0210/FoodiesChoicePOS"
  }
];

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="portfolio">
      <nav>
        <div className="container nav-inner">
          <div style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>HIMANI PATEL</div>
          <div className="nav-links">
            <a href="#vision">Vision</a>
            <a href="#experience">Impact</a>
            <a href="#projects">Initiatives</a>
            <a href="#contact">Consult</a>
          </div>
        </div>
      </nav>

      <header className="container hero reveal">
        <div className="hero-sub">— Digital Leader & Strategist</div>
        <h1>Leading with <br /> Strategic Vision.</h1>
        <p>Architecting resilient SaaS operations, rigorous compliance frameworks, and high-impact process automation for the modern enterprise.</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#experience" className="btn" style={{ background: 'var(--accent)', color: 'white', padding: '1.25rem 2.5rem', fontWeight: 700, textDecoration: 'none' }}>Scale Operations</a>
          <a href="mailto:himaniwork489@gmail.com" className="btn" style={{ border: '1px solid var(--accent)', padding: '1.25rem 2.5rem', fontWeight: 700, textDecoration: 'none', color: 'var(--accent)' }}>Get in Touch</a>
        </div>
      </header>

      <section id="vision" className="container animate-on-scroll" style={{ opacity: 0 }}>
        <div className="exp-grid">
          <div className="exp-meta">Strategic Philosophy</div>
          <div className="exp-content">
            <h2 style={{ marginBottom: '2rem' }}>Driving measurable impact through operational excellence.</h2>
            <p style={{ fontSize: '1.5rem', lineHeight: '1.6', color: 'var(--text-main)', marginBottom: '3rem' }}>
              My approach integrates technical rigor with strategic foresight. Whether optimizing RBAC lifecycles or steering post-merger migrations, the goal is always clear: <strong>Scale, Compliance, and Continuity.</strong>
            </p>
            <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>6+</div>
                <div className="exp-meta" style={{ fontSize: '0.65rem' }}>Years Experience</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>100%</div>
                <div className="exp-meta" style={{ fontSize: '0.65rem' }}>Audit Readiness</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>40%</div>
                <div className="exp-meta" style={{ fontSize: '0.65rem' }}>Efficiency Lift</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="container" style={{ background: 'var(--bg-sub)', paddingLeft: '5%', paddingRight: '5%', marginLeft: '-6%', marginRight: '-6%', width: '112%' }}>
        <div className="container">
          <h2 className="animate-on-scroll" style={{ opacity: 0 }}>Executive Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} className="exp-grid animate-on-scroll" style={{ opacity: 0, marginBottom: '8rem' }}>
              <div className="exp-meta">
                {exp.period} <br />
                {exp.location}
              </div>
              <div className="exp-content">
                <h3>{exp.role}</h3>
                <p style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{exp.company}</p>
                <p style={{ fontStyle: 'italic', marginBottom: '2rem' }}>{exp.summary}</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {exp.points.map((p, j) => (
                    <li key={j} style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--accent-gold)' }}>—</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="container">
        <h2 className="animate-on-scroll" style={{ opacity: 0, textAlign: 'center', marginBottom: '5rem' }}>High-Impact Initiatives</h2>
        <div className="project-grid animate-on-scroll" style={{ opacity: 0 }}>
          {impactProjects.map((p, i) => (
            <div key={i} className="project-item">
              <div className="exp-meta" style={{ marginBottom: '1rem' }}>Impact: {p.metric}</div>
              <h3>{p.title}</h3>
              <p style={{ margin: '1.5rem 0' }}>{p.description}</p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {p.tags.map((t, j) => <span key={j} style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>[{t}]</span>)}
              </div>
            </div>
          ))}
          <div className="project-item" style={{ background: 'var(--accent)', color: 'white' }}>
            <div className="exp-meta" style={{ color: 'white', opacity: 0.6 }}>Technical Repository</div>
            <h3 style={{ color: 'white' }}>Full Project Portfolio</h3>
            <p style={{ margin: '1.5rem 0', color: 'rgba(255,255,255,0.7)' }}>A deep dive into the technical infrastructure and codebase powering these operations.</p>
            <a href="https://github.com/openrize/HimaniPatel" target="_blank" className="btn" style={{ fontWeight: 800, color: 'white', borderBottom: '2px solid white', textDecoration: 'none' }}>View Repositories</a>
          </div>
        </div>
      </section>

      <footer id="contact" style={{ padding: '8rem 0', background: 'var(--accent)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="hero-sub" style={{ color: 'white', opacity: 0.6, marginBottom: '2rem' }}>Strategic Collaboration</div>
          <h2 style={{ fontSize: '3.5rem', color: 'white' }}>Ready to drive impact?</h2>
          <div style={{ display: 'flex', gap: '4rem', justifyContent: 'center', marginTop: '4rem', flexWrap: 'wrap' }}>
            <a href="mailto:himaniwork489@gmail.com" style={{ color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: '1.25rem' }}>Email</a>
            <a href="https://www.linkedin.com/in/himani-patel-cs/" target="_blank" style={{ color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: '1.25rem' }}>LinkedIn</a>
            <a href="https://github.com/harshilp0210" target="_blank" style={{ color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: '1.25rem' }}>GitHub</a>
          </div>
          <p style={{ marginTop: '6rem', opacity: 0.4, fontSize: '0.8rem', letterSpacing: '0.1em' }}>HIMANI PATEL | STRATEGIC SYSTEMS LEADER | 2026</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
