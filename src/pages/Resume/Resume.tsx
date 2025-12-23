export default function Resume() {
    return (
       <main style={{ padding: "24px" }}>
           <h1 style={{ marginBottom: "16px" }}>Resume</h1>

           <div style={{ height: "80vh" }}>
               <iframe
                  src="/Iain West.pdf"
                  title="Resume"
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
               />
           </div>

           <p style={{ marginTop: "12px" }}>
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