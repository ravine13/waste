"use client"

import { X, Check } from "lucide-react"

export default function ConfirmationModal({ skip, onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl max-w-md w-full border border-slate-700 shadow-2xl">
        <div className="flex justify-between items-center p-5 border-b border-slate-700">
          <h3 className="text-xl font-bold text-white">Confirm Your Selection</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center space-x-4">
            <img src={skip.image || "/placeholder.svg"} alt={skip.size} className="w-24 h-24 object-cover rounded-lg" />
            <div>
              <h4 className="font-bold text-lg text-white">{skip.size}</h4>
              <p className="text-slate-400">{skip.period}</p>
              <p className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-xl font-bold">
                {skip.price}
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <p className="text-slate-300">
              You've selected the {skip.size}. Would you like to proceed with this selection?
            </p>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={onClose}
                className="flex-1 py-3 px-4 border border-slate-600 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center text-white font-semibold shadow-lg shadow-cyan-500/25"
              >
                <Check className="w-4 h-4 mr-2" />
                Confirm & Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
