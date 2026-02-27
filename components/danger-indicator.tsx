import { cn } from "@/lib/utils"

const levels: Record<number, { label: string; color: string }> = {
  1: { label: "Very Low", color: "text-emerald-400" },
  2: { label: "Low", color: "text-green-400" },
  3: { label: "Moderate", color: "text-yellow-400" },
  4: { label: "High", color: "text-orange-400" },
  5: { label: "Extreme", color: "text-red-400" },
}

export function DangerIndicator({ level }: { level: number }) {
  const info = levels[level] ?? levels[1]
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1.5 w-3 rounded-full transition-colors",
              i < level ? "bg-current" : "bg-muted"
            )}
          />
        ))}
      </div>
      <span className={cn("text-xs font-medium", info.color)}>{info.label}</span>
    </div>
  )
}
