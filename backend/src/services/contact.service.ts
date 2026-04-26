import nodemailer from 'nodemailer'

interface ContactPayload {
    name: string
    email: string
    message: string
}

export class ContactService {
    async send({ name, email, message }: ContactPayload): Promise<void> {

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        })

        await transporter.sendMail({
            from: `"Portfólio" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL,
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