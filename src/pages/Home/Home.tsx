import "./home.css";

export default function Home() {
    return (
        <section className="hero">
            <div className="hero-bg" />
            <div className="hero-overlay" />

            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">Lorem ipsum</h1>
                    <p className="hero-subtitle">dolor sit amet</p>
                    <p className="hero-body">
                        This is placeholder text for your class portfolio. Replace this with
                        a short summary of who you are and what you build.
                    </p>

                    <a className="hero-cta" href="#">See more</a>
                </div>
            </div>
        </section>
    );
}
