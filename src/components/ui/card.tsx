// export default function ConcertCard() {
//     return (
//       <div className="max-w-sm">
//         <div
//           className="relative h-[500px] w-[500px] rounded-[32px] overflow-hidden"
//           style={{
//             backgroundImage: "url('/src/assets/tiakola-foreztival.jpg.webp')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           {/* Date badge */}
//           <div className="absolute right-6 top-6 bg-white/90 backdrop-blur-sm rounded-[16px] p-3 text-center">
//             <div className="text-purple-600 text-sm font-medium">Mars</div>
//             <div className="text-2xl font-bold">17</div>
//           </div>
  
//           {/* Content overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
//             <div className="absolute bottom-8 left-8">
//               <div className="text-white/80 text-sm tracking-wider mb-2">
//                 CONCERT
//               </div>
//               <h2 className="text-white text-4xl font-medium">Jinjer</h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }



// suggestion
type ConcertCardProps = {
    image: string; // URL de l'image
    date: string | number; // Date sous forme de texte ou de chiffre
    month: string; // Mois du concert
    title: string; // Titre du concert
    type: "concert" | "festival" | "show"; // Type d'événement (valeurs limitées)
  };
  
  export default function ConcertCard({
    image,
    date,
    month,
    title,
    type,
  }: ConcertCardProps) {
    return (
      <div className="max-w-sm">
        <div
          className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-[32px] overflow-hidden transform hover:scale-105 transition-transform duration-300"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label={`Affiche du concert ${title}`}
        >
          {/* Date badge */}
          <div className="absolute right-6 top-6 bg-white/90 backdrop-blur-sm rounded-[16px] p-3 text-center">
            <div className="text-purple-600 text-sm font-medium">{month}</div>
            <div className="text-2xl font-bold">{date}</div>
          </div>
  
          {/* Content overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
            <div className="absolute bottom-8 left-8">
              <div className="text-white/80 text-sm tracking-wider mb-2">
                {type.toUpperCase()}
              </div>
              <h2 className="text-white text-4xl font-medium">{title}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

// import { useEffect, useState } from "react";

// type Concert = {
//   id: number; // ID unique du concert
//   image: string; // URL de l'image
//   date: string; // Date du concert (ex: "2025-03-17")
//   title: string; // Nom de l'artiste ou événement
//   type: string; // Type d'événement (ex: "concert", "festival")
// };

// export default function ConcertCardList() {
//   const [concerts, setConcerts] = useState<Concert[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   // Simule une requête API pour récupérer les concerts
//   useEffect(() => {
//     const fetchConcerts = async () => {
//       try {
//         setIsLoading(true);
//         // Remplacez cette URL par celle de votre backend
//         const response = await fetch("https://api.example.com/concerts");
//         const data: Concert[] = await response.json();
//         setConcerts(data);
//       } catch (error) {
//         console.error("Erreur lors de la récupération des concerts :", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchConcerts();
//   }, []);

//   if (isLoading) {
//     return <div className="text-center">Chargement des concerts...</div>;
//   }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {concerts.map((concert) => (
//         <ConcertCard key={concert.id} {...concert} />
//       ))}
//     </div>
//   );
// }

// function ConcertCard({ image, date, title, type }: Concert) {
//   const [month, day] = formatDate(date); // Formater la date pour extraire le mois et le jour

//   return (
//     <div className="max-w-sm">
//       <div
//         className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-[32px] overflow-hidden transform hover:scale-105 transition-transform duration-300"
//         style={{
//           backgroundImage: `url(${image})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         role="img"
//         aria-label={`Affiche du concert ${title}`}
//       >
//         {/* Date badge */}
//         <div className="absolute right-6 top-6 bg-white/90 backdrop-blur-sm rounded-[16px] p-3 text-center">
//           <div className="text-purple-600 text-sm font-medium">{month}</div>
//           <div className="text-2xl font-bold">{day}</div>
//         </div>

//         {/* Content overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
//           <div className="absolute bottom-8 left-8">
//             <div className="text-white/80 text-sm tracking-wider mb-2">
//               {type.toUpperCase()}
//             </div>
//             <h2 className="text-white text-4xl font-medium">{title}</h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Fonction utilitaire pour formater une date en "mois" et "jour"
// function formatDate(date: string): [string, string] {
//   const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
//   const formatted = new Date(date).toLocaleDateString("fr-FR", options).split(" ");
//   return [formatted[0], formatted[1]]; // Renvoie [mois, jour]
// }

  