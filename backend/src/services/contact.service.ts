import { Resend } from 'resend'

interface ContactPayload {
    name: string
    email: string
    message: string
}

export class ContactService {
    async send({ name, email, message }: ContactPayload): Promise<void> {
        const resend = new Resend(process.env.RESEND_API_KEY)

        await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: process.env.CONTACT_EMAIL!,
            replyTo: email,
            subject: `[Portfólio] Nova mensagem de ${name}`,
            html: `
                <h2>Nova mensagem do Portfólio</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>E-mail:</strong> ${email}</p>
                <p><strong>Mensagem:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        })
    }
}