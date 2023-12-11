import { modesTypes } from "../types"


export const changeModes = ( mode ) => {
    return {
        type: modesTypes.CHANGEMODE,
        payload:mode
    }
}