import { Schema, model } from 'mongoose'

const TemplateSchema = new Schema({
    accountId: String,
    title: String,
    alghoritm: Object,
    extraOptions: Array<Object>,
    managers: Array<String>,
    date: String,
})

export default model('template', TemplateSchema)
