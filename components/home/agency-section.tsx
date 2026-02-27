import Image from "next/image"
import { Shield, Users, Cpu } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

const badges = [
  {
    icon: Shield,
    title: "Protocole de s\u00e9curit\u00e9",
    description: "Des lignes temporelles verrouill\u00e9es garantissent z\u00e9ro risque de paradoxe",
  },
  {
    icon: Users,
    title: "Guides experts",
    description: "Historiens et scientifiques accompagnent chaque voyage",
  },
  {
    icon: Cpu,
    title: "Assistance IA",
    description: "Chronos IA planifie et surveille votre voyage en temps r\u00e9el",
  },
]

export function AgencySection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover">
            <source src="/public/video-hero.mp4" type="video/mp4" />
          </video>
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-primary/10" />
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Qui sommes-nous</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
                L&agrave; o&ugrave; le luxe rencontre l&apos;impossible
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Fond&eacute;e en 2031, TimeTravel Agency a &eacute;t&eacute; pionni&egrave;re du tourisme temporel commercial. Notre technologie exclusive de Chrono-D&eacute;placement, alli&eacute;e &agrave; une recherche historique m&eacute;ticuleuse, offre des exp&eacute;riences qui ne sont pas de simples voyages -- ce sont des transformations.
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Chaque voyage est con&ccedil;u par notre &eacute;quipe d&apos;historiens temporels, d&apos;ing&eacute;nieurs de s&eacute;curit&eacute; et d&apos;experts culturels. Du moment o&ugrave; vous entrez dans notre chambre de d&eacute;part jusqu&apos;&agrave; votre retour, vous &ecirc;tes envelopp&eacute; dans un luxe sans compromis et une s&eacute;curit&eacute; absolue.
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
