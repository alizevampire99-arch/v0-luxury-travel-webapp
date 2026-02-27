import { destinations } from "@/lib/destinations"
import { DestinationCard } from "@/components/destination-card"
import { FadeIn } from "@/components/fade-in"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Destinations | TimeTravel Agency",
  description: "Parcourez notre collection de destinations temporelles couvrant des millions d\u2019ann\u00e9es d\u2019histoire et de futur.",
}

export default function DestinationsPage() {
  return (
    <div className="py-16">
      {/* Page header */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn>
          <div className="py-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Notre catalogue</p>
            <h1 className="mt-3 font-serif text-4xl font-bold text-foreground sm:text-5xl text-balance">
              Explorez chaque &eacute;poque
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
              Chaque destination a &eacute;t&eacute; m&eacute;ticuleusement explor&eacute;e, test&eacute;e et pr&eacute;par&eacute;e par nos &eacute;quipes d&apos;avant-garde temporelle. Choisissez votre &eacute;poque et traversez le temps.
            </p>
          </div>
        </FadeIn>

        {/* Grid of destination cards */}
        <div className="grid gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest, i) => (
            <FadeIn key={dest.id} delay={i * 100}>
              <DestinationCard destination={dest} />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}
