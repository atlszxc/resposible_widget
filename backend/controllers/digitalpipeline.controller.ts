import { Request, Response } from "express";

const DigitalPipelineController = {
    async dpTrigger(req: Request, res: Response) {
        try {
            console.log(req.body)
        } catch (error) {
            
        }
    }
}

export default DigitalPipelineController