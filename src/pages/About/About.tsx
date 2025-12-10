import "./about.css";
import aboutPhoto from "./ed394cca-fa98-488c-ba7f-f4f0e1baf799.jpg";
import {useNavigate} from "react-router-dom";


export default function About() {
    const navigate = useNavigate();

    const BADGES = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "TypeScript",
        "Next.js",
        "Java",
        "SQL",
        "Spring Boot",
        "AWS",
        "Agile",
    ];

    return (
        <section className="hero about-hero">
            {/* keep these for future background layering if you want */}
            <div className="hero-bg" />
            <div className="hero-overlay" />

            <div className="hero-container about-container">
                <div className="hero-content about-content">
                    <h1 className="hero-title about-title">About</h1>

                    <p className="hero-subtitle about-subtitle">
                        Student developer focused on clean, modern web experiences.
                    </p>

                    <p className="hero-body about-body">
                        I’m focused on building responsive, accessible interfaces using React and TypeScript.
                        I enjoy turning ideas into polished UI, learning best practices, and improving with each project.
                        I’m currently expanding this site with new pages, stronger visuals, and better search as I add work.
                    </p>

                    <div className="about-badges">
                        {BADGES.map((b) => (
                            <span key={b} className="about-badge">{b}</span>
                        ))}
                    </div>


                    <div className="about-stats">
                        <div className="stat-card">
                            <div className="stat-value">Portfolio v1</div>
                            <div className="stat-label">Class project build</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-value">Mobile-first</div>
                            <div className="stat-label">Responsive layouts</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-value">Learning</div>
                            <div className="stat-label">Shipping weekly improvements</div>
                        </div>
                    </div>

                    <div className="about-cta">
                        <button
                            className="about-btn primary"
                            onClick={() => navigate("/projects")}
                        >
                            See class work
                        </button>
                        <button
                            className="about-btn ghost"
                            onClick={() => navigate("/contact")}
                        >
                            Contact
                        </button>
                        <button
                            className="about-btn ghost"
                            onClick={() => navigate("/resume")}
                        >
                            Resume
                        </button>
                    </div>

                </div>

                <div className="about-photo-wrap">
                    <div className="about-photo-frame">
                        <img src={aboutPhoto} alt="Portrait" className="about-photo-img" />
                    </div>

                    <div className="about-photo-caption">
                        <span className="pulse-dot" />
                        Currently building: polished, responsive experiences.
                    </div>
                </div>
            </div>
        </section>
    );
}