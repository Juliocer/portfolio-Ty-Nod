import { Router } from "express";
import { ContactController } from "../controllers/contact.controller";

const contactRouter = Router()
const controller = new ContactController()

contactRouter.post('/', (req, res) => controller.send(req, res))

export { contactRouter }