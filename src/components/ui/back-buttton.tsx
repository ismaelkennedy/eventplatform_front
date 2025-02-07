import React from 'react'
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function Backbuttton() {
  return (
    <div>
       <Link to="/" className="absolute top-4 left-4 z-20 text-yellow-500 hover:opacity-80">
        <ArrowLeft size={24} />
      </Link>
    </div>
  )
}
