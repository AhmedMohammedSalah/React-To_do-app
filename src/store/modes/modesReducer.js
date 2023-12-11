import {modesTypes} from '../types'
const initialState = {
    mode:modesTypes.ADD
}
const modesReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case modesTypes.CHANGEMODE:return {
            ...state,
            mode: action.payload,
        }
        case modesTypes.EDIT: return {
            ...state,
            mode: action.payload,
        }
        default:return {
        ...state
        }
    }
}
export default modesReducer