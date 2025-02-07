"use client";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "@/api/axiosConfig"; // Assure-toi que api est bien configuré
import { XCircle } from "lucide-react"; // Icône pour la désinscription

interface Event {
  id: number;
  title: string;
  date: string;
  image: string;
  categories: { name: string }[];
}

const EventRegister = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Token manquant. Veuillez vous reconnecter.");
        return;
      }

      const response = await api.get("/my-events", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data && response.data.success && Array.isArray(response.data.events)) {
        setEvents(
          response.data.events
            .sort((a: Event, b: Event) => new Date(b.date).getTime() - new Date(a.date).getTime())
        );
      } else {
        setError("Aucun événement trouvé.");
        setEvents([]);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des événements :", error);
      setError("Impossible de récupérer les événements.");
    } finally {
      setLoading(false);
    }
  };

  const handleUnregister = async (eventId: number) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Token manquant. Veuillez vous reconnecter.");
        return;
      }

      await api.delete(`/events/${eventId}/unregister`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Met à jour la liste après la suppression
      setEvents(events.filter(event => event.id !== eventId));
    } catch (error) {
      console.error("Erreur lors de la désinscription :", error);
      setError("Impossible de se désinscrire.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Mes événements</h2>

      {loading ? (
        <p className="text-white">Chargement...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : events.length === 0 ? (
        <p className="text-white">Aucun événement trouvé.</p>
      ) : (
        <div className="flex flex-col items-center gap-4 w-full max-w-lg">
  {events.map((event) => (
    <div
      key={event.id}
      className="flex items-center cursor-pointer hover:bg-white/10 p-2 rounded-lg transition w-full"
    >
      <img
        src={event.image}
        alt={event.title}
        className="w-[99px] h-[82px] object-cover rounded-xl"
        onClick={() => navigate(`/event/${event.id}`)}
      />
      <div className="ml-4 flex-1" onClick={() => navigate(`/event/${event.id}`)}>
        <div className="text-gray-400 text-sm">{new Date(event.date).toLocaleDateString("fr-FR")}</div>
        <div className="text-white text-lg font-bold">{event.title}</div>
      </div>
      <XCircle
        className="w-6 h-6 text-red-500 hover:text-red-700 transition cursor-pointer"
        onClick={() => handleUnregister(event.id)}
      />
     </div>
      ))}
      </div>
        
      )}
    </div>
  );
};

export default EventRegister;
