import templateModel from "../models/template.model"
import { ICreateTemplateDto } from "../types/templateService.dto"

const TemplateService = {
    async getTemplates(id: string) {
        try {
            const templates = await templateModel.find({ accountId: id })            
            return templates
        } catch (error) {
            console.log(error)
        }
    },

    async createTemplate(id: string, data: ICreateTemplateDto) {
        try {
            const template = await templateModel.create({ ...data, accountId: id })
            return template
        } catch (error) {
            console.log(error)
        }
    },

    async deleteTemplate(accountId: string, templateId: string) {
        try {
            await templateModel.deleteOne({ _id: templateId })
            const templates = await templateModel.find({ accountId })
            return templates
        } catch (error) {
            console.log(error)
        }
    }
}

export default TemplateService