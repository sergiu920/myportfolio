import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
	return (
		<section id="contact" className="contact-section scroll-mt-16" aria-labelledby="contact-title">
			<div className="contact-inner mx-auto max-w-6xl px-4 py-20 md:py-24">
				<div className="contact-copy">
					<p className="contact-eyebrow">Contact</p>
					<h2 id="contact-title" className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
						Let&apos;s build something useful.
					</h2>
					<p className="contact-intro">
						Have a web project, collaboration, or full-stack role in mind? Get in touch.
					</p>
					<div className="contact-location">
						<MapPin size={18} aria-hidden="true" />
						<span>Timișoara, Romania</span>
					</div>
				</div>

				<div className="contact-details">
					<a className="contact-method" href="mailto:sergiu1607@gmail.com">
						<Mail size={20} aria-hidden="true" />
						<span>
							<span className="contact-method-label">Email</span>
							<span className="contact-method-value">sergiu1607@gmail.com</span>
						</span>
						<ArrowUpRight size={18} aria-hidden="true" />
					</a>
					<a className="contact-method" href="tel:+40799351388">
						<Phone size={20} aria-hidden="true" />
						<span>
							<span className="contact-method-label">Phone</span>
							<span className="contact-method-value">+40 799 351 388</span>
						</span>
						<ArrowUpRight size={18} aria-hidden="true" />
					</a>

					<div className="contact-socials">
						<a href="https://linkedin.com/in/serghei-muntean" target="_blank" rel="noreferrer">
							LinkedIn <ArrowUpRight size={15} aria-hidden="true" />
						</a>
						<a href="https://github.com/sergiu920" target="_blank" rel="noreferrer">
							GitHub <ArrowUpRight size={15} aria-hidden="true" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
