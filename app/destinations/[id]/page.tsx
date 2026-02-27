import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Sparkles, Calendar, CloudSun, Globe, ScrollText, AlertTriangle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DangerIndicator } from "@/components/danger-indicator"
import { FadeIn } from "@/components/fade-in"
import { destinations } from "@/lib/destinations"

export async function generateStaticParams() {
  return destinations.map((d) => ({ id: d.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const dest = destinations.find((d) => d.id === id)
  if (!dest) return { title: "Destination Not Found" }
  return {
    title: `${dest.title} | TimeTravel Agency`,
    description: dest.shortDescription,
  }
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const dest = destinations.find((d) => d.id === id)
  if (!dest) notFound()

  const adviceItems = [
    { icon: CloudSun, label: "Climate", value: dest.practicalAdvice.climate },
    { icon: Globe, label: "Language", value: dest.practicalAdvice.language },
    { icon: ScrollText, label: "Customs", value: dest.practicalAdvice.customs },
    { icon: AlertTriangle, label: "Risks", value: dest.practicalAdvice.risks },
  ]

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden">
        <Image
          src={dest.image}
          alt={dest.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 lg:px-8">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">{dest.era}</p>
            <h1 className="mt-2 font-serif text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
              {dest.title}
            </h1>
            <div className="mt-4">
              <DangerIndicator level={dest.dangerLevel} />
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/plan">
                  <Sparkles className="size-4" />
                  Talk to AI
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/10 hover:text-primary"
              >
                <Link href="/plan">
                  <Calendar className="size-4" />
                  Customize My Trip
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Narrative description */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <FadeIn>
            <p className="text-lg leading-relaxed text-muted-foreground font-serif italic">
              {dest.fullDescription}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Must-see highlights */}
      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Must-See</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Highlights
              </h2>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dest.highlights.map((hl, i) => (
              <FadeIn key={hl.title} delay={i * 150}>
                <div className="group overflow-hidden rounded-xl border border-border bg-card">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={hl.image}
                      alt={hl.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-lg font-bold text-foreground">{hl.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{hl.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Advice */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Before You Go</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Practical Advice
              </h2>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {adviceItems.map((item, i) => (
              <FadeIn key={item.label} delay={i * 100}>
                <div className="flex gap-4 rounded-xl border border-border bg-card p-6">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.label}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Ready to Visit <span className="text-primary">{dest.title}</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Let Chronos AI create a personalized itinerary tailored to your interests, risk tolerance, and travel style.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 px-8"
              >
                <Link href="/plan">
                  Generate My Itinerary
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
