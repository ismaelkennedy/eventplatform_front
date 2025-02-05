// import { PageHeader } from "@/components/ui/papa"

import CustomRectangle from "@/components/ui/card-event-my-event"




export default function MyEventPage() {
  const events = [
    {
      title: "Visite culturelle",
      date: "Mon, Apr 18",
      time: "21:00 Pm",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202025-02-03%20a%CC%80%2010.25.24-HY6Mrj5gAccN2tcK0ivnfr7INVCzw0.png",
      status: "Vous êtes inscrit.",
    },
    {
        title: "Visite culturelle",
        date: "Mon, Apr 18",
        time: "21:00 Pm",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202025-02-03%20a%CC%80%2010.25.24-HY6Mrj5gAccN2tcK0ivnfr7INVCzw0.png",
        status: "Vous êtes inscrit.",
      },
      {
        title: "Visite culturelle",
        date: "Mon, Apr 18",
        time: "21:00 Pm",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202025-02-03%20a%CC%80%2010.25.24-HY6Mrj5gAccN2tcK0ivnfr7INVCzw0.png",
        status: "Vous êtes inscrit.",
      },
      {
        title: "Visite culturelle",
        date: "Mon, Apr 18",
        time: "21:00 Pm",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202025-02-03%20a%CC%80%2010.25.24-HY6Mrj5gAccN2tcK0ivnfr7INVCzw0.png",
        status: "Vous êtes inscrit.",
      },
    
  ]

  return (
    <div className="flex-1">
        <h1 className="text-2xl text-white pl-10">
          A venir ...
          <div className="mt-1 h-0.5 w-12 bg-white" />
        </h1>
        <div className="flex flex-col gap-8 px-52 py-6 items-center justify-center">
            {events.map((event, index) => (
            <CustomRectangle key={index} {...event} />
            ))}
        </div>
      

  </div>
  )
}

