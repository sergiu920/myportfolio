import { type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const name = String(formData.get("name"));
		const email = String(formData.get("email"));
		const inquiryType = String(formData.get("subject"));
		const message = String(formData.get("message"));
		const subject = encodeURIComponent(`${inquiryType} from ${name}`);
		const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nSubject: ${inquiryType}\n\n${message}`);

		window.location.href = `mailto:sergiu1607@gmail.com?subject=${subject}&body=${body}`;
	}

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

			<div className="contact-form-wrap">
				<p className="contact-form-heading">Or send a message</p>
				<form className="contact-form" onSubmit={handleSubmit}>
					<label>
						Name
						<input name="name" type="text" autoComplete="name" required />
					</label>
					<label>
						Email
						<input name="email" type="email" autoComplete="email" required />
					</label>
					<label>
						Subject
						<select name="subject" defaultValue="" required>
							<option value="" disabled>Select a subject</option>
							<option value="Job opportunity">Job opportunity</option>
							<option value="Freelance project">Freelance project</option>
							<option value="Other inquiry">Other inquiry</option>
						</select>
					</label>
					<label>
						Message
						<textarea name="message" rows={5} required />
					</label>
					<button type="submit">
						Send message <ArrowUpRight size={17} aria-hidden="true" />
					</button>
				</form>
			</div>
			</div>
		</section>
	);
}
