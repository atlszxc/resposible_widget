import { Request, Response } from "express";
import axios from 'axios'
import { Config } from "../config";
import accountModel from "../models/account.model";

const createAuthTokenData = (requestType: string) => {
    return {
        client_id: Config.CLIENT_ID,
        client_secret: Config.SECRET_ID,
        grant_type: requestType,
        redirect_uri: Config.REDIRECT_URI
    }
}

const requestAccessToken = async (subdomine: string, code: string) => {
    const response = await axios.post(`https://${subdomine}/oauth2/access_token`, {...createAuthTokenData('authorization_code'), code})
    return response.data
}

const getAccountData = async (subdomine: string, token: string) => {
    const response = await axios.get(`https://${subdomine}/api/v4/account`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response.data
}

export const getAccessToken = async (subdomine: string, code: string) => {
    try {
        const tokenData = await requestAccessToken(subdomine, code)
        const accountData = await getAccountData(subdomine, tokenData.access_token)
        accountModel.create({ 
            accountId: accountData.id,
            accessToken: tokenData.access_token,
            refreshToken: tokenData.refresh_token,
            subdomine: subdomine, 
        })
    } catch (error) {
        console.log(error)
    }
}

const refreshAccessToken = async () => {}

