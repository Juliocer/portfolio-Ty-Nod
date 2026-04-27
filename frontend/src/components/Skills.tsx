import styles from './Skills.module.css'

const categories = [
    {
        title: 'Backend',
        items: ['Node.js', 'TypeScript', 'Express', 'TypeORM', 'Jest', 'REST APIs'],
    },
    {
        title: 'Frontend',
        items: ['React', 'TypeScript', 'Vite', 'CSS Modules', 'HTML5', 'Axios'],
    },
    {
        title: 'Banco de dados',
        items: ['PostgreSQL', 'SQLite', 'MySQL', 'Migrations', 'Query Builder'],
    },
    {
        title: 'Ferramentas',
        items: ['Git', 'GitHub', 'Docker', 'Linux', 'VS Code', 'Insomnia'],
    },
]

export default function Skills() {
    return (
        <section id="skills" className={styles.section}>
            <div className="container">
                <span className={styles.label}>Habilidades</span>
                <h2 className={styles.heading}>
                    O que eu <em>domino</em>
                </h2>

                <div className={styles.grid}>
                    {categories.map(cat => (
                        <div key={cat.title} className={styles.card}>
                            <h3 className={styles.cardTitle}>{cat.title}</h3>
                            <ul className={styles.list}>
                                {cat.items.map(item => (
                                    <li key={item} className={styles.item}>
                                        <span className={styles.dot} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}