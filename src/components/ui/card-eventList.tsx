import { Ticket } from "lucide-react"

interface EventCardProps {
  title: string
  date: string
  time: string
  image: string
  status: string
}

export function CardEventList({ title, date, time, image, status }: EventCardProps) {
  return (
    <div className="flex items-center overflow-hidden  border rounded-2xl ">
      <div className="flex flex-1 items-center gap-4 p-4">
        <div className="rounded-lg bg-blue-500/20 p-2">
          <Ticket className="h-10 w-6 text-blue-400" />
        </div>
        <div className="flex flex-col">
          <h3 className="font-medium text-white">{title}</h3>
          <p className="text-sm text-gray-400">
            {date} • {time}
          </p>
          <p className="text-sm text-gray-400">{status}</p>
        </div>
      </div>
      <div className="h-24 w-32">
        <img src={image || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
      </div>
    </div>
  )
}

