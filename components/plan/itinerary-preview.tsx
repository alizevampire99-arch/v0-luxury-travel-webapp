"use client"

import { Calendar, Backpack, AlertTriangle, BookOpen, MessageCircle } from "lucide-react"

interface ItineraryPreviewProps {
  generated: boolean
}

export function ItineraryPreview({ generated }: ItineraryPreviewProps) {
  if (!generated) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card/50 p-12 text-center min-h-[400px]">
        <div className="flex size-16 items-center justify-center rounded-full border border-primary/20 bg-primary/5">
          <Calendar className="size-7 text-primary/40" />
        </div>
        <h3 className="mt-4 font-serif text-xl font-bold text-foreground">Votre itinéraire vous attend</h3>
        <p className="mt-2 max-w-xs text-sm text-muted-foreground">
          Fill in your preferences and click &quot;Generate My Journey&quot; to see your personalized time travel itinerary.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6 rounded-xl border border-primary/20 bg-card p-6 animate-fade-in-up">
      <div className="flex items-center gap-2 border-b border-border pb-4">
        <div className="flex size-8 items-center justify-center rounded-full bg-primary/10">
          <Calendar className="size-4 text-primary" />
        </div>
        <div>
          <h3 className="font-serif text-lg font-bold text-foreground">Florence, 1504</h3>
          <p className="text-xs text-muted-foreground">Premium | 4 Days | Art & Culture</p>
        </div>
      </div>

      {/* Day by day */}
      <div>
        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
          <Calendar className="size-4 text-primary" />
          Day-by-Day Plan
        </h4>
        <div className="flex flex-col gap-3">
          {[
            { day: "Day 1", desc: "Arrival and orientation at the Palazzo Medici. Evening walk through the Piazza della Signoria under torchlight." },
            { day: "Day 2", desc: "Private viewing of Michelangelo's David unveiling ceremony. Afternoon at Leonardo da Vinci's workshop." },
            { day: "Day 3", desc: "Medici Court dinner. Morning at the Uffizi (in its original form). Artisan leather workshop visit." },
            { day: "Day 4", desc: "Sunrise over the Arno. Final market exploration. Return through the temporal gate." },
          ].map((item) => (
            <div key={item.day} className="flex gap-3 rounded-lg bg-secondary/30 p-3">
              <span className="shrink-0 text-xs font-bold text-primary">{item.day}</span>
              <p className="text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Equipment */}
      <div>
        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
          <Backpack className="size-4 text-primary" />
          Equipment Suggestions
        </h4>
        <ul className="flex flex-col gap-1.5 text-xs text-muted-foreground">
          <li className="flex items-start gap-2"><span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary" />Period-accurate Renaissance attire (provided)</li>
          <li className="flex items-start gap-2"><span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary" />Neural translator earpiece</li>
          <li className="flex items-start gap-2"><span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary" />Nano-shield medical bracelet</li>
          <li className="flex items-start gap-2"><span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary" />Temporal compass (emergency extraction)</li>
        </ul>
      </div>

      {/* Warnings */}
      <div>
        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
          <AlertTriangle className="size-4 text-yellow-400" />
          Warnings
        </h4>
        <div className="rounded-lg border border-yellow-400/20 bg-yellow-400/5 p-3">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Avoid discussing future events or displaying unfamiliar technology. Political tensions between the Medici and rival families are high. Stay with your guide during court events.
          </p>
        </div>
      </div>

      {/* Cultural Tips */}
      <div>
        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
          <BookOpen className="size-4 text-primary" />
          Cultural Tips
        </h4>
        <ul className="flex flex-col gap-1.5 text-xs text-muted-foreground">
          <li className="flex items-start gap-2"><span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary" />Complimenting an artist&apos;s work is the highest social currency</li>
          <li className="flex items-start gap-2"><span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary" />Always bow to members of the Medici family</li>
          <li className="flex items-start gap-2"><span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary" />Meals are communal -- refuse nothing offered to you</li>
        </ul>
      </div>

      {/* Useful Phrases */}
      <div>
        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
          <MessageCircle className="size-4 text-primary" />
          Useful Phrases
        </h4>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            { phrase: "Buongiorno, Signore", meaning: "Good day, Sir" },
            { phrase: "Che meraviglia!", meaning: "How wonderful!" },
            { phrase: "Sono un viaggiatore", meaning: "I am a traveler" },
            { phrase: "Grazie mille", meaning: "Many thanks" },
          ].map((p) => (
            <div key={p.phrase} className="rounded-lg bg-secondary/30 p-2">
              <p className="text-xs font-medium text-primary">{p.phrase}</p>
              <p className="text-xs text-muted-foreground">{p.meaning}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
