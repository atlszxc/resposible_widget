import { IAlghoritm } from "./alghoritm.type";
import { IManager } from "./manager.type";

export interface ITemplate {
    title: string,
    alghoritm: IAlghoritm,
    managers: IManager[],
}