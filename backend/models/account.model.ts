import { Schema, model } from 'mongoose'
import { ITemplate } from '../types/template.type'

const AccountSchema = new Schema({
    accountId: String,
    accessToken: String,
    refreshToken: String,
    subdomine: String,
    templates: {
        type: Array<ITemplate>,
        default: []
    }
})

export default model('account', AccountSchema)