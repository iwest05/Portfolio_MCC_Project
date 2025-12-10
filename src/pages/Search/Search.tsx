import { useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import "./search.css"

type SearchItem = {
    title: string;
    path: string;
    keywords: string[];
    excerpt?: string;
};

// Add/remove items as your site grows
const SEARCH_INDEX: SearchItem[] = [
    {
        title: "Home",
        path: "/",
        keywords: [
            "home", "start", "landing", "welcome", "hello",
            "hero", "intro", "overview", "portfolio", "videograph",
            "student", "class", "project"
        ],
        excerpt: "Landing page and intro.",
    },
    {
        title: "About",
        path: "/about",
        keywords: [
            // core about intent
            "about", "about me", "bio", "biography", "me", "who i am",
            "background", "story", "education", "student", "code school",
            "class project", "portfolio v1", "learning", "work",

            // focus areas you literally mention
            "mobile-first", "responsive", "responsive design",
            "accessibility", "a11y", "modern web", "clean ui", "ui",

            // your current tech + roadmap badges
            "html", "css", "javascript",
            "react", "typescript", "next.js",
            "java", "sql", "spring boot",
            "aws", "agile",

            // general matching terms people will type
            "frontend", "front-end", "full stack", "full-stack",
            "web development", "software", "developer"
        ],
        excerpt: "Student developer focused on mobile-first, responsive, accessible web experiences.",
    },
    {
        title: "Contact",
        path: "/contact",
        keywords: [
            "contact", "email", "reach", "message", "connect",
            "social", "linkedin", "github", "portfolio contact",
            "hire", "work with me", "collaborate", "name", "email"
        ],
        excerpt: "Ways to get in touch.",
    },
    {
        title: "Skills",
        path: "/skills",
        keywords: [
            "skills", "tech stack", "tools", "languages",
            "javascript", "typescript", "react", "html", "css",
            "ui", "ux", "school"
        ],
        excerpt: "Technologies and tools I use.",
    },
    {
        title: "Resume",
        path: "/resume",
        keywords: [
            "resume", "cv", "experience", "education",
            "work history", "download", "certifications"
        ],
        excerpt: "My experience and education summary.",
    },
];

export default function Search() {
    const [params] = useSearchParams();
    const q = (params.get("q") ?? "").trim().toLowerCase();

    const results = useMemo(() => {
        if (!q) return [];

        const tokens = q
            .toLowerCase()
            .split(/\s+/)
            .filter(Boolean);

        return SEARCH_INDEX.filter(item => {
            const hay = [item.title, ...(item.keywords ?? []), item.excerpt ?? ""]
                .join(" ")
                .toLowerCase();

            // match ANY word
            return tokens.some(t => hay.includes(t));
        });
    }, [q]);

    return (
        <section className="page page-search">
            <div className="page-container">
                <div className="page-content">
                    <h1 className="page-title">Search</h1>
                    <p className="page-subtitle">
                        Query: <strong>{q || "—"}</strong>
                    </p>

                    {!q && <p className="page-body">Type a search in the header.</p>}
                    {q && results.length === 0 && (
                        <p className="page-body">No results found.</p>
                    )}

                    {results.length > 0 && (
                        <ul className="search-results">
                            {results.map(r => (
                                <li key={r.path} className="search-result">
                                    <Link className="search-link" to={r.path}>{r.title}</Link>
                                    {r.excerpt && (
                                        <div className="search-excerpt">{r.excerpt}</div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
}
