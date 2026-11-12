import type { CSSProperties } from 'react'

/** Stagger delay for the shared `.enter` animation, in milliseconds. */
export const enterDelay = (ms: number) => ({ '--d': ms }) as CSSProperties
