import { ContactController } from "../controllers/contact.controller";
import { ContactService } from "../services/contact.service";
import { Request, Response } from "express";

jest.mock('../services/contact.service')

const makeMockResponse = () => {
    const res = {} as Response
    res.json = jest.fn().mockReturnValue(res)
    res.status = jest.fn().mockReturnValue(res)
    return res
}

const makeMockRequest = (body = {}) => ({ body } as Request)

describe('ContactController', () => {
    let controller: ContactController
    let mockSend: jest.Mock

    beforeEach(() => {
        mockSend = jest.fn().mockResolvedValue(undefined);
        (ContactService as jest.Mock).mockImplementation(() => ({
            send: mockSend,
        }))
        controller = new ContactController()
    })

    it('deve retornar 400 quando name está faltando', async () => {
        const req = makeMockRequest({ email: 'julio@email.com', message: 'Olá!' })
        const res = makeMockResponse()

        await controller.send(req, res)

        expect(res.status).toHaveBeenCalledWith(400)
    })

    it('deve retornar 400 quando message está faltando', async () => {
        const req = makeMockRequest({ name: 'Júlio', email: 'julio@email.com' })
        const res = makeMockResponse()

        await controller.send(req, res)

        expect(res.status).toHaveBeenCalledWith(400)
    })

    it('deve retornar 400 quando e-mail é invalido', async () => {
        const req = makeMockRequest({
            name: 'Júlio',
            email: 'email-invalido',
            message: 'Olá!'
        })
        const res = makeMockResponse()

        await controller.send(req, res)

        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenCalledWith(
            expect.objectContaining({ error: 'E-mail inválido' })
        )
    })

    it('deve retornar 200 quando dados são válidos', async () => {
        const req = makeMockRequest({
            name: 'Júlio',
            email: 'julio@email.com',
            message: 'Olá quero conversar!',
        })
        const res = makeMockResponse()

        await controller.send(req, res)

        expect(res.status).toHaveBeenCalledWith(200)
        expect(mockSend).toHaveBeenCalledTimes(1)
    })

    it('deve retornar 500 quando o service falha', async () => {
        mockSend.mockRejectedValue(new Error('SMTP error'))

        const req = makeMockRequest({
            name: 'Júlio',
            email: 'julio@email.com',
            message: 'Olá!',
        })
        const res = makeMockResponse()

        await controller.send(req, res)

        expect(res.status).toHaveBeenCalledWith(500)
    })

})