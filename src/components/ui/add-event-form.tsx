import { useState, useEffect } from "react";
import axios from "axios";
import { ChevronDown, ImageIcon } from "lucide-react";
import { useNavigate} from "react-router-dom"

export interface EventFormData {
  title: string;
  description: string;
  image: File | null;
  location: string;
  dateTime: string;
  maxParticipants: number;
  categories: number[]; 
}

interface EventFormProps {
  onSubmit: (data: FormData) => void;
}

export function AddEventForm({ onSubmit }: EventFormProps) {
  const navigate = useNavigate()

  const [formData, setFormData] = useState<EventFormData>({
    title: "",
    description: "",
    image: null,
    location: "",
    dateTime: "",
    maxParticipants: 1,
    categories: [],
  });

  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Erreur lors du chargement des catégories :", error));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const eventData = new FormData();
    eventData.append("title", formData.title);
    eventData.append("description", formData.description);
    eventData.append("location", formData.location);
    eventData.append("date", formData.dateTime.replace("T", " ") + ":00"); // Format YYYY-MM-DD HH:MM:SS
    eventData.append("max_participants", formData.maxParticipants.toString());

    if (formData.image) {
      eventData.append("image", formData.image);
    }

    formData.categories.forEach((categoryId, index) => {
      eventData.append(`categories[${index}]`, categoryId.toString());
    });

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/addEvents", eventData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`, 
        },
      });
      console.log("Événement créé avec succès :", response.data);
      navigate("/myevent")
    } catch (error: any) {
      console.error("Erreur lors de la création de l'événement :", error.response?.data || error.message);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleCategorySelect = (categoryId: number) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter((id) => id !== categoryId)
        : [...prev.categories, categoryId],
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6 text-white">
      
      <div className="flex flex-col gap-2">
        <label className="text-gray-400">Ajouter un</label>
        <input
          type="text"
          placeholder="Entrez le titre de l'événement"
          value={formData.title}
          onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
          className="bg-transparent border-b border-white/20 pb-2 outline-none focus:border-white/40 transition-colors placeholder:text-white/50"
        />
      </div>

      {/* Description */}
      <div className="flex flex-col gap-2">
        <label className="text-gray-400">Description</label>
        <textarea
          placeholder="Entrez votre description"
          value={formData.description}
          onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
          className="bg-transparent border-b border-white/20 pb-2 outline-none focus:border-white/40 transition-colors min-h-[100px] resize-none placeholder:text-white/50"
        />
      </div>

      {/* Lieu */}
      <div className="flex flex-col gap-2">
        <label className="text-gray-400">Lieu</label>
        <input
          type="text"
          placeholder="Entrez le lieu de l'événement"
          value={formData.location}
          onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
          className="bg-transparent border-b border-white/20 pb-2 outline-none focus:border-white/40 transition-colors placeholder:text-white/50"
        />
      </div>

      {/* Date et Heure */}
      <div className="flex flex-col gap-2">
        <label className="text-gray-400">Date et Heure</label>
        <input
          type="datetime-local"
          value={formData.dateTime}
          onChange={(e) => setFormData((prev) => ({ ...prev, dateTime: e.target.value }))}
          className="w-full bg-transparent border-b border-white/20 pb-2 outline-none focus:border-white/40 transition-colors [color-scheme:dark]"
        />
      </div>

      {/* Nombre max de participants */}
      <div className="flex flex-col gap-2">
        <label className="text-gray-400">Nombre maximum de participants</label>
        <input
          type="number"
          min="1"
          value={formData.maxParticipants}
          onChange={(e) => setFormData((prev) => ({ ...prev, maxParticipants: Number(e.target.value) }))}
          className="bg-transparent border-b border-white/20 pb-2 outline-none focus:border-white/40 transition-colors placeholder:text-white/50"
        />
      </div>

      {/* Image */}
      <div className="flex flex-col gap-2">
        <label className="text-gray-400">Image</label>
        <div className="relative">
          <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="image-upload" />
          <label
            htmlFor="image-upload"
            className="flex items-center gap-2 text-white/50 border-b border-white/20 pb-2 cursor-pointer"
          >
            <ImageIcon className="h-5 w-5" />
            {formData.image ? formData.image.name : "Sélectionner une image"}
          </label>
        </div>
      </div>

      {/* Catégories */}
      <div className="flex flex-col gap-2">
        <label className="text-gray-400">Catégories</label>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`px-4 py-2 border rounded-lg ${
                formData.categories.includes(category.id) ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"
              }`}
              onClick={() => handleCategorySelect(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Bouton d'ajout */}
      <button
        type="submit"
        className="mt-4 py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
      >
        Ajouter
      </button>
    </form>
  );
}