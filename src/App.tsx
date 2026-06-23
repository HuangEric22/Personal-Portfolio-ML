import { ArrowUpRight, BriefcaseBusiness, Code2, Download, GraduationCap, Mail, MapPin } from "lucide-react";
import { education, experience, profile, projects, skillGroups, stats } from "./content";

export function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Eric Huang home">
          Eric Huang
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#work">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">{profile.role}</p>
            <h1 id="hero-title">{profile.name}</h1>
            <p className="lede">{profile.summary}</p>
            <div className="focus-list" aria-label="Engineering focus areas">
              {profile.focus.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="hero-actions" aria-label="Primary links">
              <a className="button primary" href="#projects">
                View work
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
              <a className="button secondary" href={profile.resumePath} download>
                <Download aria-hidden="true" size={18} />
                Resume
              </a>
              <a className="button ghost" href={profile.github} target="_blank" rel="noreferrer">
                <Code2 aria-hidden="true" size={18} />
                GitHub
              </a>
            </div>
          </div>
          <div className="profile-panel" aria-label="Eric Huang profile overview">
            <img src={profile.avatar} alt="Eric Huang GitHub avatar" width="220" height="220" />
            <div>
              <p className="panel-kicker">UCLA CS '26</p>
              <h2>Cloud, ML, and product engineering with shipped outcomes.</h2>
            </div>
            <dl className="quick-facts">
              <div>
                <dt>
                  <MapPin aria-hidden="true" size={16} />
                  Location
                </dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>
                  <Mail aria-hidden="true" size={16} />
                  Email
                </dt>
                <dd>{profile.email}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="snapshot section-pad" aria-labelledby="snapshot-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Recruiter Snapshot</p>
              <h2 id="snapshot-title">Impact that fits in a first scan.</h2>
            </div>
          </div>
          <div className="stat-grid">
            {stats.map((stat) => (
              <article className="stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
                <p>{stat.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section-pad">
          <SectionHeading eyebrow="Experience" title="Selected Work" />
          <div className="timeline">
            {experience.map((item) => (
              <article className="card timeline-card" key={`${item.company}-${item.role}`}>
                <div className="card-topline">
                  <span>{item.date}</span>
                  <span>{item.location}</span>
                </div>
                <h3>
                  <BriefcaseBusiness aria-hidden="true" size={20} />
                  {item.role}
                </h3>
                <p className="company">{item.company}</p>
                <p className="summary">{item.summary}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <TagList items={item.tech} />
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-pad">
          <SectionHeading eyebrow="Projects" title="Featured Builds" />
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`card project-card ${index < 2 ? "featured" : ""}`} key={project.name}>
                <div className="card-topline">
                  <span>{project.category}</span>
                  <span>{project.period}</span>
                </div>
                <h3>{project.name}</h3>
                <p className="subtitle">{project.subtitle}</p>
                <p className="summary">{project.summary}</p>
                <p className="impact">{project.impact}</p>
                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <TagList items={project.tech} />
                <a className="repo-link" href={project.link} target="_blank" rel="noreferrer">
                  <Code2 aria-hidden="true" size={17} />
                  {project.repoLabel}
                  <ArrowUpRight aria-hidden="true" size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-pad">
          <SectionHeading eyebrow="Toolkit" title="Technical Range" />
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="card skill-card" key={group.name}>
                <h3>{group.name}</h3>
                <div className="chips">
                  {group.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="education section-pad" aria-labelledby="education-title">
          <div className="education-main">
            <p className="eyebrow">Education</p>
            <h2 id="education-title">{education.school}</h2>
            <p className="lede compact">
              {education.degree}, GPA {education.gpa}. Coursework spans neural networks, distributed systems,
              databases, NLP, computer vision, reinforcement learning, and web development.
            </p>
          </div>
          <div className="card education-card">
            <h3>
              <GraduationCap aria-hidden="true" size={21} />
              {education.degree}
            </h3>
            <div className="card-topline">
              <span>{education.date}</span>
              <span>{education.location}</span>
            </div>
            <TagList items={education.coursework} />
          </div>
        </section>

        <section id="contact" className="contact section-pad">
          <p className="eyebrow">Contact</p>
          <h2>Open to software engineering and ML infrastructure roles.</h2>
          <div className="contact-actions">
            <a className="button primary" href={`mailto:${profile.email}`}>
              <Mail aria-hidden="true" size={18} />
              {profile.email}
            </a>
            <a className="button secondary" href={profile.github} target="_blank" rel="noreferrer">
              <Code2 aria-hidden="true" size={18} />
              GitHub
            </a>
            <a className="button secondary" href={profile.resumePath} download>
              <Download aria-hidden="true" size={18} />
              Resume
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <div className="chips">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
