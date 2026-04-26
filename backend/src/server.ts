import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { projectsRouter } from './routes/projects.routes'
import { contactRouter } from './routes/contact.routes'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3333

app.use(cors())
app.use(express.json())

app.get('/health', (_req, res) => {
    res.json({
        status: 'ok',
        message: 'API do portfólio funcionando!',
        timestamp: new Date().toISOString(),
    })
})

app.use('/api/projects', projectsRouter)
app.use('/api/contact', contactRouter)

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})

