import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DestinationCard } from "@/components/destination-card"
import { FadeIn } from "@/components/fade-in"
import { destinations } from "@/lib/destinations"

export function DestinationsPreview() {
  const featured = destinations.slice(0, 3)

  return (
    <section className="py-24 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Popular Destinations</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Where Will You Go?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              From the grandeur of ancient civilizations to the wonders of the far future, choose your era and begin your journey.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((dest, i) => (
            <FadeIn key={dest.id} delay={i * 150}>
              <DestinationCard destination={dest} featured />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={500}>
          <div className="mt-12 text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/10 hover:text-primary"
            >
              <Link href="/destinations">
                View All Destinations
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
