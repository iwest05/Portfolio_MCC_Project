import './home.css';

export default function Home() {
   return (
      <section className="hero">
         <div className="bg" />
         <div className="overlay" />

         <div className="container">
            <div className="content">
               <h1 className="title">Lorem ipsum</h1>
               <p className="subtitle">dolor sit amet</p>
               <p className="body">
                  This is placeholder text for your class portfolio. Replace
                  this with a short summary of who you are and what you build.
               </p>

               <a className="cta" href="#">
                  See more
               </a>
            </div>
         </div>
      </section>
   );
}
