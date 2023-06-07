import { Request, Response } from "express";
import { getAccessToken } from "../services/auth.service";

const AuthController = {
    async auth(req: Request, res: Response) {
        try {
            await getAccessToken(req.query.referer as string, req.query.code as string)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: error })
        }
    }
}

export default AuthController