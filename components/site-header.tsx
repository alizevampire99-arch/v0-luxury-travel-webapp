"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Agent IA", href: "/plan" },
  { label: "Personnaliser mon voyage", href: "/plan" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-full border border-primary/50 bg-primary/10">
            <span className="text-sm font-bold text-primary font-serif">T</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            TimeTravel <span className="text-primary">Agency</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/plan">R&eacute;server mon voyage</Link>
          </Button>
        </div>

        <button
          className="flex items-center justify-center md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1 p-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/plan" onClick={() => setMobileOpen(false)}>R&eacute;server mon voyage</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
