import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


interface Event {
    id: number;
    title: string;
    date: string;
    location: string;
    image: string;
}

interface MyComponentProps {
    categoryId: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ categoryId }) => {
    const [events, setEvents] = useState<Event[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!categoryId) return;
        
        axios.get(`http://127.0.0.1:8000/api/events/by-category/${categoryId}`)
            .then(response => setEvents(response.data.data))
            .catch(error => console.error("Erreur lors du chargement des événements :", error));
    }, [categoryId]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            {events.length === 0 ? (
                <p className="text-white text-center">Aucun événement trouvé.</p>
            ) : (
                events.map((event) => (
                  <div
                    key={event.id}
                    className="relative w-[420.6px] h-[96.7px] rounded-lg flex justify-between p-2 shadow-xl my-4 cursor-pointer"
                    onClick={() => navigate(`/event/${event.id}`)}
                   >
                        
                        <div className="flex items-center space-x-1 absolute">
                            
                            <div className="flex flex-col space-y-1">
                              <h2 className="text-lg font-semibold text-white first-letter:uppercase" 
                                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bold', fontSize: '18px', lineHeight: '24px' }}>
                                {event.title}
                              </h2>
                              <p className="text-sm text-white">
                                {new Date(event.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                              </p>
                              <p className="text-sm text-white/50 first-letter:uppercase">
                                {event.location}
                              </p>
                            </div>
                        </div>

                        <div className="absolute right-0 top-0 w-[141.6px] h-[96.7px] ">
                          <img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-full object-cover rounded-r-lg border opacity-50"
                          />
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default MyComponent;