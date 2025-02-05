import { AddEventForm, type EventFormData } from "../components/ui/add-event-form"
import logo from "@/assets/LogoM.svg"; 

export function AddEventPage() {
  const handleSubmit = async (data: EventFormData) => {
    try {
      console.log("Form submitted:", data)
      // Ici vous pouvez ajouter votre logique d'API
      // const response = await createEvent(data)
      // if (response.ok) {
      //   navigate('/events')
      // }
    } catch (error) {
      console.error("Error creating event:", error)
    }
  }

  return (
    
    <div className="flex flex-row items-center justify-center w-full p-10">
        <div className="flex-1 flex items-center justify-center">
            <img
            src={logo}
            alt="MirEnvent Logo"
            className="max-w-full h-auto"
            />
        </div>

        
        <div className="max-w-2xl mx-auto w-full">
            <h1 className="text-center text-2xl font-bold text-white p-6 pb-0">Créer un évènement</h1>
            <AddEventForm onSubmit={handleSubmit} />
        </div>
    </div>
  )
}

