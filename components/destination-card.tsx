import Link from "next/link"
import Image from "next/image"
import { Clock, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DangerIndicator } from "@/components/danger-indicator"
import type { Destination } from "@/lib/destinations"

interface DestinationCardProps {
  destination: Destination
  featured?: boolean
}

export function DestinationCard({ destination, featured = false }: DestinationCardProps) {
  return (
    <Link
      href={`/destinations/${destination.id}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_oklch(0.78_0.12_75/0.1)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs font-medium uppercase tracking-widest text-primary">{destination.era}</p>
          <h3 className={`mt-1 font-serif text-foreground ${featured ? "text-2xl" : "text-xl"} font-bold`}>
            {destination.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {destination.shortDescription}
        </p>

        <div className="mt-auto flex flex-col gap-2 pt-2">
          <DangerIndicator level={destination.dangerLevel} />
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Compass className="size-3 text-primary/60" />
              {destination.experienceType}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="size-3 text-primary/60" />
              {destination.duration}
            </span>
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="mt-2 w-full border-primary/30 text-primary hover:bg-primary/10 hover:text-primary"
        >
          Explore
        </Button>
      </div>
    </Link>
  )
}
