export type ProjectData = {
  number: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  kind: "commerce" | "booking" | "api";
};

type ProjectProps = {
  project: ProjectData;
};

function ProjectPreview({ kind }: Pick<ProjectData, "kind">) {
  if (kind === "commerce") {
    return (
      <div className="store-preview">
        <div className="store-preview-sidebar">
          <span className="store-preview-mark">N</span>
          <span />
          <span />
          <span />
        </div>
        <div className="store-preview-main">
          <div className="preview-toolbar">
            <span>Overview</span>
            <span className="preview-avatar">SM</span>
          </div>
          <div className="preview-greeting">Good morning</div>
          <div className="store-preview-stats">
            <div><span>Revenue</span><strong>$12,840</strong></div>
            <div><span>Orders</span><strong>248</strong></div>
          </div>
          <div className="store-preview-chart"><i /><i /><i /><i /><i /><i /><i /></div>
        </div>
      </div>
    );
  }

  if (kind === "booking") {
    return (
      <div className="booking-preview">
        <div className="booking-preview-header">
          <div><span>Weekly schedule</span><strong>June 10 – 16</strong></div>
          <span className="booking-preview-action">+ New booking</span>
        </div>
        <div className="booking-preview-days">
          {[
            ["MON", "10"],
            ["TUE", "11"],
            ["WED", "12"],
            ["THU", "13"],
          ].map(([day, date]) => (
            <div className="booking-preview-day" key={day}>
              <span>{day}</span><strong>{date}</strong>
            </div>
          ))}
        </div>
        <div className="booking-preview-slots">
          <span />
          <span className="booking-slot booking-slot--blue">Consultation</span>
          <span className="booking-slot booking-slot--coral">Design review</span>
          <span />
          <span className="booking-slot booking-slot--green">New client</span>
          <span />
          <span />
          <span className="booking-slot booking-slot--blue">Follow-up</span>
        </div>
      </div>
    );
  }

  return (
    <div className="api-preview">
      <div className="api-preview-top"><span>signal / api</span><span>● operational</span></div>
      <div className="api-preview-metric"><span>Requests today</span><strong>2.48M</strong><i>+12.8%</i></div>
      <div className="api-preview-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
      <div className="api-preview-log"><span>GET</span><span>/v1/events</span><strong>200</strong><small>84ms</small></div>
    </div>
  );
}

export default function Project({ project }: ProjectProps) {
  return (
    <article className={`project-card project-card--${project.kind}`}>
      <div className={`project-preview project-preview--${project.kind}`} aria-hidden="true">
        <ProjectPreview kind={project.kind} />
      </div>
      <div className="project-card-content">
        <div className="project-card-meta">
          <span>{project.category}</span>
          <span>Sample project</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="project-technologies" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}