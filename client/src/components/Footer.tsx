export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="site-footer">
			<div className="site-footer-inner mx-auto max-w-6xl px-4 py-6">
				<div className="footer-identity">
					<a href="#" aria-label="Serghei Muntean, back to top">Serghei Muntean</a>
					<span>Full-Stack Developer</span>
				</div>

				<nav className="footer-socials" aria-label="Social profiles">
					<a
						href="https://linkedin.com/in/serghei-muntean"
						target="_blank"
						rel="noreferrer"
						aria-label="LinkedIn profile"
						title="LinkedIn"
					>
						<svg viewBox="0 0 24 24" aria-hidden="true">
							<path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.42v6.32ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56c0 .95.79 1.72 1.77 1.72h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
						</svg>
					</a>
					<a
						href="https://github.com/sergiu920"
						target="_blank"
						rel="noreferrer"
						aria-label="GitHub profile"
						title="GitHub"
					>
						<svg viewBox="0 0 19 19" aria-hidden="true">
							<use href="/icons.svg#github-icon" />
						</svg>
					</a>
				</nav>

				<div className="footer-meta">
					<p>© {currentYear} Serghei Muntean</p>
					<p>Built with React &amp; TypeScript</p>
				</div>
			</div>
		</footer>
	);
}
