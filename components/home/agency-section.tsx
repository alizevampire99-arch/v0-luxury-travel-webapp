import Image from "next/image"
import { Shield, Users, Cpu } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

const badges = [
  {
    icon: Shield,
    title: "Safety Protocol",
    description: "Quantum-locked timelines ensure zero paradox risk",
  },
  {
    icon: Users,
    title: "Expert Guides",
    description: "Historians and scientists accompany every journey",
  },
  {
    icon: Cpu,
    title: "AI Assistance",
    description: "Chronos AI plans and monitors your trip in real-time",
  },
]

export function AgencySection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
              <Image
                src="/images/agency-hero.jpg"
                alt="TimeTravel Agency luxury time portal chamber"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-primary/10" />
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Who We Are</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Where Luxury Meets the Impossible
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Founded in 2031, TimeTravel Agency pioneered commercial temporal tourism. Our proprietary Chrono-Displacement technology, combined with meticulous historical research, delivers experiences that are not just trips -- they are transformations.
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Every journey is curated by our team of temporal historians, safety engineers, and cultural experts. From the moment you step into our departure chamber to the second you return, you are enveloped in uncompromising luxury and absolute safety.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {badges.map((badge) => (
                  <div
                    key={badge.title}
                    className="flex flex-col items-start gap-2 rounded-lg border border-border bg-secondary/30 p-4"
                  >
                    <badge.icon className="size-5 text-primary" />
                    <h4 className="text-sm font-semibold text-foreground">{badge.title}</h4>
                    <p className="text-xs leading-relaxed text-muted-foreground">{badge.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
