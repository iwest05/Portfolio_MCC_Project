import './resume.css';
import { useEffect, useState } from 'react';

export default function Resume() {
   const [isMobile, setIsMobile] = useState(false);

   const resumeUrl = `${import.meta.env.BASE_URL}Iain%20West.pdf`;

   useEffect(() => {
      const mq = window.matchMedia('(max-width: 768px)');
      const apply = () => setIsMobile(mq.matches);

      apply();
      mq.addEventListener?.('change', apply);
      return () => mq.removeEventListener?.('change', apply);
   }, []);

   if (isMobile) {
      return (
         <main className="resume-page">
            <p className="resume-links">
               <a href={resumeUrl} download>
                  Download
               </a>
            </p>
         </main>
      );
   }

   return (
      <main className="resume-page">
         <div className="resume-frame">
            <iframe src={resumeUrl} title="Resume" className="resume-iframe" />
         </div>

         <p className="resume-links">
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
               Open in new tab
            </a>
            {' · '}
            <a href={resumeUrl} download>
               Download
            </a>
         </p>
      </main>
   );
}
