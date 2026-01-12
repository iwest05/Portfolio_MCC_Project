import "./resume.css";

export default function Resume() {
   const resumeUrl = `${import.meta.env.BASE_URL}Iain%20West.pdf`;

   return (
      <main className="resume-page">
         <div className="resume-frame">
            <iframe
               src={resumeUrl}
               title="Resume"
               className="resume-iframe"
            />
         </div>

         <p className="resume-links">
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
               Open in new tab
            </a>
            {" · "}
            <a href={resumeUrl} download>
               Download
            </a>
         </p>
      </main>
   );
}
