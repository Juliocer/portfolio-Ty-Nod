import styles from './About.module.css'

const facts = [
    { number: '1+', label: 'ano de experiência' },
    { number: '10+', label: 'projetos entregues' },
    { number: '100%', label: 'foco em qualidade' },
]

export default function About() {
    return (
        <section id="sobre" className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.left}>
                        <span className={styles.label}>Sobre mim</span>
                        <h2 className={styles.heading}>
                            Código limpo, <br />
                            <em>soluções reais.</em>
                        </h2>
                    </div>

                    <div className={styles.right}>
                        <p className={styles.bio}>
                            Sou um desenvolvedor fullstack apaixonado por construir aplicações
                            que resolvem problemas de verdade. Trabalho com Node.js e TypeScript
                            no backend, criando APIs sólidas e bem testadas, e com React no
                            frontend para interfaces intuitivas.
                        </p>
                        <p className={styles.bio}>
                            Acredito que bom código é aquele que outra pessoa — ou você mesmo
                            daqui a seis meses — consegue ler e entender facilmente. Por isso,
                            dou atenção especial a arquitetura, testes e documentação.
                        </p>

                        <div className={styles.facts}>
                            {facts.map(f => (
                                <div key={f.label} className={styles.facts}>
                                    <span className={styles.factNumber}>{f.number}</span>
                                    <span className={styles.factLabel}>{f.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}