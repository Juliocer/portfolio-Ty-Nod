import { useEffect, useState } from 'react'
import { api } from '../services/api'
import type { Project } from '../types/project'
import styles from './Projects.module.css'

function ExternalIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    )
}

function GithubIcon() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
    )
}

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        api.get<Project[]>('/projects')
            .then(res => setProjects(res.data))
            .catch(() => setError(true))
            .finally(() => setLoading(false))
    }, [])

    return (
        <section id="projetos" className={styles.section}>
            <div className="container">
                <span className={styles.label}>Projetos</span>
                <h2 className={styles.heading}>
                    O que eu <em>construí</em>
                </h2>

                {loading && (
                    <div className={styles.skeleton}>
                        {[1, 2, 3].map(i => (
                            <div key={i} className={styles.skeletonCard} />
                        ))}
                    </div>
                )}

                {error && (
                    <p className={styles.empty}>
                        Não foi possível carregar os projetos. Tente novamente.
                    </p>
                )}

                {!loading && !error && (
                    <div className={styles.list}>
                        {projects.map((project, i) => (
                            <article key={project.id} className={styles.card}>
                                <div className={styles.cardMeta}>
                                    <span className={styles.index}>
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    {project.featured && (
                                        <span className={styles.featured}>Destaque</span>
                                    )}
                                </div>

                                <div className={styles.cardBody}>
                                    <h3 className={styles.title}>{project.name}</h3>
                                    <p className={styles.description}>{project.description}</p>

                                    <div className={styles.stack}>
                                        {project.language && (
                                            <span className={styles.tag}>{project.language}</span>
                                        )}
                                        {project.stack.map(tech => (
                                            <span key={tech} className={styles.tag}>{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.cardLinks}>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.link}
                                    >
                                        <GithubIcon />
                                        GitHub
                                    </a>
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.link}
                                        >
                                            <ExternalIcon />
                                            Demo
                                        </a>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}