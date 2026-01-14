import { useEffect, useMemo, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import './search.css';

type SearchItem = {
   title: string;
   path: string;
   keywords: string[];
   excerpt?: string;
};

export default function Search() {
   const [params] = useSearchParams();
   const query = (params.get('data') ?? '').trim().toLowerCase();

   const [index, setIndex] = useState<SearchItem[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      let alive = true;

      (async () => {
         try {
            const res = await fetch(`${import.meta.env.BASE_URL}search-index.json`); // put file in /public for this path
            const data = (await res.json()) as SearchItem[];
            if (alive) setIndex(data);
         } catch {
            if (alive) setIndex([]);
         } finally {
            if (alive) setLoading(false);
         }
      })();

      return () => {
         alive = false;
      };
   }, []);

   const results = useMemo(() => {
      if (!query) return [];

      const tokens = query.split(/\s+/).filter(Boolean);

      return index.filter((item) => {
         const hay = [item.title, ...(item.keywords ?? []), item.excerpt ?? '']
            .join(' ')
            .toLowerCase();

         return tokens.some((t) => hay.includes(t));
      });
   }, [query, index]);

   return (
      <section className="page page-search">
         <div className="page-container">
            <div className="page-content">
               <h1 className="page-title">Search</h1>
               <p className="page-subtitle">
                  Query: <strong>{query || '—'}</strong>
               </p>

               {loading && <p className="page-body">Loading search…</p>}
               {!loading && !query && (
                  <p className="page-body">Type a search in the header.</p>
               )}
               {!loading && query && results.length === 0 && (
                  <p className="page-body">No results found.</p>
               )}

               {results.length > 0 && (
                  <ul className="search-results">
                     {results.map((r) => (
                        <li key={r.path} className="search-result">
                           <Link className="search-link" to={r.path}>
                              {r.title}
                           </Link>
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
