import styles from './icon.module.css'

export type IconName = 'arrow-up-right' | 'copy' | 'check' | 'mail'

const PATHS: Record<IconName, React.ReactNode> = {
  'arrow-up-right': <path d="M7 17 17 7M8 7h9v9" />,
  copy: (
    <>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V6a2 2 0 0 1 2-2h8" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
}

type IconProps = { name: IconName; className?: string }

export const Icon = ({ name, className }: IconProps) => (
  <svg className={[styles.icon, className].filter(Boolean).join(' ')} viewBox="0 0 24 24" aria-hidden="true">
    {PATHS[name]}
  </svg>
)
