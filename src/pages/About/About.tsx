import './about.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

type AboutData = {
   page: {
      title: string;
      subtitle: string;
      body: string;
      experience: {
         years: number;
         sentence: string;
      };
      photo: {
         alt: string;
         caption: string;
      };
   };
   badges: string[];
   stats: Array<{ value: string; label: string }>;
   cta: Array<{ label: string; to: string; variant: 'primary' | 'ghost' }>;
};

type ChuckNorrisJoke = {
   value: string;
};

export default function About() {
   const navigate = useNavigate();

   const [aboutData, setAboutData] = useState<AboutData | null>(null);
   const [photoOfMe, setPhotoOfMe] = useState<string | null>(null);
   const [error, setError] = useState('');

   const [quote, setQuote] = useState('');
   const [quoteError, setQuoteError] = useState('');

   useEffect(() => {
      let cancelled = false;

      async function load() {
         const res = await fetch(`${import.meta.env.BASE_URL}about_data.json`);

         if (!res.ok) {
            if (!cancelled) setError(`HTTP ${res.status}`);
            return;
         }

         const data = (await res.json()) as AboutData;
         if (cancelled) return;

         setPhotoOfMe('/about_photo.jpg');
         setAboutData(data);

         try {
            const quoteRes = await fetch(
               'https://api.chucknorris.io/jokes/random',
            );
            if (!quoteRes.ok) {
               if (!cancelled) setQuoteError(`HTTP ${quoteRes.status}`);
               return;
            }

            const joke = (await quoteRes.json()) as ChuckNorrisJoke;
            if (cancelled) return;

            setQuote(joke.value);
         } catch {
            if (!cancelled) setQuoteError('Network error');
         }
      }

      load();
      return () => {
         cancelled = true;
      };
   }, []);

   if (error)
      return <main className="about-page">Failed to load: {error}</main>;
   if (!aboutData) return <main className="about-page"></main>;

   const { page, badges, stats, cta } = aboutData;

   return (
      <main className="about-page">
         <section className="about-stage">
            <div className="about-container">
               <div className="about-content">
                  <h1 className="about-title">{page.title}</h1>

                  <p className="about-subtitle">{page.subtitle}</p>

                  <p className="about-body">{page.body}</p>

                  <p className="about-experience">
                     {page.experience.years} {page.experience.sentence}
                  </p>

                  <div className="about-badges">
                     {badges.map((b) => (
                        <span key={b} className="about-badge">
                           {b}
                        </span>
                     ))}
                  </div>

                  <div className="about-stats">
                     {stats.map((s) => (
                        <div
                           key={`${s.value}-${s.label}`}
                           className="stat-card"
                        >
                           <div className="stat-value">{s.value}</div>
                           <div className="stat-label">{s.label}</div>
                        </div>
                     ))}
                  </div>

                  <div className="about-cta">
                     {cta.map((btn) => {
                        const isExternal = /^https?:\/\//.test(btn.to);

                        return (
                           <button
                              key={btn.to}
                              className={`about-btn ${btn.variant}`}
                              onClick={() => {
                                 if (isExternal) {
                                    window.open(
                                       btn.to,
                                       '_blank',
                                       'noopener,noreferrer',
                                    );
                                 } else {
                                    navigate(btn.to);
                                 }
                              }}
                           >
                              {btn.label}
                           </button>
                        );
                     })}
                  </div>
               </div>

               <div className="about-photo-wrap">
                  <div className="about-photo-frame">
                     <img
                        src={photoOfMe ?? undefined}
                        alt={page.photo.alt}
                        className="about-photo-img"
                     />
                  </div>

                  <div className="about-photo-caption">
                     <span className="pulse-dot" />
                     {page.photo.caption}
                  </div>
               </div>
            </div>
         </section>
         {(quote || quoteError) && (
            <div className="quote-bar" aria-live="polite">
               {quote ? `“${quote}”` : ''}
            </div>
         )}
      </main>
   );
}
