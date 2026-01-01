import './home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
   const navigate = useNavigate();

   return (
      <section className="hero">
         <div className="bg" />
         <div className="overlay" />

         <div className="container">
            <div className="content">
               <h1 className="title">Welcome to my portfolio</h1>
               <p className="subtitle">React • TypeScript • UI + logic</p>
               <p className="body">
                  This site is a playground for what I’ve learned.
               </p>

               <button className="cta" onClick={()=> navigate("/about")}>
                  See more
               </button>
            </div>
         </div>
      </section>
   );
}
