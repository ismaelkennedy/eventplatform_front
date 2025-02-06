import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import EventHeader from "@/components/ui/eventDetail";
import EventInfo from "@/components/ui/eventInfo";
import Bouton from "@/components/ui/bouton";

interface EventData {
  id: number;
  image: string;
  type: string;
  title: string;
  date: string;
  location: string;
  startTime: string;
  description: string;
}

export default function EventPage() {
  const { id } = useParams<{ id: string }>();
  const [eventData, setEventData] = useState<EventData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isParticipating, setIsParticipating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/events/${id}`);
        if (response.data.success) {
          setEventData(response.data.data);
        } else {
          setError("Événement non trouvé");
        }
      } catch (err) {
        setError("Erreur lors du chargement de l'événement");
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  // Vérifier si l'utilisateur est inscrit à l'événement
  useEffect(() => {
    const checkParticipation = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get(
            `http://127.0.0.1:8000/api/events/${id}/is_participant`, 
            { headers: { Authorization: `Bearer ${token}` } }
          );
          setIsParticipating(response.data.isParticipant);
        } catch (error) {
          console.error("Erreur lors de la vérification de la participation");
        }
      }
    };

    checkParticipation();
  }, [id]);

  const handleParticipation = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Redirige vers la page de login si l'utilisateur n'est pas connecté
      navigate("/login");
      return;
    }

    try {
      if (isParticipating) {
        // Désinscrire l'utilisateur de l'événement
        await axios.delete(
          `http://127.0.0.1:8000/api/events/${id}/unregister`, 
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setIsParticipating(false);
        alert("Désinscription réussie");
      } else {
        // Inscrire l'utilisateur à l'événement
        await axios.post(
          `http://127.0.0.1:8000/api/events/${id}/register`, 
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setIsParticipating(true);
       
      }
    } catch (err) {
      console.error("Erreur lors de l'inscription ou de la désinscription");
    }
  };

  if (loading) return <p className="text-white text-center">Chargement...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!eventData) return null;

  // Transformer la date "2025-03-20" en { day: "20", month: "Mars" }
  const formatDate = (dateString: string) => {
    const dateObj = new Date(dateString);
    const months = [
      "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];
    return {
      day: dateObj.getDate().toString(),
      month: months[dateObj.getMonth()],
    };
  };

  return (
    <div className="rounded-md bg-gradient-to-b from-[#121111] from-60% to-black to-100% flex-1">
      <div className="mx-40 my-4 flex flex-col items-center justify-center">
        <EventHeader
          image={eventData.image}
          type={eventData.type}
          title={eventData.title}
          date={formatDate(eventData.date)} // 🔥 Convertit la date en { day, month }
          location={eventData.location}
        />
        <EventInfo startTime={eventData.date.split(" ")[1]} description={eventData.description} />
        <div className="w-full flex justify-center mt-6">
          <Bouton 
            label={isParticipating ? "Vous participez déjà" : "Participer"} 
            onClick={handleParticipation} 
            disabled={isParticipating}
          />
        </div>
      </div>
    </div>
  );
}
