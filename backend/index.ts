import * as dotenv from 'dotenv'
dotenv.config()
import express, { json, urlencoded } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import AuthController from './controllers/auth.controller'
import TemplateController from './controllers/template.controller'
import DigitalPipelineController from './controllers/digitalpipeline.controller'

const app = express()
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors())

const DB_URI = process.env.DB_URI
const PORT = process.env.PORT ?? 5000

const startServer = async () => {
   if (DB_URI) {
    await mongoose.connect(DB_URI, {
        maxPoolSize: 10,
    })
    app.listen(PORT, () => {
        console.log(`Server has been started on port: ${PORT}`)
    })
   }
}


app.get('/login', AuthController.auth)
app.get('/template/:id', TemplateController.getTemplates)
app.post('/template/:id', TemplateController.createTemplate)
app.delete('/template/:accountid/:templateid', TemplateController.deleteTemplate)
app.post('/dphook', DigitalPipelineController.dpTrigger)

startServer()
