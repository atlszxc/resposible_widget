import axios from "axios"
import { ACCOUNTID } from "../mock/lists.mock"

const templateService = {
    getTemplates: async (id: string) => {
        const response = await axios.get(`http://localhost:8000/template/${id}`)
        return response.data
    },

    createTemplate: async (templateData: any) => {
        const response = await axios.post(`http://localhost:8000/template/${ACCOUNTID}`, templateData)
        return response.data
    },

    updateTemplate: async (id: string, updateData: any) => {
        const response = await axios.put(`https://af8c-77-95-92-110.eu.ngrok.io/templates/${ACCOUNTID}`, updateData)
        return response.data
    },

    deleteTemplate: async (id: string) => {
        const response = await axios.delete(`http://localhost:8000/template/${ACCOUNTID}/${id}`)
        return response.data
    }
}

export default templateService