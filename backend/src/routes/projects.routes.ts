import { Router } from "express";
import { ProjectsController } from '../controllers/projects.controller'

const projectsRouter = Router()
const controller = new ProjectsController()

projectsRouter.get('/', (req, res) => controller.index(req, res))

export { projectsRouter }
