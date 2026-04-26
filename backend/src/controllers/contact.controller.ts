import { Request, Response } from "express";
import { ContactService } from "../services/contact.service";

interface ContactBody {
    name: string
    email: string
    message: string
}

export class ContactController {
    private service = new ContactService()

    async send(req: Request, res: Response): Promise<Response> {
        const { name, email, message } = req.body as ContactBody

        if (!name || !email || !message) {
            return res.status(400).json({
                error: 'Campos obrigatorios: name, email, message',
            })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                error: 'E-mail inválido',
            })
        }

        try {
            await this.service.send({ name, email, message })
            return res.status(200).json({
                message: 'Mensagem enviada com sucesso!',
            })
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error)
            return res.status(500).json({
                error: 'Erro ao enviar mensagem. Tente novamente.',
            })
        }
    }
}