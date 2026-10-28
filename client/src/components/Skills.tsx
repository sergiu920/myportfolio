export default function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Languages & frameworks",
      skills: ["PHP", "Laravel", "JavaScript"],
    },
    {
      number: "02",
      title: "Application development",
      skills: ["Full-stack development", "Web applications", "APIs"],
    },
    {
      number: "03",
      title: "Commerce",
      skills: ["E-commerce solutions", "Online storefronts"],
    },
  ];

  return (
    <section id="skills" className="skills-section scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        <div className="skills-heading">
          <div>
            <p className="skills-eyebrow">Capabilities</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-950 md:text-4xl">
              Skills &amp; technologies
            </h2>
          </div>
          <p className="skills-intro">
            The tools and areas of work I bring together to build complete web experiences.
          </p>
        </div>

        <div className="skills-groups">
          {skillGroups.map((group) => (
            <section className="skill-group" key={group.number} aria-labelledby={`skill-group-${group.number}`}>
              <span className="skill-group-number">{group.number}</span>
              <h3 id={`skill-group-${group.number}`}>{group.title}</h3>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}