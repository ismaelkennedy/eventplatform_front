import { AddEventForm, type EventFormData } from "../components/ui/add-event-form";
import logo from "@/assets/LogoM.svg";
import axios from "axios";

export function AddEventPage() {
  const createEvent = async (data: EventFormData) => {
    const file = data.image!;

    
    const maxFileSize = 10 * 1024 * 1024; 
    if (file.size > maxFileSize) {
      alert("Le fichier est trop volumineux. Veuillez choisir un fichier plus petit.");
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("category", data.category);
    formData.append("date", data.date);
    formData.append("time", data.time);
    formData.append("image", file);
    formData.append("description", data.description);

    // Récupérer le token dans localStorage
    const token = localStorage.getItem("authToken");
    console.log("Token:", token);  // Vérifiez si le token est bien dans le localStorage

    if (token) {
      try {
        const response = await axios.post('http://localhost:8000/api/addEvents', formData, {
          headers: {
            'Authorization': `Bearer ${token}`,  // Ajouter le token dans les headers
            'Content-Type': 'multipart/form-data',
          }
        });

        if (response.data.success) {
          console.log("Événement créé avec succès");
        } else {
          console.error("Erreur lors de la création de l'événement");
        }
      } catch (error) {
        console.error("Error creating event:", error.response ? error.response.data : error.message);
      }
    } else {
      console.error("Aucun token d'authentification trouvé.");
    }
  };

  const handleSubmit = (data: EventFormData) => {
    createEvent(data);
  };

  return (
    <div className="flex flex-row items-center justify-center w-full p-10">
      <div className="flex-1 flex items-center justify-center">
        <img src={logo} alt="MirEvent Logo" className="max-w-full h-auto" />
      </div>

      <div className="max-w-2xl mx-auto w-full">
        <h1 className="text-center text-2xl font-bold text-white p-6 pb-0">Enregistrer</h1>
        <AddEventForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
