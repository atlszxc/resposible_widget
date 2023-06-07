import { IAlghoritm } from "./alghoritm.type";

export interface ICreateTemplateDto {
    title: string,
    alghoritm: IAlghoritm,
    managers: string[]
}