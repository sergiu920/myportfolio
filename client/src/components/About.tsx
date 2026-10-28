export default function About() {
  return (
    <section id="about" className="about-section scroll-mt-16">
      <div className="about-inner mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div>
          <p className="about-eyebrow">About</p>
          <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight text-white md:text-5xl">
            I build useful things for the web.
          </h2>
          <p className="about-intro">
            I&apos;m a full-stack developer focused on web applications, APIs, and e-commerce
            solutions. I work across the interface and the systems behind it, using PHP,
            Laravel, JavaScript, and modern web technologies.
          </p>
        </div>

        <div>
          <p className="about-focus-label">Areas of focus</p>
          <ul className="about-focus-list">
            <li className="about-focus-item">
              <span className="about-focus-number">01</span>
              <div>
                <h3>Backend &amp; APIs</h3>
                <p>PHP, Laravel, and reliable services built around real workflows.</p>
              </div>
            </li>
            <li className="about-focus-item">
              <span className="about-focus-number">02</span>
              <div>
                <h3>Frontend development</h3>
                <p>Responsive interfaces with JavaScript and modern web tools.</p>
              </div>
            </li>
            <li className="about-focus-item">
              <span className="about-focus-number">03</span>
              <div>
                <h3>E-commerce</h3>
                <p>Storefronts and connected shopping experiences from browse to checkout.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}