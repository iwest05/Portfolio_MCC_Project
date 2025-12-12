import './Header.css';
import { type FormEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo.png';

export default function Header() {
   const [open, setOpen] = useState(false);

   const linkClass = ({ isActive }: { isActive: boolean }) =>
      `nav-link ${isActive ? 'is-active' : ''}`;

   const navigate = useNavigate();
   const [query, setQuery] = useState('');
   const submitSearch = (e: FormEvent) => {
      e.preventDefault();
      const q = query.trim();
      if (!q) return;
      navigate(`/search?q=${encodeURIComponent(q)}`);
      setQuery('');
   };

   return (
      <header className="site-header">
         <div className="nav-container">
            {/* LEFT: LOGO CIRCLE */}
            <div className="brand-group">
               <NavLink className="brand-badge" to="/" aria-label="Home">
                  <img src={logo} alt="Logo" className="brand-badge-img" />
               </NavLink>

               {/* Mobile Hamburger */}
               <button
                  className="hamburger"
                  type="button"
                  aria-label="Open menu"
                  aria-expanded={open}
                  aria-controls="mobile-nav"
                  onClick={() => setOpen((v) => !v)}
               >
                  <span className="hamburger-bar"></span>
                  <span className="hamburger-bar"></span>
                  <span className="hamburger-bar"></span>
               </button>
            </div>

            {/* RIGHT: NAV + SEARCH */}
            <div className="nav-right">
               <nav
                  id="mobile-nav"
                  className={`nav ${open ? 'is-open' : ''}`}
                  onClick={(e) => {
                     if ((e.target as HTMLElement).tagName === 'A')
                        setOpen(false);
                  }}
               >
                  <NavLink to="/" className={linkClass}>
                     Home
                  </NavLink>
                  <NavLink to="/about" className={linkClass}>
                     About
                  </NavLink>
                  <NavLink to="/contact" className={linkClass}>
                     Contact
                  </NavLink>
               </nav>

               <form
                  className="search-pill"
                  role="search"
                  onSubmit={submitSearch}
               >
                  <span className="search-icon">
                     <BiSearchAlt />
                  </span>
                  <input
                     className="search-input"
                     type="search"
                     placeholder="Search"
                     aria-label="Search"
                     value={query}
                     onChange={(e) => setQuery(e.target.value)}
                  />
               </form>
            </div>
         </div>
      </header>
   );
}
