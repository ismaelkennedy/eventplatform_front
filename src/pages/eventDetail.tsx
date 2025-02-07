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
      
      navigate("/login");
      return;
    }

    try {
      if (isParticipating) {
        
        await axios.delete(
          `http://127.0.0.1:8000/api/events/${id}/unregister`, 
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setIsParticipating(false);
        alert("Désinscription réussie");
      } else {
        
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

  
  const formatDate = (dateString: string) => {
    const dateObj = new Date(dateString);
    const months = [
      "JAN", "FEV", "MARS", "AVR", "MAI", "JUI",
      "JUIL", "AOUT", "SEPT", "OCT", "NOV", "DEC"
    ];
    return {
      day: dateObj.getDate().toString(),
      month: months[dateObj.getMonth()],
    };
  };
  

  return (
    <div className="rounded-md bg-gradient-to-b from-[#121111] from-60% to-black to-100% flex-1">
      <div className="mx-40 my-10 flex flex-col items-center justify-center">
        <EventHeader
          image={eventData.image}
          type={eventData.type}
          title={eventData.title}
          date={formatDate(eventData.date)} 
          location={eventData.location}
        />
        <EventInfo startTime={eventData.date.split(" ")[1]} description={eventData.description} />
        <div className="w-full flex justify-center mt-6 pb-5">
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
