"use client"

import { useState } from "react"
import { TripForm } from "@/components/plan/trip-form"
import { ItineraryPreview } from "@/components/plan/itinerary-preview"
import { FadeIn } from "@/components/fade-in"

export default function PlanPage() {
  const [generated, setGenerated] = useState(false)

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn>
          <div className="py-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">PLANIFICATION BASÉE SUR L'IA</p>
            <h1 className="mt-3 font-serif text-4xl font-bold text-foreground sm:text-5xl text-balance">
              Créez votre voyage parfait
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
              Faites-nous part de vos préférences et laissez Chronos AI concevoir un itinéraire personnalisé pour n'importe quelle époque de notre catalogue.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 pb-16 lg:grid-cols-2">
          <FadeIn>
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="mb-6 font-serif text-xl font-bold text-foreground">Vos préférences</h2>
              <TripForm onGenerate={() => setGenerated(true)} />
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="lg:sticky lg:top-24">
              <ItineraryPreview generated={generated} />
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
