import { useEffect, useState } from 'react';

export default function Diddy() {
   const [imgUrl, setImgUrl] = useState<string | null>(null);

   useEffect(() => {
      let objectUrl: string | null = null;

      fetch('/img.png')
         .then((res) => {
            if (!res.ok) throw new Error(`Failed to fetch gif: ${res.status}`);
            return res.blob();
         })
         .then((blob) => {
            objectUrl = URL.createObjectURL(blob);
            setImgUrl(objectUrl);
         })
         .catch(() => {
            setImgUrl(null);
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
         {imgUrl ? (
            <img
               src={imgUrl}
               alt="Diddy Juice"
               style={{ maxWidth: '90vw', maxHeight: '90vh' }}
            />
         ) : (
            <div>Loading…</div>
         )}
      </div>
   );
}
