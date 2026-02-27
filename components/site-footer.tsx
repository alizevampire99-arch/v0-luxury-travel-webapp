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
              The world&apos;s premier temporal tourism agency. Luxury journeys through time, crafted with precision and care.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Explore</h4>
            <ul className="flex flex-col gap-2">
              <li><Link href="/destinations" className="text-sm text-muted-foreground transition-colors hover:text-primary">All Destinations</Link></li>
              <li><Link href="/plan" className="text-sm text-muted-foreground transition-colors hover:text-primary">Plan My Trip</Link></li>
              <li><Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-primary">AI Agent</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Company</h4>
            <ul className="flex flex-col gap-2">
              <li><span className="text-sm text-muted-foreground">About Us</span></li>
              <li><span className="text-sm text-muted-foreground">Safety Protocols</span></li>
              <li><span className="text-sm text-muted-foreground">Careers</span></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Legal</h4>
            <ul className="flex flex-col gap-2">
              <li><span className="text-sm text-muted-foreground">Terms of Service</span></li>
              <li><span className="text-sm text-muted-foreground">Privacy Policy</span></li>
              <li><span className="text-sm text-muted-foreground">Temporal Liability Waiver</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            TimeTravel Agency. All timelines reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Regulated by the Temporal Commerce Authority
          </p>
        </div>
      </div>
    </footer>
  )
}
