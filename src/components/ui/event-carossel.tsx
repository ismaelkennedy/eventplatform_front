"use client";
import React, { useEffect, useState } from "react";
import EventCard from "./card";
import api from "@/api/axiosConfig"; // Assure-toi que api est bien configuré avec l'URL de ton backend

interface Event {
  id: number;
  title: string;
  date: string;
  image: string;
  categories: { name: string }[]; // Récupérer le nom des catégories
  startTime: string;
}

const EventsCarousel = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get("/events"); // Appelle ton API Laravel
        if (response.data.success) {
          const sortedEvents = response.data.data
            .sort((a: Event, b: Event) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Trier du plus récent au plus ancien
            .slice(0, 3); 

          setEvents(sortedEvents);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des événements :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="relative">
      <h2 className="text-2xl font-bold text-white mb-6">À venir</h2>

      {loading ? (
        <p className="text-white">Chargement...</p>
      ) : events.length > 0 ? (
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4">
            {events.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}  
                date={{
                  day: new Date(event.date).getDate().toString(),
                  month: new Date(event.date).toLocaleString("fr-FR", { month: "long" }), // Convertir la date
                }}
                title={event.title}
                type={event.categories.length > 0 ? event.categories[0].name.toUpperCase() : "ÉVÉNEMENT"}
                image={event.image}
                
              />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-white">Aucun événement à afficher.</p>
      )}
    </div>
  );
};

export default EventsCarousel;
