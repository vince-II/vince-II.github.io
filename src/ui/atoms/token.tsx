import type { ReactNode } from 'react'
import styles from './token.module.css'

export type TokenKind = 'comment' | 'keyword' | 'string' | 'property' | 'constant' | 'plain' | 'bullet'

type TokenProps = { kind: TokenKind; children: ReactNode }

export const Token = ({ kind, children }: TokenProps) => <span className={styles[kind]}>{children}</span>
