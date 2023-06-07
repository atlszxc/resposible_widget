import { Request, Response } from "express";
import TemplateService from "../services/template.service";

const TemplateController = {
    async getTemplates(req: Request, res: Response) {
        try {
            const templates = await TemplateService.getTemplates(req.params.id)
            res.status(200).send(templates)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: error })
        }
    },

    async createTemplate(req: Request, res: Response) {
        try {
            console.log(req.body)
            const template = await TemplateService.createTemplate(req.params.id, req.body)
            res.status(200).send(template)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: error })
        }
    },

    async deleteTemplate(req: Request, res: Response) {
        try {
            const templates = await TemplateService.deleteTemplate(req.params.accountid, req.params.templateid)
            res.status(200).send(templates)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: error })
        }
    }
}

export default TemplateController