import Project, { type ProjectData } from "./Project";

const projectsData: ProjectData[] = [
  {
    number: "01",
    name: "Northstar Market",
    category: "E-commerce",
    description:
      "A storefront and inventory workspace designed for independent shops managing orders across channels.",
    technologies: ["Laravel", "PHP", "Stripe", "MySQL"],
    kind: "commerce",
  },
  {
    number: "02",
    name: "Daylight Booking",
    category: "Scheduling platform",
    description:
      "A booking experience for service teams, with shared availability and a clear view of the week ahead.",
    technologies: ["Laravel", "JavaScript", "PostgreSQL", "Redis"],
    kind: "booking",
  },
  {
    number: "03",
    name: "Signal API",
    category: "Developer tools",
    description:
      "An API operations dashboard for monitoring requests, reviewing latency, and managing service keys.",
    technologies: ["Node.js", "TypeScript", "REST API", "Docker"],
    kind: "api",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        <div className="projects-heading">
          <div>
            <p className="text-sm font-semibold text-indigo-600">Selected work</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-950 md:text-4xl">Projects</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
              A few examples of the web products and tools I build.
            </p>
          </div>
          <span className="projects-sample-label">Sample content</span>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <Project key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}