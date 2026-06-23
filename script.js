const experience = [
  {
    role: "Software Engineer Intern",
    company: "Amazon Web Services, EC2 Nitro",
    date: "Jun. 2025 - Sep. 2025",
    location: "Seattle, WA",
    bullets: [
      "Built Go-based CLI onboarding tooling that reduced manual setup time by 75%.",
      "Deployed API Gateway endpoints and Lambda handlers through AWS SAM.",
      "Automated CloudFormation-backed CI/CD releases, cutting release time by 50%."
    ]
  }
];

const projects = [
  {
    name: "GeminiGo",
    link: "https://github.com/HuangEric22/gemini_hackathon",
    stack: "Next.js, TypeScript, Gemini, Drizzle, Turso",
    summary: "A tool-augmented travel planner grounded with route, weather, restaurant, and schedule data."
  },
  {
    name: "Spire Bot",
    link: "https://github.com/HuangEric22/spire-bot",
    stack: "Python, PyTorch, PPO, NumPy",
    summary: "A reinforcement-learning agent architecture for Slay the Spire with combat and planning policies."
  }
];

const skillGroups = [
  {
    name: "Languages",
    items: ["C++", "Python", "Go", "TypeScript", "JavaScript", "SQL"]
  },
  {
    name: "ML + Data",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"]
  },
  {
    name: "Cloud + Web",
    items: ["AWS Lambda", "API Gateway", "React Native", "FastAPI", "Node.js"]
  }
];

const experienceRoot = document.querySelector("[data-experience]");
const projectRoot = document.querySelector("[data-projects]");
const skillRoot = document.querySelector("[data-skills]");

experienceRoot.innerHTML = experience
  .map(
    (item) => `
      <article class="card timeline-card">
        <p class="meta">${item.date} / ${item.location}</p>
        <h3>${item.role}</h3>
        <p class="company">${item.company}</p>
        <ul>${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
      </article>
    `
  )
  .join("");

projectRoot.innerHTML = projects
  .map(
    (project) => `
      <a class="card project-card" href="${project.link}" target="_blank" rel="noreferrer">
        <p class="meta">${project.stack}</p>
        <h3>${project.name}</h3>
        <p>${project.summary}</p>
      </a>
    `
  )
  .join("");

skillRoot.innerHTML = skillGroups
  .map(
    (group) => `
      <article class="card skill-card">
        <h3>${group.name}</h3>
        <div class="chips">${group.items.map((skill) => `<span>${skill}</span>`).join("")}</div>
      </article>
    `
  )
  .join("");
