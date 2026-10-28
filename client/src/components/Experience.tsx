const experience = [
  {
    role: "Full-Stack Developer (PHP)",
    company: "Filip NET SRL",
    period: "Feb 2025 – Apr 2026",
    location: "Remote",
    highlights: [
      "Developed and maintained a large-scale tourism ERP for booking management and customer operations.",
      "Integrated the platform with external travel services.",
    ],
  },
  {
    role: "Full-Stack Developer (Laravel, Shopify)",
    company: "Subscribfy",
    period: "Apr 2024 – Dec 2024",
    location: "Timișoara",
    highlights: [
      "Built and maintained a Laravel Shopify app for merchant discounts and store credits.",
      "Integrated a Shopify theme widget for VIP membership benefits and built responsive customer and admin interfaces.",
      "Implemented charts and data tables with Polaris Viz, plus CSV exports with Laravel Excel.",
    ],
  },
  {
    role: "Full-Stack Developer (PHP, React)",
    company: "OCEANO MERCADO SRL",
    period: "Feb 2023 – Mar 2024",
    location: "Remote",
    highlights: [
      "Contributed to Supreva, a multi-vendor marketplace built with CS-Cart, PHP 7.4, and Smarty.",
      "Supported the frontend migration from Smarty to React and Material UI while maintaining the PHP backend.",
      "Built PDF document merging and buyer-vendor message approval and rejection workflows.",
    ],
  },
  {
    role: "Full-Stack Developer (Laravel, Vue.js)",
    company: "Center of Information Technologies in Finance (CTIF)",
    period: "Oct 2018 – Feb 2023",
    location: "Chișinău",
    highlights: [
      "Contributed to government and enterprise applications supporting Moldova’s Ministry of Finance.",
      "Integrated a SOAP service and built company and accountant management for the Personal Cabinet system.",
      "Implemented role-based access, application workflows, and status tracking for the Prima Casa platform.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section scroll-mt-16" aria-labelledby="experience-title">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        <div className="experience-heading">
          <div>
            <p className="experience-eyebrow">Career</p>
            <h2 id="experience-title" className="mt-3 text-3xl font-bold text-gray-950 md:text-4xl">
              Experience
            </h2>
          </div>
          <p className="experience-intro">
            Eight years building and maintaining web applications across e-commerce,
            enterprise, and public-sector platforms.
          </p>
        </div>

        <div className="experience-list">
          {experience.map((entry) => (
            <article className="experience-entry" key={entry.company}>
              <div className="experience-detail">
                <div className="experience-entry-heading">
                  <div>
                    <h3>{entry.company}</h3>
                    <p className="experience-company">{entry.role}</p>
                  </div>
                  <div className="experience-meta">
                    <p className="experience-period">{entry.period}</p>
                    <p className="experience-location">{entry.location}</p>
                  </div>
                </div>
                <ul>
                  {entry.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}