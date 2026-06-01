import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Home', href: '#' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo} onClick={close}>Júlio.</a>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <button className={styles.closeBtn} onClick={close} aria-label="Fechar menu">
            ✕
          </button>

          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={close}
            >
              {link.label}
            </a>
          ))}

          <a href="#contato" className={styles.cta} onClick={close}>
            Fale comigo
          </a>
        </nav>

        {menuOpen && (
          <div className={styles.backdrop} onClick={close} />
        )}

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </div>
    </header>
  )
}