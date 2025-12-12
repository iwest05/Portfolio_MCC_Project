import "./contact.css";
import { type FormEvent, useState } from "react";
import {FaGithub} from "react-icons/fa";
import {CiLinkedin} from "react-icons/ci";
import {RiTwitterXFill} from "react-icons/ri";
import {SiMinutemailer} from "react-icons/si";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "sent">("idle");

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const first = String(form.get("firstName") || "").trim();
        const last = String(form.get("lastName") || "").trim();
        const email = String(form.get("email") || "").trim();
        const message = String(form.get("message") || "").trim();

        const to = "yukaidu.doralice@gmail.com"; // change to yours
        const subject = `Portfolio Contact${first || last ? ` - ${first} ${last}` : ""}`.trim();
        const body =
            `Name: ${[first, last].filter(Boolean).join(" ") || "N/A"}\n` +
            `Email: ${email || "N/A"}\n\n` +
            `${message}`;

        window.location.href =
            `mailto:${encodeURIComponent(to)}` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        setStatus("sent");
        e.currentTarget.reset();
    }

    return (
        <main className="contact-page">
            <div className="contact-container">
                <div className="contact-card">
                    <div className="contact-grid">
                        {/* LEFT */}
                        <div className="contact-left">
                            <h1 className="contact-title">Get in Touch</h1>

                            <p className="contact-subtitle">I'd like to hear from you!</p>

                            <p className="contact-body">
                                If you have any inquiries or just want to say hi, please use the contact form!
                            </p>

                            <div className="contact-links">
                                <a className="contact-email" href="mailto:yukaidu.doralice@gmail.com">
                                    <span className="contact-icon" aria-hidden="true"><SiMinutemailer /></span>
                                    iwest05@gmail.com
                                </a>

                                <div className="contact-socials" aria-label="Social links">
                                    <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
                                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><CiLinkedin /></a>
                                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="X"><RiTwitterXFill /></a>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="contact-right">
                            <form className="contact-form" onSubmit={onSubmit}>
                                <div className="contact-row">
                                    <div className="contact-field">
                                        <label htmlFor="firstName">First Name</label>
                                        <input id="firstName" name="firstName" type="text" autoComplete="given-name" />
                                    </div>

                                    <div className="contact-field">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input id="lastName" name="lastName" type="text" autoComplete="family-name" />
                                    </div>
                                </div>

                                <div className="contact-field">
                                    <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
                                    <input id="email" name="email" type="email" required autoComplete="email" />
                                </div>

                                <div className="contact-field">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" rows={6} />
                                </div>

                                <div className="contact-actions">
                                    <button className="contact-btn" type="submit">Send</button>
                                    {status === "sent" && <span className="contact-status">Opened your mail app.</span>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
