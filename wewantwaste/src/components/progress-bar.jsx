import { MapPin, Trash2, Package, FileCheck, Calendar, CreditCard } from "lucide-react"

export default function ProgressBar() {
  const steps = [
    { name: "Postcode", icon: MapPin, active: false, completed: true },
    { name: "Waste Type", icon: Trash2, active: false, completed: true },
    { name: "Select Skip", icon: Package, active: true, completed: false },
    { name: "Permit Check", icon: FileCheck, active: false, completed: false },
    { name: "Choose Date", icon: Calendar, active: false, completed: false },
    { name: "Payment", icon: CreditCard, active: false, completed: false },
  ]

  return (
    <div className="flex justify-between">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full ${
              step.active
                ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                : step.completed
                  ? "bg-slate-600"
                  : "bg-slate-800"
            }`}
          >
            <step.icon className={`w-5 h-5 ${step.active || step.completed ? "text-white" : "text-slate-400"}`} />
          </div>
          <span
            className={`ml-2 hidden sm:inline-block ${
              step.active ? "text-white font-medium" : step.completed ? "text-slate-300" : "text-slate-500"
            }`}
          >
            {step.name}
          </span>
        </div>
      ))}
    </div>
  )
}
