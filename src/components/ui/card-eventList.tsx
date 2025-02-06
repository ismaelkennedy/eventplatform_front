import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Pour la redirection

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
        <div className="flex flex-col items-center">
            {events.length === 0 ? (
                <p className="text-white">Aucun événement trouvé.</p>
            ) : (
                events.map((event) => (
                    <div
                        key={event.id}
                        className="flex cursor-pointer"
                        onClick={() => navigate(`/event/${event.id}`)}
                        style={{ width: '500px', height: '84px', position: 'relative' }}
                    >
                        <img
                            src={event.image}
                            alt={event.title}
                            style={{ width: '99px', height: '82px' }}
                            className="object-cover rounded-xl"
                        />
                        <div className="ml-4 relative">
                            <div className="text-white text-sm font-regular">{event.date}</div>
                            <div className="text-white text-lg font-bold">{event.title}</div>
                            <div className="text-white font-regular">{event.location}</div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default MyComponent;
