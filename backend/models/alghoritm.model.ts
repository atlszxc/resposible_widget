import { Schema, model } from 'mongoose'
import { IAlghoritm, IOption } from '../types/alghoritm.type'

const AlghoritmSchema = new Schema<IAlghoritm>({
    title: String,
    options: Array<IOption>
})

export default model('alghoritm', AlghoritmSchema)