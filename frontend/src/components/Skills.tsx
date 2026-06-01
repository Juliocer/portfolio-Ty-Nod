import { useState } from 'react'
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

const INITIAL_VISIBLE = 3

export default function Skills() {
    const [expanded, setExpanded] = useState<Record<string, boolean>>({})

    const toggle = (title: string) => {
        setExpanded(prev => ({ ...prev, [title]: !prev[title] }))
    }

    return (
        <section id="skills" className={styles.section}>
            <div className="container">
                <span className={styles.label}>Habilidades</span>
                <h2 className={styles.heading}>
                    O que eu <em>domino</em>
                </h2>

                <div className={styles.grid}>
                    {categories.map(cat => {
                        const isExpanded = expanded[cat.title]
                        const visibleItems = isExpanded
                            ? cat.items
                            : cat.items.slice(0, INITIAL_VISIBLE)
                        const hasMore = cat.items.length > INITIAL_VISIBLE

                        return (
                            <div key={cat.title} className={styles.card}>
                                <h3 className={styles.cardTitle}>{cat.title}</h3>
                                <ul className={styles.list}>
                                    {visibleItems.map(item => (
                                        <li key={item} className={styles.item}>
                                            <span className={styles.dot} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                {hasMore && (
                                    <button
                                        className={styles.toggleBtn}
                                        onClick={() => toggle(cat.title)}
                                    >
                                        {isExpanded
                                            ? 'Ver menos ↑'
                                            : `Ver mais (${cat.items.length - INITIAL_VISIBLE}) ↓`}
                                    </button>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}