import styles from './avatar.module.css'

type AvatarProps = { src: string; alt: string }

export const Avatar = ({ src, alt }: AvatarProps) => (
  <span className={styles.avatar}>
    <img src={src} alt={alt} width={320} height={320} />
  </span>
)
