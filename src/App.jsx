import React, { useEffect } from 'react';

const experience = [
  {
    company: "National Association of Boards of Pharmacy (NABP)",
    role: "Program Supervising Coordinator | NAPLEX Advantage",
    period: "FEB 2026 – PRESENT",
    location: "MOUNT PROSPECT, IL · HYBRID",
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
    period: "FEB 2024 – FEB 2026",
    location: "MOUNT PROSPECT, IL · HYBRID",
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
    period: "APR 2023 – FEB 2024",
    location: "MOUNT PROSPECT, IL · HYBRID",
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
    period: "JAN 2022 – PRESENT",
    location: "CHICAGO, IL · REMOTE",
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
    period: "DEC 2022 – APR 2023",
    location: "CHICAGO, IL · REMOTE · FREELANCE",
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
    period: "AUG 2022 – DEC 2022",
    location: "CHICAGO, IL · HYBRID · APPRENTICESHIP",
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
    period: "APR 2022 – AUG 2022",
    location: "ELGIN, IL · ON-SITE · CONTRACT",
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
    period: "AUG 2021 – APR 2022",
    location: "CHICAGO, IL · HYBRID · FREELANCE",
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
    period: "MAR 2021 – AUG 2021",
    location: "ELK GROVE VILLAGE, IL · ON-SITE · CONTRACT",
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
    period: "MAY 2018 – MAR 2021",
    location: "CHICAGO, IL · ON-SITE · FULL-TIME",
    summary: "Led daily business operations, managing staff, workflows, and operational performance.",
    points: [
      "Led daily business operations, managing staff, workflows, and operational performance.",
      "Trained team members, improving operational efficiency and service delivery.",
      "Analyzed operational performance metrics and implemented process improvements.",
      "Managed operational issues, ensuring smooth business continuity.",
      "Developed leadership, operational management, and problem-solving skills."
    ]
  },
  {
    company: "Gujarat Technological University (GTU)",
    role: "Project Manager — College",
    period: "AUG 2016 – MAY 2018",
    location: "GUJARAT, INDIA · HYBRID · APPRENTICESHIP",
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
    school: "University of Illinois Chicago (UIC)",
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
    metric: "Jul 2022 – Apr 2023",
    tags: ["Power BI", "GCP", "Data Analytics"],
    link: null
  },
  {
    title: "Robophins-Powerplay",
    description: "Robotics and engineering project focused on systems design, strategic planning, and end-to-end project execution from design to delivery.",
    metric: "Nov 2022 – Feb 2023",
    tags: ["Project Engineering", "Strategic Planning"],
    link: null
  },
  {
    title: "Intel one-API",
    description: "DevOps and database project built with Intel one-API framework, integrating Microsoft SQL Server for data pipelines and system operations.",
    metric: "Oct 2022 – Dec 2022",
    tags: ["DevOps", "SQL Server", "Intel one-API"],
    link: null
  },
  {
    title: "Delta — SEDS at UIC",
    description: "NASA International Space Apps Challenge project via SEDS at UIC. Contributed to space technology systems using Active Directory and precision engineering.",
    metric: "Oct 2022",
    tags: ["Space Tech", "Active Directory", "NASA"],
    link: null
  },
  {
    title: "Chicago Asian Ink",
    description: "Digital solutions project supporting a community arts organization, involving Visual Basic scripting, conflict resolution workflows, and operational support.",
    metric: "May 2021 – Aug 2021",
    tags: ["Visual Basic", "Community", "Operations"],
    link: null
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
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="container hero reveal">
        <div className="hero-sub">— Technical Program & SaaS Operations Specialist · Greater Chicago Area</div>
        <h1>Driving Reliability,<br />Governance & Scale.</h1>
        <p>
          6+ years of experience driving platform reliability, access governance (RBAC/IAM), compliance,
          and operational efficiency in regulated environments — bridging technology, operations, and business.
        </p>
        <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {["Technical Program Management", "SaaS Operations", "Access Governance (RBAC/IAM)", "SQL & Workflow Automation"].map((tag, i) => (
            <span key={i} style={{ fontSize: '0.72rem', fontWeight: 700, padding: '0.35rem 0.85rem', border: '1px solid var(--accent)', color: 'var(--accent)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{tag}</span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          <a href="#experience" className="btn" style={{ background: 'var(--accent)', color: 'white', padding: '1.25rem 2.5rem', fontWeight: 700, textDecoration: 'none' }}>View Experience</a>
          <a href="mailto:himaniwork489@gmail.com" className="btn" style={{ border: '1px solid var(--accent)', padding: '1.25rem 2.5rem', fontWeight: 700, textDecoration: 'none', color: 'var(--accent)' }}>Get in Touch</a>
        </div>
      </header>

      {/* VISION */}
      <section id="vision" className="container animate-on-scroll" style={{ opacity: 0 }}>
        <div className="exp-grid">
          <div className="exp-meta">Strategic Philosophy</div>
          <div className="exp-content">
            <h2 style={{ marginBottom: '2rem' }}>Bridging technology, operations, and business.</h2>
            <p style={{ fontSize: '1.4rem', lineHeight: '1.6', color: 'var(--text-main)', marginBottom: '3rem' }}>
              I specialize in building efficient systems, improving processes, and helping organizations scale through technology —
              ensuring systems are <strong>reliable, scalable, and secure.</strong>
            </p>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>6+</div>
                <div className="exp-meta" style={{ fontSize: '0.65rem' }}>Years Experience</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>11</div>
                <div className="exp-meta" style={{ fontSize: '0.65rem' }}>Roles & Positions</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>3+</div>
                <div className="exp-meta" style={{ fontSize: '0.65rem' }}>Years at NABP</div>
              </div>
            </div>

            {/* Current Focus */}
            <div style={{ marginBottom: '3rem' }}>
              <div className="exp-meta" style={{ marginBottom: '0.75rem' }}>Open to Opportunities In</div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {["Technical Program Management", "SaaS Operations", "Systems Analysis", "Access Governance (IAM/RBAC)", "Technical Operations Leadership"].map((item, i) => (
                  <span key={i} style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.4rem 1rem', border: '1px solid var(--accent-gold)', color: 'var(--accent-gold)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{item}</span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div style={{ marginBottom: '3rem' }}>
              <div className="exp-meta" style={{ marginBottom: '0.75rem' }}>Languages</div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {languages.map((l, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, padding: '0.4rem 1rem', border: '1px solid var(--accent)', color: 'var(--accent)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{l.lang}</span>
                    <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.25rem', display: 'block' }}>{l.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Causes */}
            <div>
              <div className="exp-meta" style={{ marginBottom: '0.75rem' }}>Causes & Interests</div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {causes.map((c, i) => (
                  <span key={i} style={{ fontSize: '0.68rem', fontWeight: 600, padding: '0.3rem 0.7rem', background: 'var(--bg-sub)', border: '1px solid var(--border)', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ background: 'var(--bg-sub)', paddingLeft: '0', paddingRight: '0' }}>
        <div className="container">
          <h2 className="animate-on-scroll" style={{ opacity: 0 }}>Professional Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} className="exp-grid animate-on-scroll" style={{ opacity: 0, marginBottom: '6rem' }}>
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
                    <li key={j} style={{ marginBottom: '0.85rem', paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--accent-gold)' }}>—</span>
                      {p}
                    </li>
                  ))}
                </ul>
                {exp.openrizeLink && (
                  <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <a href="https://www.openrize.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent)', textDecoration: 'none', borderBottom: '1px solid var(--accent)' }}>www.openrize.com →</a>
                    <a href="mailto:openrize@gmail.com" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-gold)', textDecoration: 'none', borderBottom: '1px solid var(--accent-gold)' }}>openrize@gmail.com</a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="container">
        <h2 className="animate-on-scroll" style={{ opacity: 0, textAlign: 'center', marginBottom: '5rem' }}>Projects</h2>
        <div className="project-grid animate-on-scroll" style={{ opacity: 0 }}>
          {impactProjects.map((p, i) => (
            <div key={i} className="project-item">
              <div className="exp-meta" style={{ marginBottom: '1rem' }}>{p.metric}</div>
              <h3>{p.title}</h3>
              <p style={{ margin: '1.5rem 0' }}>{p.description}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: p.link ? '1rem' : 0 }}>
                {p.tags.map((t, j) => <span key={j} style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>[{t}]</span>)}
              </div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 700, textDecoration: 'none', borderBottom: '1px solid var(--accent)' }}>View Repository →</a>
              )}
            </div>
          ))}
          <div className="project-item" style={{ background: 'var(--accent)', color: 'white' }}>
            <div className="exp-meta" style={{ color: 'white', opacity: 0.6 }}>GitHub</div>
            <h3 style={{ color: 'white' }}>Full Project Portfolio</h3>
            <p style={{ margin: '1.5rem 0', color: 'rgba(255,255,255,0.7)' }}>Explore the complete technical codebase and project repositories.</p>
            <a href="https://github.com/openrize/HimaniPatel" target="_blank" rel="noopener noreferrer" className="btn" style={{ fontWeight: 800, color: 'white', borderBottom: '2px solid white', textDecoration: 'none' }}>View Repositories</a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="animate-on-scroll" style={{ opacity: 0, background: 'var(--bg-sub)', padding: '10rem 0' }}>
        <div className="container">
          <h2 style={{ marginBottom: '4rem' }}>Core Competencies</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {skillGroups.map((group, i) => (
              <div key={i}>
                <div className="exp-meta" style={{ marginBottom: '1.5rem' }}>{group.category}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {group.skills.map((skill, j) => (
                    <span key={j} style={{ fontSize: '0.78rem', fontWeight: 700, padding: '0.5rem 1rem', border: '1px solid var(--border)', color: 'var(--text-main)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="container animate-on-scroll" style={{ opacity: 0 }}>
        <h2 style={{ marginBottom: '4rem' }}>Certifications & Licenses</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {certifications.map((cert, i) => (
            <div key={i} style={{ borderLeft: '2px solid var(--accent-gold)', paddingLeft: '1.5rem' }}>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.4rem' }}>{cert.name}</div>
              <div className="exp-meta" style={{ fontSize: '0.7rem' }}>{cert.issuer}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent)', marginTop: '0.25rem', fontWeight: 700 }}>{cert.date}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" style={{ background: 'var(--bg-sub)', padding: '10rem 0' }}>
        <div className="container">
          <h2 className="animate-on-scroll" style={{ opacity: 0, marginBottom: '4rem' }}>Education</h2>
          {education.map((edu, i) => (
            <div key={i} className="exp-grid animate-on-scroll" style={{ opacity: 0, marginBottom: '4rem' }}>
              <div className="exp-meta">{edu.degree}<br />{edu.field}</div>
              <div className="exp-content">
                <h3>{edu.school}</h3>
                {edu.activities.length > 0 && (
                  <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                    {edu.activities.map((act, j) => (
                      <li key={j} style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative', fontSize: '0.9rem' }}>
                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent-gold)' }}>—</span>
                        {act}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HONORS & LEADERSHIP */}
      <section className="container animate-on-scroll" style={{ opacity: 0 }}>
        <h2 style={{ marginBottom: '4rem' }}>Honors, Awards & Community</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          {volunteer.map((v, i) => (
            <div key={i} style={{ borderTop: '2px solid var(--accent)', paddingTop: '1.5rem' }}>
              <div style={{ fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '0.5rem' }}>{v.role}</div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.25rem' }}>{v.org}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{v.assoc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact" style={{ padding: '8rem 0', background: 'var(--accent)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="hero-sub" style={{ color: 'white', opacity: 0.6, marginBottom: '2rem' }}>Let's Connect</div>
          <h2 style={{ fontSize: '3.5rem', color: 'white' }}>Ready to drive impact?</h2>
          <div style={{ display: 'flex', gap: '4rem', justifyContent: 'center', marginTop: '4rem', flexWrap: 'wrap' }}>
            <a href="tel:7745411711" style={{ color: 'white', textDecoration: 'none', textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.6, marginBottom: '0.5rem' }}>Phone</div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>(774) 541-1711</div>
            </a>
            <a href="mailto:himaniwork489@gmail.com" style={{ color: 'white', textDecoration: 'none', textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.6, marginBottom: '0.5rem' }}>Email</div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>himaniwork489@gmail.com</div>
            </a>
            <a href="https://www.linkedin.com/in/himani-patel-cs/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.6, marginBottom: '0.5rem' }}>LinkedIn</div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>himani-patel-cs</div>
            </a>
            <a href="https://www.openrize.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.6, marginBottom: '0.5rem' }}>Openrize</div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>www.openrize.com</div>
            </a>
            <a href="https://github.com/openrize/HimaniPatel" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.6, marginBottom: '0.5rem' }}>GitHub</div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>openrize/HimaniPatel</div>
            </a>
          </div>
          <p style={{ marginTop: '6rem', opacity: 0.4, fontSize: '0.8rem', letterSpacing: '0.1em' }}>HIMANI PATEL | TECHNICAL PROGRAM & SAAS OPERATIONS SPECIALIST | 2026</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
