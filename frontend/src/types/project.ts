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