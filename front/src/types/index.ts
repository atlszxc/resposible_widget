export interface ITemplate {
    _id?: string
    title: string,
    alghoritm: ISelectItem,
    extraOptions: ISelectItem[],
    managers: string[],
    date: string,
}

export interface IManager {
    active: boolean,
    amo_profile_id: string,
    amojo_id: string,
    avatar: string,
    free_user: string,
    group: string,
    id: string,
    is_admin: string,
    login: string,
    option: string,
    status: string,
    theme: string,
    title: string,
    managers?: any
}

export type IManagerMultiselectUsage = Pick<IManager, "title" | 'id'> 

export interface IDepartment {
    id: string,
    title: string,
    managers: Array<IManager>
}

export interface ISelectItem {
    value: string,
    label: string,
}

export function isDepartment(object: any): object is IDepartment {
    return 'managers' in object
}

export interface IDepartamentsList<T> {
    title: string,
    elems: T[],
    sx?: Object | null,
    managersIds: string[]
    handler: (callback: (arg:string[]) => string[]) => void | React.Dispatch<string[]>
}

export interface IDepatmentListItem<T> {
    data: T,
    handler: (callback: (arg:string[]) => string[]) => void | React.Dispatch<string[]>,
    managersIds: string[]
}