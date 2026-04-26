import { ProjectsController } from "../controllers/projects.controller";
import { Request, Response } from "express";

const makeMockResponse = () => {
    const res = {} as Response
    res.json = jest.fn().mockReturnValue(res)
    res.status = jest.fn().mockReturnValue(res)
    return res
}

const makeMockRequest = (body = {}) => ({ body } as Request)

describe('ProjectsController', () => {
    let controller: ProjectsController

    beforeEach(() => {
        controller = new ProjectsController()
    })

    it('deve retornar lista de projetos com status 200', async () => {
        const req = makeMockRequest()
        const res = makeMockResponse()

        await controller.index(req, res)

        expect(res.json).toHaveBeenCalledTimes(1)
    })

    it('deve retornar um array na resposta', async () => {
        const req = makeMockRequest()
        const res = makeMockResponse()

        await controller.index(req, res)

        const [data] = (res.json as jest.Mock).mock.calls[0]
        expect(Array.isArray(data)).toBe(true)
    })

    it('cada projeto deve ter os campos obrigatorios', async () => {
        const req = makeMockRequest()
        const res = makeMockResponse()

        await controller.index(req, res)

        const[projects] = (res.json as jest.Mock).mock.calls[0]

        projects.forEach((projects: Record<string, unknown>) => {
            expect(projects).toHaveProperty('id')
            expect(projects).toHaveProperty('name')
            expect(projects).toHaveProperty('description')
            expect(projects).toHaveProperty('githubUrl')
            expect(projects).toHaveProperty('featured')
        })
    })

    it('projetos featured devem aparecer primeiro', async () => {
        const req = makeMockRequest()
        const res = makeMockResponse()

        await controller.index(req, res)

        const [projects] = (res.json as jest.Mock).mock.calls[0]

        const firstNonFeaturedIndex = projects.findIndex(
            (p: Record<string, unknown>) => !p.featured
        )
        const lastFeaturedIndex = projects.reduce(
            (acc: number, p: Record<string, unknown>, i: number) => p.featured ? i : acc, -1
        )

        expect(lastFeaturedIndex).toBeLessThan(firstNonFeaturedIndex)
    })
})