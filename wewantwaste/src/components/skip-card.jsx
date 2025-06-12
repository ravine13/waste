"use client"

import { useState } from "react"
import { ArrowRight, AlertTriangle } from "lucide-react"

export default function SkipCard({ skip, isSelected, onSelect }) {
  const [isHovering, setIsHovering] = useState(false) 

  return (
    <div
      className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 border border-slate-700"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative">
        <img src={skip.image || "/placeholder.svg"} alt={skip.size} className="w-full h-48 object-cover" />
        <div className="absolute top-3 right-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          {skip.yards}
        </div>
        {skip.warning && (
          <div className="absolute bottom-3 left-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-lg text-xs flex items-center font-medium shadow-lg">
            <AlertTriangle className="w-4 h-4 mr-1" />
            {skip.warning}
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-white">{skip.size}</h3>

        {/* Content that shows only on hover */}
        <div
          className={`transition-all duration-300 ${isHovering ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden"}`}
        >
          <p className="text-slate-400 mt-2">{skip.period}</p>
          <p className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-2xl font-bold mt-2">
            {skip.price}
          </p>
        </div>

        <button
          onClick={onSelect}
          className={`mt-4 w-full py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300 font-semibold ${
            isSelected
              ? "bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white shadow-lg shadow-emerald-500/25"
              : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/25"
          }`}
        >
          <span>{isSelected ? "Selected" : "Select This Skip"}</span>
          {!isSelected && <ArrowRight className="ml-2 w-4 h-4" />}
        </button>
      </div>
    </div>
  )
}
