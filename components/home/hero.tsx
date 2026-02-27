"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Compass } from "lucide-react"

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.78_0.12_75/0.08)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.78_0.12_75/0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-background/80" />

        {/* Portal ring effect */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="size-[600px] rounded-full border border-primary/10 opacity-30 animate-[spin_60s_linear_infinite]" />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="size-[400px] rounded-full border border-primary/15 opacity-20 animate-[spin_40s_linear_infinite_reverse]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
            Tourisme Temporel de Luxe
          </p>
        </div>

        <h1
          className={`font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-7xl transition-all duration-1000 delay-200 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-balance">
            Voyagez au-del&agrave; <br className="hidden sm:block" />
            <span className="text-primary">du Temps</span>
          </span>
        </h1>

        <p
          className={`mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground transition-all duration-1000 delay-400 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          L&apos;agence de voyage la plus exclusive au monde. Nous ne traversons pas les continents -- nous traversons les si&egrave;cles. Vivez l&apos;histoire en direct, dans un luxe et une s&eacute;curit&eacute; absolus.
        </p>

        <div
          className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-1000 delay-500 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-base"
          >
            <Link href="/destinations">
              <Compass className="size-4" />
              Explorer les &eacute;poques
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/30 text-primary hover:bg-primary/10 hover:text-primary px-8 text-base"
          >
            <Link href="/plan">
              Parler &agrave; l&apos;agent IA
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div
          className={`mt-16 flex items-center justify-center gap-8 transition-all duration-1000 delay-700 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "2 847+", label: "Voyages effectu\u00e9s" },
            { value: "100%", label: "Retours en s\u00e9curit\u00e9" },
            { value: "147", label: "\u00c9poques disponibles" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-xl font-bold text-primary sm:text-2xl">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest text-muted-foreground uppercase">D&eacute;filer</span>
          <div className="h-8 w-px bg-gradient-to-b from-primary/50 to-transparent animate-bounce" />
        </div>
      </div>
    </section>
  )
}
