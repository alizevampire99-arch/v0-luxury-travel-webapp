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
                Meet <span className="text-primary">Chronos AI</span>
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our temporal intelligence agent knows every era, every risk, and every hidden gem across the timeline. Ask Chronos anything -- from the best cafe in 1920s Paris to survival tips in the Jurassic. Your perfect journey starts with a conversation.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
                >
                  <Link href="/plan">
                    <Sparkles className="size-4" />
                    Start Planning with AI
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="text-primary hover:text-primary hover:bg-primary/5"
                >
                  <Link href="/destinations">
                    Browse Destinations
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
