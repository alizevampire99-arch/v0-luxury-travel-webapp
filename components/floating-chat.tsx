"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function FloatingChat() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-4 flex w-80 flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xl sm:w-96 animate-fade-in-up">
          <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-full bg-primary/20">
                <MessageCircle className="size-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Chronos AI</p>
                <p className="text-xs text-muted-foreground">Your time travel advisor</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Close chat"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="flex flex-col gap-3 p-4 min-h-[200px]">
            <div className="max-w-[80%] rounded-lg rounded-tl-none bg-secondary px-3 py-2">
              <p className="text-sm text-secondary-foreground">
                Welcome, traveler. I can help you choose the perfect era, plan your itinerary, or answer any questions about temporal tourism. Where would you like to go?
              </p>
            </div>
          </div>

          <div className="border-t border-border p-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask me about time travel..."
                className="flex-1 rounded-lg border border-border bg-input px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50"
              />
              <Button size="icon-sm" className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0">
                <Send className="size-3.5" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-105 animate-glow-pulse",
          open && "rotate-0"
        )}
        aria-label="Open chat"
      >
        {open ? (
          <X className="size-5" />
        ) : (
          <MessageCircle className="size-5" />
        )}
      </button>
    </div>
  )
}
