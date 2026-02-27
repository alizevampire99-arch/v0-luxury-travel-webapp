"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const interestOptions = [
  "Art & Culture",
  "Histoire ancienne",
  "Sciences & innovations",
  "Nature & Faune",
  "Cuisine & Manger",
  "Architecture",
  "Musique & performances",
  "Royauté & tribunaux",
  "Guerre & stratégie",
  "Mythologie & religion",
]

interface TripFormProps {
  onGenerate: () => void
}

export function TripForm({ onGenerate }: TripFormProps) {
  const [budget, setBudget] = useState("premium")
  const [duration, setDuration] = useState("3-5")
  const [interests, setInterests] = useState<string[]>(["Art & Culture"])
  const [risk, setRisk] = useState("moderate")

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    )
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Budget */}
      <div>
        <label className="text-sm font-semibold text-foreground">Budget Tier</label>
        <p className="mt-1 text-xs text-muted-foreground">Select your preferred level of luxury</p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            { value: "standard", label: "Standard" },
            { value: "premium", label: "Premium" },
            { value: "ultimate", label: "Ultime" },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() => setBudget(opt.value)}
              className={cn(
                "rounded-lg border px-3 py-2.5 text-sm font-medium transition-all",
                budget === opt.value
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary/30"
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div>
        <label className="text-sm font-semibold text-foreground">Durée</label>
        <p className="mt-1 text-xs text-muted-foreground">Combien de temps souhaitez-vous rester ?</p>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {["1-2", "3-5", "5-7", "7+"].map((d) => (
            <button
              key={d}
              onClick={() => setDuration(d)}
              className={cn(
                "rounded-lg border px-3 py-2.5 text-sm font-medium transition-all",
                duration === d
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary/30"
              )}
            >
              {d} days
            </button>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div>
        <label className="text-sm font-semibold text-foreground">Intérêts</label>
        <p className="mt-1 text-xs text-muted-foreground">Sélectionnez tout ce qui vous plaît</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {interestOptions.map((interest) => (
            <button
              key={interest}
              onClick={() => toggleInterest(interest)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium transition-all",
                interests.includes(interest)
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary/30"
              )}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>

      {/* Risk Tolerance */}
      <div>
        <label className="text-sm font-semibold text-foreground">Tolérance au risque</label>
        <p className="mt-1 text-xs text-muted-foreground">Êtes-vous plutôt aventureux ?</p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            { value: "faible", label: "Jouez en toute sécurité" },
            { value: "modéré", label: "Équilibré" },
            { value: "haute", label: "Chercheur de sensations fortes" },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() => setRisk(opt.value)}
              className={cn(
                "rounded-lg border px-3 py-2.5 text-sm font-medium transition-all",
                risk === opt.value
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary/30"
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Constraints */}
      <div>
        <label className="text-sm font-semibold text-foreground">Exigences particulières</label>
        <p className="mt-1 text-xs text-muted-foreground">Allergies, besoins en matière de mobilité ou préférences particulières</p>
        <textarea
          rows={3}
          placeholder="Par exemple, j'ai besoin de capsules temporales accessibles aux fauteuils roulants..."
          className="mt-3 w-full rounded-lg border border-border bg-input px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 resize-none"
        />
      </div>

      {/* Generate button */}
      <Button
        size="lg"
        onClick={onGenerate}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
      >
        <Sparkles className="size-4" />
        Génère mon voyage
      </Button>
    </div>
  )
}
