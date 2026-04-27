import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Disponível para projetos
        </div>

        <h1 className={styles.heading}>
          Olá, sou <em>Júlio</em> —<br />
          Desenvolvedor<br />
          Fullstack.
        </h1>

        <p className={styles.sub}>
          Construo APIs robustas e interfaces que as pessoas adoram usar.
          Node.js, TypeScript e React são meus instrumentos.
        </p>

        <div className={styles.actions}>
          <a href="#projetos" className={styles.btnPrimary}>Ver projetos</a>
          <a href="#contato" className={styles.btnSecondary}>Entre em contato</a>
        </div>
      </div>
    </section>
  )
}