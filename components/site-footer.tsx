import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-full border border-primary/50 bg-primary/10">
                <span className="text-sm font-bold text-primary font-serif">T</span>
              </div>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                TimeTravel <span className="text-primary">Agency</span>
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              La premi&egrave;re agence de tourisme temporel au monde. Des voyages de luxe &agrave; travers le temps, con&ccedil;us avec pr&eacute;cision et &eacute;l&eacute;gance.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Explorer</h4>
            <ul className="flex flex-col gap-2">
              <li><Link href="/destinations" className="text-sm text-muted-foreground transition-colors hover:text-primary">Toutes les destinations</Link></li>
              <li><Link href="/plan" className="text-sm text-muted-foreground transition-colors hover:text-primary">Personnaliser mon voyage</Link></li>
              <li><Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-primary">Agent IA</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Entreprise</h4>
            <ul className="flex flex-col gap-2">
              <li><span className="text-sm text-muted-foreground">&Agrave; propos</span></li>
              <li><span className="text-sm text-muted-foreground">Protocoles de s&eacute;curit&eacute;</span></li>
              <li><span className="text-sm text-muted-foreground">Carri&egrave;res</span></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">L&eacute;gal</h4>
            <ul className="flex flex-col gap-2">
              <li><span className="text-sm text-muted-foreground">Conditions g&eacute;n&eacute;rales</span></li>
              <li><span className="text-sm text-muted-foreground">Politique de confidentialit&eacute;</span></li>
              <li><span className="text-sm text-muted-foreground">D&eacute;charge de responsabilit&eacute; temporelle</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            TimeTravel Agency. Toutes les lignes temporelles r&eacute;serv&eacute;es.
          </p>
          <p className="text-xs text-muted-foreground">
            R&eacute;gul&eacute; par l&apos;Autorit&eacute; du Commerce Temporel
          </p>
        </div>
      </div>
    </footer>
  )
}
