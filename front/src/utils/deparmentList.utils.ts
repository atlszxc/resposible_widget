import { IManager } from "../types"

export const removeDepartmentManagers = (deparmentState: string[], managers: IManager[]) => ([] as string[]).concat(deparmentState.filter((managerId) => {
    const managersIds = managers.map(manager => manager.id)
    if(!managersIds.includes(managerId)) {
        return managerId
    }
}))

export const removeManager = (deparmentState: string[], id: string) => deparmentState.filter(managerId => managerId !== id)

export const addDeparmentManagers = (deparmentState: string[], managers: IManager[]) => deparmentState.concat([...managers.map(manager => manager.id)])

export const addManager = (deparmentState: string[], id: string) => deparmentState.concat(id)