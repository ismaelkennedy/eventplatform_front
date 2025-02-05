import React from 'react'

export default function Bouton({label}:{label:string}) {
  return (
    <div>
      <button
        type="submit"
        className="mt-4 py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
      >
        {label}
      </button>
    </div>
  )
}
