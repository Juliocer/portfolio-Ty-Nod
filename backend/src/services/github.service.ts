import axios from "axios";

export interface GitHubRepo {
    id: number
    name: string
    description: string | null
    html_url: string
    homepage: string | null
    topics: string[]
    language: string | null
    stargazers_count: number
    updated_at: string
    fork: boolean
}

export interface Project {
    id: number
    name: string
    description: string
    githubUrl: string
    liveUrl: string | null
    stack: string[]
    language: string | null
    stars: number
    featured: boolean
    updatedAt: string
}

const FEATURED_REPOS = [
    'Portifolio-R',
    'Busca-repositorio-Especifico-do-Git',
    'Tela-de-Login-com-Validacao-de-Usuario',
]

const HIDDEN_REPOS: string[] = []

export class GithubService {
    private readonly username = 'Juliocer'
    private readonly baseUrl = 'https://api.github.com'

    async getProjects(): Promise<Project[]> {
        const response = await axios.get<GitHubRepo[]>(
            `${this.baseUrl}/users/${this.username}/repos`,
            {
                params: {
                    sort: 'updated',
                    per_page: 100,
                },
                headers: {
                    Accept: 'application/vnd.github.v3+json',
                },
            }
        )

        const repos = response.data
            .filter(repo => !repo.fork)
            .filter(repo => !HIDDEN_REPOS.includes(repo.name))

        const projects: Project[] = repos.map(repo => ({
            id: repo.id,
            name: repo.name,
            description: repo.description ?? 'Sem descrição',
            githubUrl: repo.html_url,
            liveUrl: repo.homepage || null,
            stack: repo.topics ?? [],
            language: repo.language,
            stars: repo.stargazers_count,
            featured: FEATURED_REPOS.includes(repo.name),
            updatedAt: repo.updated_at,
        }))

        return projects.sort((a, b) => {
            if (a.featured && !b.featured) return -1
            if (!a.featured && b.featured) return 1
            return 0
        })
    }
}