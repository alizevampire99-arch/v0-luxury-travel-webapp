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
          Renseignez vos préférences et cliquez sur &quot;Générer mon voyage&quot; pour consulter votre itinéraire personnalisé.
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
          <p className="text-xs text-muted-foreground">Premium | 4 Jours | Art & Culture</p>
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
            { day: "Day 1", desc: "Arrivée et présentation au Palazzo Medici. Promenade nocturne aux flambeaux sur la Piazza della Signoria." },
            { day: "Day 2", desc: "Visite privée de la cérémonie de dévoilement du David de Michel-Ange. Après-midi à l'atelier de Léonard de Vinci." },
            { day: "Day 3", desc: "Dîner à la cour des Médicis. Matinée à la Galerie des Offices (dans sa configuration d'origine). Visite d'un atelier artisanal de maroquinerie." },
            { day: "Day 4", desc: "Lever de soleil sur l'Arno. Dernière exploration du marché. Retour par la porte temporelle." },
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
          <li className="flex items-start gap-2"><span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary" />Tenue Renaissance d'époque (fournie)</li>
          <li className="flex items-start gap-2"><span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary" />oreillette de traduction neuronale</li>
          <li className="flex items-start gap-2"><span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary" />Bracelet médical Nano-bouclier</li>
          <li className="flex items-start gap-2"><span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary" />Boussole temporelle (extraction d'urgence)</li>
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
            Évitez de parler des événements futurs ou de faire étalage de technologies inconnues. Les tensions politiques entre les Médicis et les familles rivales sont vives. Restez avec votre guide lors des événements de la cour.
          </p>
        </div>
      </div>

      {/* Cultural Tips */}
      <div>
        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
          <BookOpen className="size-4 text-primary" />
          Conseils culturels
        </h4>
        <ul className="flex flex-col gap-1.5 text-xs text-muted-foreground">
          <li className="flex items-start gap-2"><span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary" />Complimenter le travail d'un artiste est la plus haute forme de reconnaissance sociale.</li>
          <li className="flex items-start gap-2"><span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary" />Inclinez-vous toujours devant les membres de la famille Médicis.</li>
          <li className="flex items-start gap-2"><span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary" />Les repas sont pris en commun, ne refusez rien de ce qui vous est offert.</li>
        </ul>
      </div>

      {/* Useful Phrases */}
      <div>
        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
          <MessageCircle className="size-4 text-primary" />
          Phrases utiles
        </h4>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            { phrase: "Buongiorno, Signore", meaning: "Bonjour, Monsieur" },
            { phrase: "Che meraviglia!", meaning: "Comme c'est merveilleux !" },
            { phrase: "Sono un viaggiatore", meaning: "Je suis un voyageur" },
            { phrase: "Grazie mille", meaning: "Merci beaucoup" },
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
