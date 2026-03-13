import React, { useEffect } from 'react';

const experience = [
  {
    company: "National Association of Boards of Pharmacy (NABP)",
    role: "Program Supervising Coordinator | NAPLEX Advantage",
    period: "Feb 2026 – Present",
    location: "Mount Prospect, IL · Hybrid",
    summary: "Leading end-to-end technical program operations for platform-based exam services in a regulated environment.",
    points: [
      "Lead end-to-end technical program operations, ensuring reliable, compliant, and efficient delivery of platform-based exam services.",
      "Oversee staff onboarding, system training, and workflow adoption, improving operational consistency and platform utilization.",
      "Troubleshoot technical, system, and vendor-related issues, ensuring minimal disruption and high platform reliability.",
      "Analyze operational data and performance metrics to identify workflow inefficiencies and implement process improvements.",
      "Collaborate with technical teams, vendors, and stakeholders to implement system enhancements and operational improvements.",
      "Mentor team members on systems, processes, and operational best practices, improving team performance and efficiency.",
      "Strengthen compliance and access governance practices in regulated environments."
    ]
  },
  {
    company: "National Association of Boards of Pharmacy (NABP)",
    role: "Program Coordinator | NAPLEX Advantage",
    period: "Feb 2024 – Feb 2026",
    location: "Mount Prospect, IL · Hybrid",
    summary: "Managed technical program workflows, schedules, and system operations to ensure efficient and accurate execution.",
    points: [
      "Managed technical program workflows, schedules, and system operations to ensure efficient and accurate execution.",
      "Developed tracking systems and dashboards to monitor operational performance and workflow efficiency.",
      "Resolved system, operational, and user issues, improving system reliability and user experience.",
      "Led onboarding and system training, improving tool adoption and operational readiness.",
      "Coordinated cross-functional teams to execute program deliverables and operational improvements."
    ]
  },
  {
    company: "National Association of Boards of Pharmacy (NABP)",
    role: "Exam Eligibility Assistant",
    period: "Apr 2023 – Feb 2024",
    location: "Mount Prospect, IL · Hybrid",
    summary: "Verified system data and eligibility workflows, ensuring compliance and operational accuracy.",
    points: [
      "Verified system data and eligibility workflows, ensuring compliance and operational accuracy.",
      "Identified and resolved system and operational issues through technical troubleshooting.",
      "Supported reporting, workflow analysis, and process optimization initiatives.",
      "Collaborated with internal and external stakeholders to ensure efficient operations."
    ]
  },
  {
    company: "Openrize",
    role: "Founder & Digital Solutions Consultant",
    period: "Jan 2022 – Present",
    location: "Chicago, IL · Remote",
    summary: "Founded and lead a digital solutions consultancy delivering websites, automation, and operational systems for businesses.",
    points: [
      "Founded and lead a digital solutions consultancy delivering websites, automation, and operational systems for businesses.",
      "Design and implement workflow automation, improving operational efficiency and reducing manual work.",
      "Develop and deploy high-performance business websites optimized for scalability and user experience.",
      "Implement POS systems, reporting solutions, and digital infrastructure to improve business operations.",
      "Provide ongoing technical consulting, system optimization, and operational improvement strategies.",
      "Help businesses improve online presence, operational efficiency, and technology adoption."
    ],
    openrizeLink: true
  },
  {
    company: "DePaul University",
    role: "Computer Science Mentor",
    period: "Dec 2022 – Apr 2023",
    location: "Chicago, IL · Remote · Freelance",
    summary: "Guided students in coding, software development, and technical projects.",
    points: [
      "Guided students in coding, software development, and technical projects.",
      "Developed and delivered custom tutorials, workshops, and learning plans.",
      "Reviewed student code and provided actionable feedback.",
      "Monitored student progress and performance metrics.",
      "Collaborated with program staff to enhance curriculum and mentorship strategies."
    ]
  },
  {
    company: "Indo-American Center",
    role: "Marketing Operator",
    period: "Aug 2022 – Dec 2022",
    location: "Chicago, IL · Hybrid · Apprenticeship",
    summary: "Executed digital and offline marketing campaigns, ensuring alignment with brand objectives.",
    points: [
      "Executed digital and offline marketing campaigns, ensuring alignment with brand objectives.",
      "Coordinated content, promotional materials, and social media strategies to maximize engagement and ROI.",
      "Monitored campaign performance and implemented process improvements.",
      "Maintained marketing databases, email communications, and CRM tools."
    ]
  },
  {
    company: "Heritage-Crystal Clean LLC",
    role: "System Administrator",
    period: "Apr 2022 – Aug 2022",
    location: "Elgin, IL · On-site · Contract",
    summary: "Administered Windows and network infrastructure, ensuring high availability and system reliability.",
    points: [
      "Administered Windows and network infrastructure, ensuring high availability and system reliability.",
      "Installed, configured, and maintained systems, software, and security updates.",
      "Troubleshot system, hardware, and network issues, minimizing downtime.",
      "Monitored system performance and implemented improvements to enhance reliability.",
      "Performed backup, recovery, and system maintenance operations."
    ]
  },
  {
    company: "Chicago Academy High School",
    role: "Paraprofessional in STEM",
    period: "Aug 2021 – Apr 2022",
    location: "Chicago, IL · Hybrid · Freelance",
    summary: "Assisted in STEM lessons and lab activities, mentoring students in science and technology projects.",
    points: [
      "Assisted in STEM lessons and lab activities, mentoring students in science and technology projects.",
      "Monitored student progress and implemented interventions for improved learning outcomes.",
      "Managed lab materials and maintained a safe, organized learning environment.",
      "Collaborated with educators to develop instructional resources and assessments."
    ]
  },
  {
    company: "Yusen Logistics (Americas) Inc.",
    role: "Technical Support Specialist",
    period: "Mar 2021 – Aug 2021",
    location: "Elk Grove Village, IL · On-site · Contract",
    summary: "Provided technical support for enterprise systems, applications, and network infrastructure.",
    points: [
      "Provided technical support for enterprise systems, applications, and network infrastructure.",
      "Diagnosed and resolved technical issues, improving operational continuity.",
      "Documented technical issues, resolutions, and operational procedures.",
      "Assisted in onboarding and system training for users."
    ]
  },
  {
    company: "Dunkin'",
    role: "Assistant Manager",
    period: "May 2018 – Mar 2021",
    location: "Chicago, IL · On-site · Full-time",
    summary: "Led daily business operations, managing staff, workflows, and operational performance.",
    points: [
      "Led daily business operations, managing staff, workflows, and operational performance.",
      "Trained team members, improving operational efficiency and service delivery.",
      "Analyzed operational performance metrics and implemented process improvements.",
      "Managed operational issues, ensuring smooth business continuity."
    ]
  },
  {
    company: "Gujarat Technological University (GTU)",
    role: "Project Manager — College",
    period: "Aug 2016 – May 2018",
    location: "Gujarat, India · Hybrid · Apprenticeship",
    summary: "Managed end-to-end project planning, execution, and delivery with scope, timeline, and budget adherence.",
    points: [
      "Managed end-to-end project planning, execution, and delivery with scope, timeline, and budget adherence.",
      "Coordinated cross-functional teams, stakeholders, and vendors to achieve project goals.",
      "Monitored performance, identified risks, and implemented mitigation strategies.",
      "Prepared reports and metrics for leadership to support informed decision-making.",
      "Led meetings and mentored team members to ensure successful project outcomes."
    ]
  }
];

const education = [
  {
    school: "University of Illinois Chicago",
    degree: "Bachelor of Science",
    field: "Computer Science",
    activities: [
      "Secretary — Association for Computing Machinery (ACM) at UIC",
      "Secretary — Students for the Exploration and Development of Space (SEDS) at UIC",
      "Member — Women in Computer Science (WiCS) at UIC"
    ]
  },
  {
    school: "Harper College",
    degree: "Associate of Science",
    field: "Information Technology",
    activities: ["Member — AnitaB.org"]
  },
  {
    school: "Government Engineering College Valsad",
    degree: "Diploma",
    field: "Environmental Engineering",
    activities: []
  }
];

const certifications = [
  { name: "Data-Driven Decision Making & Analysis", issuer: "Pryor Learning", date: "Apr 2024" },
  { name: "Supply Chain Foundation: Analytics", issuer: "LinkedIn", date: "Feb 2024" },
  { name: "Introduction to SQL", issuer: "DataCamp", date: "Oct 2023" },
  { name: "Galactic Problem-Solver", issuer: "NASA International Space Apps Challenge", date: "Oct 2022" },
  { name: "Programmer / Business Analyst", issuer: "48in48", date: "Oct 2022" },
  { name: "Notary Public", issuer: "State of Illinois", date: "Exp. 2029" },
  { name: "ExCPT Pharmacy Technician (CPhT)", issuer: "NCH", date: "Dec 2021" }
];

const skillGroups = [
  {
    category: "Program Management",
    skills: ["Technical Program Management", "SaaS Operations", "Systems Thinking", "Strategic Planning", "Process Optimization", "System Implementation", "Cross-functional Leadership"]
  },
  {
    category: "Access Governance & Compliance",
    skills: ["RBAC / IAM", "Access Governance", "Compliance Management", "Audit Readiness", "Regulatory Compliance", "Data Privacy & Security"]
  },
  {
    category: "Technical",
    skills: ["SQL", "Workflow Automation", "Reporting & Dashboards", "Data Modeling", "ITIL Framework", "Cloud Architecture", "DevOps Fundamentals", "Active Directory", "Windows Administration"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Jira Service Desk", "Microsoft Power BI", "Google Cloud Platform (GCP)", "Microsoft SQL Server", "Visual Basic", "Excel Automation"]
  }
];

const impactProjects = [
  {
    title: "Major League Hacking (MLH)",
    description: "Contributed to MLH hackathon initiatives leveraging Microsoft Power BI for data analytics and Google Cloud Platform for infrastructure and deployment.",
    date: "Jul 2022 – Apr 2023",
    tags: ["Power BI", "GCP", "Data Analytics"]
  },
  {
    title: "Robophins-Powerplay",
    description: "Robotics and engineering project focused on systems design, strategic planning, and end-to-end project execution from design to delivery.",
    date: "Nov 2022 – Feb 2023",
    tags: ["Project Engineering", "Strategic Planning"]
  },
  {
    title: "Intel one-API",
    description: "DevOps and database project built with Intel one-API framework, integrating Microsoft SQL Server for data pipelines and system operations.",
    date: "Oct 2022 – Dec 2022",
    tags: ["DevOps", "SQL Server", "Intel one-API"]
  },
  {
    title: "Delta — SEDS at UIC",
    description: "NASA International Space Apps Challenge project via SEDS at UIC. Contributed to space technology systems using Active Directory and precision engineering.",
    date: "Oct 2022",
    tags: ["Space Tech", "Active Directory", "NASA"]
  },
  {
    title: "Chicago Asian Ink",
    description: "Digital solutions project supporting a community arts organization, involving Visual Basic scripting, conflict resolution workflows, and operational support.",
    date: "May 2021 – Aug 2021",
    tags: ["Visual Basic", "Community", "Operations"]
  }
];

const volunteer = [
  { role: "Member", org: "AnitaB.org", assoc: "Harper College" },
  { role: "Member", org: "Women in Computer Science (WiCS)", assoc: "University of Illinois Chicago" },
  { role: "Secretary", org: "Association for Computing Machinery (ACM)", assoc: "University of Illinois Chicago" },
  { role: "Secretary", org: "Students for the Exploration and Development of Space (SEDS)", assoc: "University of Illinois Chicago" }
];

const causes = [
  "Animal Welfare", "Arts & Culture", "Civil Rights & Social Action",
  "Disaster & Humanitarian Relief", "Children", "Economic Empowerment",
  "Education", "Environment", "Health", "Human Rights",
  "Poverty Alleviation", "Science & Technology", "Social Services", "Veteran Support"
];

const languages = [
  { lang: "English", level: "Native or Bilingual" },
  { lang: "Gujarati", level: "Native or Bilingual" },
  { lang: "Hindi", level: "Native or Bilingual" },
  { lang: "Spanish", level: "Elementary" }
];

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('reveal');
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
  }, []);

  return (
    <div>
      {/* NAV */}
      <nav>
        <div className="container nav-inner">
          <div className="nav-brand">Himani Patel</div>
          <div className="nav-links">
            <a href="#vision">Vision</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero reveal">
        <div className="container">
          <div className="hero-eyebrow">Technical Program & SaaS Operations Specialist · Greater Chicago Area</div>
          <h1>
            Driving Reliability,<br />
            Governance<br />
            & Scale.
          </h1>
          <p>
            6+ years of experience driving platform reliability, access governance (RBAC/IAM),
            compliance, and operational efficiency in regulated environments — bridging technology,
            operations, and business.
          </p>
          <div className="hero-tags">
            {["Technical Program Management", "SaaS Operations", "Access Governance (RBAC/IAM)", "SQL & Workflow Automation"].map((tag, i) => (
              <span key={i} className="hero-tag">{tag}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a href="#experience" className="btn btn-primary">View Experience</a>
            <a href="mailto:himaniwork489@gmail.com" className="btn btn-outline">Get in Touch</a>
          </div>
        </div>
      </header>

      {/* VISION */}
      <section id="vision" className="bg-ivory">
        <div className="container animate-on-scroll" style={{ opacity: 0 }}>
          <div className="exp-grid">
            <div>
              <div className="section-label">Philosophy</div>
            </div>
            <div>
              <h2>Bridging technology,<br />operations, and business.</h2>
              <div className="ornament">
                <img src="/accent_divider.png" alt="ornamental divider" />
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: '2', marginBottom: '3.5rem', color: 'var(--charcoal)', maxWidth: '620px' }}>
                I specialize in building efficient systems, improving processes, and helping organizations
                scale through technology — ensuring systems are <em>reliable, scalable, and secure.</em>
              </p>

              {/* Stats */}
              <div style={{ display: 'flex', gap: '3.5rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
                {[
                  { n: "6+", l: "Years Experience" },
                  { n: "11", l: "Roles & Positions" },
                  { n: "3+", l: "Years at NABP" }
                ].map((s, i) => (
                  <div key={i} className="stat-block">
                    <div className="stat-num">{s.n}</div>
                    <div className="stat-label">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Open to */}
              <div style={{ marginBottom: '3.5rem' }}>
                <div className="section-label" style={{ marginBottom: '1rem' }}>Open to Opportunities In</div>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  {["Technical Program Management", "SaaS Operations", "Systems Analysis", "Access Governance (IAM/RBAC)", "Technical Operations Leadership"].map((item, i) => (
                    <span key={i} className="skill-tag" style={{ color: 'var(--forest)', borderColor: 'var(--forest)' }}>{item}</span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div style={{ marginBottom: '3.5rem' }}>
                <div className="section-label" style={{ marginBottom: '1.25rem' }}>Languages</div>
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                  {languages.map((l, i) => (
                    <div key={i} className="lang-item">
                      <span className="lang-name">{l.lang}</span>
                      <span className="lang-level">{l.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Causes */}
              <div>
                <div className="section-label" style={{ marginBottom: '1rem' }}>Causes & Interests</div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {causes.map((c, i) => (
                    <span key={i} className="cause-tag">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="bg-cream">
        <div className="container">
          <div className="section-label animate-on-scroll" style={{ opacity: 0, marginBottom: '3rem' }}>Professional History</div>
          <h2 className="animate-on-scroll" style={{ opacity: 0, marginBottom: '0' }}>Experience</h2>
          <div style={{ marginBottom: '1rem' }}><div className="rule" style={{ marginTop: '2rem' }}></div></div>

          {experience.map((exp, i) => (
            <div key={i} className="exp-grid animate-on-scroll" style={{ opacity: 0 }}>
              <div className="exp-meta">
                {exp.period}<br /><br />
                {exp.location}
              </div>
              <div className="exp-content">
                <div className="exp-company">{exp.company}</div>
                <h3>{exp.role}</h3>
                <p className="exp-summary">{exp.summary}</p>
                <ul className="exp-bullets">
                  {exp.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
                {exp.openrizeLink && (
                  <div className="openrize-links">
                    <a href="https://www.openrize.com" target="_blank" rel="noopener noreferrer" className="openrize-link">www.openrize.com ↗</a>
                    <a href="mailto:openrize@gmail.com" className="openrize-link">openrize@gmail.com</a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-ivory">
        <div className="container">
          <div className="section-label animate-on-scroll" style={{ opacity: 0, marginBottom: '1.5rem' }}>Selected Work</div>
          <h2 className="animate-on-scroll" style={{ opacity: 0, marginBottom: '4rem' }}>Projects</h2>
          <div className="project-grid animate-on-scroll" style={{ opacity: 0 }}>
            {impactProjects.map((p, i) => (
              <div key={i} className="project-item">
                <div className="project-date">{p.date}</div>
                <h3>{p.title}</h3>
                <p style={{ fontSize: '0.88rem', lineHeight: '1.8' }}>{p.description}</p>
                <div className="project-tags">
                  {p.tags.map((t, j) => <span key={j} className="project-tag-pill">{t}</span>)}
                </div>
              </div>
            ))}
            <div className="project-item" style={{ background: 'var(--forest)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="project-date" style={{ color: 'var(--gold-light)', opacity: 0.75 }}>GitHub</div>
                <h3 style={{ color: 'var(--ivory)', fontStyle: 'italic' }}>Full Project Portfolio</h3>
                <p style={{ color: 'rgba(248,244,237,0.6)', fontSize: '0.88rem' }}>Explore the complete codebase and project repositories on GitHub.</p>
              </div>
              <a href="https://github.com/openrize/HimaniPatel" target="_blank" rel="noopener noreferrer"
                className="btn btn-outline" style={{ marginTop: '2rem', alignSelf: 'flex-start' }}>
                View Repositories
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-cream">
        <div className="container animate-on-scroll" style={{ opacity: 0 }}>
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>Expertise</div>
          <h2 style={{ marginBottom: '4rem' }}>Core Competencies</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3.5rem' }}>
            {skillGroups.map((group, i) => (
              <div key={i}>
                <div className="exp-meta" style={{ marginBottom: '1.25rem', color: 'var(--forest)' }}>{group.category}</div>
                <div>
                  {group.skills.map((skill, j) => (
                    <span key={j} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-ivory">
        <div className="container animate-on-scroll" style={{ opacity: 0 }}>
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>Credentials</div>
          <h2 style={{ marginBottom: '3rem' }}>Certifications & Licenses</h2>
          <div>
            {certifications.map((cert, i) => (
              <div key={i} className="cert-item">
                <div className="cert-name">{cert.name}</div>
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'baseline', flexShrink: 0 }}>
                  <span className="cert-meta">{cert.issuer}</span>
                  <span className="cert-meta" style={{ color: 'var(--gold)' }}>{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="bg-cream">
        <div className="container">
          <div className="section-label animate-on-scroll" style={{ opacity: 0, marginBottom: '1.5rem' }}>Academic Formation</div>
          <h2 className="animate-on-scroll" style={{ opacity: 0, marginBottom: '3rem' }}>Education</h2>
          {education.map((edu, i) => (
            <div key={i} className="edu-item animate-on-scroll" style={{ opacity: 0 }}>
              <div className="exp-meta">
                {edu.degree}<br />{edu.field}
              </div>
              <div>
                <h3>{edu.school}</h3>
                {edu.activities.length > 0 && (
                  <ul className="exp-bullets" style={{ marginTop: '1rem' }}>
                    {edu.activities.map((act, j) => (
                      <li key={j}>{act}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HONORS */}
      <section className="bg-ivory">
        <div className="container animate-on-scroll" style={{ opacity: 0 }}>
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>Leadership</div>
          <h2 style={{ marginBottom: '4rem' }}>Honors, Awards & Community</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.5rem 2rem' }}>
            {volunteer.map((v, i) => (
              <div key={i} className="honor-card">
                <div className="honor-role">{v.role}</div>
                <div className="honor-org">{v.org}</div>
                <div className="honor-assoc">{v.assoc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="footer">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="footer-eyebrow">Strategic Collaboration</div>
          <h2>Ready to drive impact?</h2>
          <div className="footer-contact-grid" style={{ justifyContent: 'center' }}>
            {[
              { label: "Phone", value: "(773) 541-1711", href: "tel:7735411711" },
              { label: "Email", value: "himaniwork489@gmail.com", href: "mailto:himaniwork489@gmail.com" },
              { label: "LinkedIn", value: "himani-patel-cs", href: "https://www.linkedin.com/in/himani-patel-cs/" },
              { label: "Openrize", value: "www.openrize.com", href: "https://www.openrize.com" },
              { label: "GitHub", value: "openrize/HimaniPatel", href: "https://github.com/openrize/HimaniPatel" }
            ].map((item, i) => (
              <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer" className="footer-contact-item">
                <div className="footer-contact-label">{item.label}</div>
                <div className="footer-contact-value">{item.value}</div>
              </a>
            ))}
          </div>
          <div className="footer-bottom">
            Himani Patel &nbsp;·&nbsp; Technical Program & SaaS Operations Specialist &nbsp;·&nbsp; 2026
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
