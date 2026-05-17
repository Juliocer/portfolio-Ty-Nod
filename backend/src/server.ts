import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { projectsRouter } from './routes/projects.routes'
import { contactRouter } from './routes/contact.routes'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3333

// CORS: permite o frontend (Railway ou localhost) acessar a API
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173',
  'http://localhost:3000',
].filter(Boolean) as string[]

/* process.env.FRONTEND_URL || 'http://localhost:5173' */

app.use(
  cors({
    origin: (origin, callback) => {
      if(!origin) return callback(null, true)
      if(allowedOrigins.includes(origin)) return callback(null, true)
      callback(new Error(`Origem não permitida pelo CORS: ${origin}`))
    },
    credentials: true,
  })
)

app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'API do portfólio funcionando!',
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV || 'development',
  })
})

app.use('/api/projects', projectsRouter)
app.use('/api/contact', contactRouter)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
  console.log(`FRONTEND_URL: ${process.env.FRONTEND_URL || '(não definido)'}`)
})