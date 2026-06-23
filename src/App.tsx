import { ArrowUpRight, Code2, Mail } from "lucide-react";
import { experience, projects, skillGroups } from "./content";

export function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Eric Huang home">
          Eric Huang
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Software Engineer + ML Builder</p>
            <h1 id="hero-title">I build reliable ML products, cloud tools, and developer systems.</h1>
            <p className="lede">
              UCLA computer science student focused on shipping practical software across infrastructure,
              applied machine learning, and AI-assisted workflows.
            </p>
            <div className="hero-actions" aria-label="Primary links">
              <a className="button primary" href="#projects">
                View Projects
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
              <a className="button secondary" href="mailto:huangeric50@gmail.com">
                <Mail aria-hidden="true" size={18} />
                Email Me
              </a>
              <a className="button ghost" href="https://github.com/HuangEric22" target="_blank" rel="noreferrer">
                <Code2 aria-hidden="true" size={18} />
                GitHub
              </a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Eric Huang profile overview">
            <img
              src="https://avatars.githubusercontent.com/u/147469005?v=4"
              alt="Eric Huang GitHub avatar"
              width="220"
              height="220"
            />
          </div>
        </section>

        <section id="work" className="section-pad">
          <SectionHeading eyebrow="Experience" title="Selected Work" />
          <div className="timeline">
            {experience.map((item) => (
              <article className="card timeline-card" key={`${item.company}-${item.role}`}>
                <p className="meta">
                  {item.date} / {item.location}
                </p>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-pad">
          <SectionHeading eyebrow="Projects" title="Featured Builds" />
          <div className="project-grid">
            {projects.map((project) => (
              <a className="card project-card" href={project.link} target="_blank" rel="noreferrer" key={project.name}>
                <p className="meta">{project.stack}</p>
                <h3>
                  {project.name}
                  <ArrowUpRight aria-hidden="true" size={18} />
                </h3>
                <p>{project.summary}</p>
              </a>
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

        <section id="contact" className="contact section-pad">
          <p className="eyebrow">Contact</p>
          <h2>Open to software engineering and ML infrastructure roles.</h2>
          <a className="button primary" href="mailto:huangeric50@gmail.com">
            <Mail aria-hidden="true" size={18} />
            huangeric50@gmail.com
          </a>
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
