import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.logo}>júlio.</span>
        <p className={styles.copy}>
          © {new Date().getFullYear()} — Desenvolvido com Node.js & React
        </p>
        <nav className={styles.links}>
          <a
            href="https://github.com/Juliocer"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/julio-cesar-478b03367"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  )
}