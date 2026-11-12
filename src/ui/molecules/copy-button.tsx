'use client'

import { useEffect, useRef, useState } from 'react'
import { Icon, IconSwap } from '../atoms'
import styles from './copy-button.module.css'

const RESET_AFTER_MS = 1800

type CopyButtonProps = {
  value: string
  /** Element whose text is selected when the clipboard refuses, so the visitor can copy by hand. */
  fallbackTargetId?: string
}

const selectText = (id: string) => {
  const element = document.getElementById(id)
  if (!element) return
  const range = document.createRange()
  range.selectNodeContents(element)
  const selection = window.getSelection()
  selection?.removeAllRanges()
  selection?.addRange(range)
}

export const CopyButton = ({ value, fallbackTargetId }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => () => clearTimeout(timer.current), [])

  const showCopied = () => {
    setIsCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setIsCopied(false), RESET_AFTER_MS)
  }

  const handleFailure = () => {
    if (fallbackTargetId) selectText(fallbackTargetId)
  }

  const copy = () => {
    navigator.clipboard?.writeText(value).then(showCopied, handleFailure) ?? handleFailure()
  }

  return (
    <button className={styles.button} type="button" onClick={copy} aria-live="polite">
      <span className={styles.icon}>
        <IconSwap idle={<Icon name="copy" />} active={<Icon name="check" className={styles.check} />} isActive={isCopied} />
      </span>
      {isCopied ? 'copied' : 'copy'}
    </button>
  )
}
