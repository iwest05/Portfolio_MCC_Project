import "./resume.css";

export default function Resume() {
   return (
      <main className="resume-page">
         <div className="resume-frame">
            <iframe
               src="/Iain West.pdf"
               title="Resume"
               className="resume-iframe"
            />
         </div>

         <p className="resume-links">
            <a href="/Iain West.pdf" target="_blank" rel="noopener noreferrer">
               Open in new tab
            </a>
            {" · "}
            <a href="/Iain West.pdf" download>
               Download
            </a>
         </p>
      </main>
   );
}
