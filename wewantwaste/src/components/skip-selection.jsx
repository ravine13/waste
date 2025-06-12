"use client"

import { useState } from "react"
import SkipCard from "./skip-card"
import ConfirmationModal from "./confirmation-modal"

export default function SkipSelection() {
  const [selectedSkip, setSelectedSkip] = useState(null)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [selectedSkipDetails, setSelectedSkipDetails] = useState(null)

  const skips = [
    {
      id: "4yard",
      size: "4 Yard Skip",
      price: "£211",
      period: "14 day hire period",
      image: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg",
      yards: "4 Yards",
    },
    {
      id: "5yard",
      size: "5 Yard Skip",
      price: "£241",
      period: "14 day hire period",
      image: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg", 
      yards: "5 Yards",
    },
    {
      id: "6yard",
      size: "6 Yard Skip",
      price: "£264",
      period: "14 day hire period",
      image: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/6-yarder-skip.jpg", 
      yards: "6 Yards",
    },
    {
      id: "8yard",
      size: "8 Yard Skip",
      price: "£295",
      period: "14 day hire period",
      image: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/8-yarder-skip.jpg", 
      yards: "8 Yards",
    },
    {
      id: "10yard",
      size: "10 Yard Skip",
      price: "£356",
      period: "14 day hire period",
      image: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/10-yarder-skip.jpg", 
      yards: "10 Yards",
      warning: "Not Allowed On The Road",
    },
    {
      id: "12yard",
      size: "12 Yard Skip",
      price: "£390",
      period: "14 day hire period",
      image: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/12-yarder-skip.jpg", 
      yards: "12 Yards",
      warning: "Not Allowed On The Road",
    },
  ]

  const handleSelectSkip = (skip) => {
    if (selectedSkip === skip.id) {
      setSelectedSkip(null)
      setSelectedSkipDetails(null)
      return
    }

    
    setSelectedSkip(skip.id)
    setSelectedSkipDetails(skip)
    setShowConfirmation(true)
  }

  const handleCloseConfirmation = () => {
    setShowConfirmation(false)
  }

  const handleConfirmSelection = () => {
  
    console.log("Confirmed selection:", selectedSkipDetails)
    setShowConfirmation(false)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={selectedSkip === skip.id}
            onSelect={() => handleSelectSkip(skip)}
          />
        ))}
      </div>

      {showConfirmation && selectedSkipDetails && (
        <ConfirmationModal
          skip={selectedSkipDetails}
          onClose={handleCloseConfirmation}
          onConfirm={handleConfirmSelection}
        />
      )}
    </>
  )
}
