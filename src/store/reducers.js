import { combineReducers } from "redux"
import todosReducer from "./todos/todosReducer"
import modesReducer from "./modes/modesReducer"

const reducers = combineReducers( { todosReducer,modesReducer } );
export default reducers