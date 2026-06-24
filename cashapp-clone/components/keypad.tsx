"use client"

import { Delete } from "lucide-react"

const KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "back"] as const

export function Keypad({ onPress }: { onPress: (key: string) => void }) {
  return (
    <div className="grid grid-cols-3 gap-x-2 gap-y-1">
      {KEYS.map((k) => (
        <button
          key={k}
          type="button"
          onClick={() => onPress(k)}
          aria-label={k === "back" ? "Delete" : k}
          className="flex h-16 items-center justify-center rounded-2xl text-3xl font-medium text-foreground transition-colors active:bg-muted"
        >
          {k === "back" ? <Delete className="h-7 w-7" aria-hidden="true" /> : k}
        </button>
      ))}
    </div>
  )
}
