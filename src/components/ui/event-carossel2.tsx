"use client";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import api from "@/api/axiosConfig"; 

interface Event {
  id: number;
  title: string;
  date: string;
  image: string;
  categories: { name: string }[];
}

const EventsCarousel2 = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token manquant");
        return;
      }

      const response = await api.get("/organizer/events", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        setEvents(
          response.data.data
            .sort((a: Event, b: Event) => new Date(b.date).getTime() - new Date(a.date).getTime())
            
        );
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des événements :", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (eventId: number) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token manquant");
        return;
      }

      await api.delete(`/deleteEvents/${eventId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      
      setEvents(events.filter(event => event.id !== eventId));
    } catch (error) {
      console.error("Erreur lors de la suppression de l'événement :", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {loading ? (
        <p className="text-white">Chargement...</p>
      ) : events.length === 0 ? (
        <p className="text-white">Aucun événement trouvé.</p>
      ) : (
        events.map((event) => (
          <div
            key={event.id}
            className="flex items-center justify-between shadow-2xl rounded-lg w-[500px] mb-5"
          >
            <div className="flex items-center cursor-pointer" onClick={() => navigate(`/event/${event.id}`)}>
              <img
                src={event.image}
                alt={event.title}
                className="w-[99px] h-[82px] object-cover rounded-xl"
              />
              <div className="ml-4">
                <div className="text-white text-lg font-bold">{event.title}</div>
                <div className="text-gray-400 text-sm">{new Date(event.date).toLocaleDateString("fr-FR")}</div>
                
              </div>
            </div>

            <div className="flex gap-3">
              
              <FiEdit
                className="text-blue-400 hover:text-blue-600 cursor-pointer text-xl"
                onClick={() => navigate(`/edit-event/${event.id}`)}
              />

              
              <FiTrash2
                className="text-red-400 hover:text-red-600 cursor-pointer text-xl"
                onClick={() => handleDelete(event.id)}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default EventsCarousel2;
