'use client'

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

export type CursorPosition = { line: number; language: string }

type CursorContextValue = {
  position: CursorPosition
  moveTo: (position: CursorPosition) => void
}

const CursorContext = createContext<CursorContextValue | null>(null)

type CursorProviderProps = { initial: CursorPosition; children: ReactNode }

export const CursorProvider = ({ initial, children }: CursorProviderProps) => {
  const [position, moveTo] = useState(initial)
  const value = useMemo(() => ({ position, moveTo }), [position])
  return <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
}

export const useCursor = () => {
  const context = useContext(CursorContext)
  if (!context) throw new Error('useCursor must be used inside <CursorProvider>')
  return context
}
