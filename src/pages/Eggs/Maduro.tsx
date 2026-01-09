import { useEffect, useState } from 'react';

export default function Maduro() {
   const [gifUrl, setGifUrl] = useState<string | null>(null);

   useEffect(() => {
      let objectUrl: string | null = null;

      fetch('/maduro-dancing-fox-news-001.gif')
         .then((res) => {
            if (!res.ok) throw new Error(`Failed to fetch gif: ${res.status}`);
            return res.blob();
         })
         .then((blob) => {
            objectUrl = URL.createObjectURL(blob);
            setGifUrl(objectUrl);
         })
         .catch(() => {
            setGifUrl(null);
         });

      return () => {
         if (objectUrl) URL.revokeObjectURL(objectUrl);
      };
   }, []);

   return (
      <div
         style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
         }}
      >
         {gifUrl ? (
            <img
               src={gifUrl}
               alt="Maduro dancing"
               style={{ maxWidth: '90vw', maxHeight: '90vh' }}
            />
         ) : (
            <div>Loading…</div>
         )}
      </div>
   );
}
