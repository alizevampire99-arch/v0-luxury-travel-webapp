import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"
import { Sparkles, ArrowRight } from "lucide-react"

export function AiTeaser() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-secondary/50 via-background to-secondary/30 p-8 sm:p-12 lg:p-16">
            {/* Decorative glow */}
            <div className="absolute -right-20 -top-20 size-60 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 size-60 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                <Sparkles className="size-7 text-primary" />
              </div>

              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
                D&eacute;couvrez <span className="text-primary">notre IA</span>
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Notre agent d&apos;intelligence temporelle conna&icirc;t chaque &eacute;poque, chaque risque et chaque tr&eacute;sor cach&eacute; &agrave; travers la chronologie. Demandez &agrave; Chronos n&apos;importe quoi du meilleur caf&eacute; du Paris des ann&eacute;es 1920 aux conseils de survie au Jurassique. Votre voyage id&eacute;al commence par une conversation.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
                >
                  <Link href="/plan">
                    <Sparkles className="size-4" />
                    Planifier avec l&apos;IA
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="text-primary hover:text-primary hover:bg-primary/5"
                >
                  <Link href="/destinations">
                    Parcourir les destinations
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
