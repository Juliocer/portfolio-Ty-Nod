import { Response, Request } from "express";
import { GithubService } from "../services/github.service";

export class ProjectsController {
    private service = new GithubService()

    async index(_req: Request, res: Response): Promise<Response> {
        try {
            const projects = await this.service.getProjects()
            return res.json(projects)
        } catch (error) {
            console.error('Erro ao buscar projetos do GitHub', error)
            return res.status(500).json({
                error: 'Não foi possível buscar os projetos, Tente novamente.',
            })
        }
    }
}