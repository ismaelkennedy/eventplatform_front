import React from 'react'

export default function Bouton({label}:{label:string}) {
  return (
    <div className = "flex items-center">
      <button className="text-white flex items-center gap-6 px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl hover:opacity-90 transition-opacity">
        {label}
    </button>
    </div>
  )
}
