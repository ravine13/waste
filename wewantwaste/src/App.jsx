import SkipSelection from "./components/skip-selection"
import ProgressBar from "./components/progress-bar"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <ProgressBar />
        <div className="mt-12 mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Choose Your Skip Size
          </h1>
          <p className="text-slate-400 mt-3 text-lg">Select the skip size that best suits your needs</p>
        </div>
        <SkipSelection />
      </div>
    </main>
  )
}


