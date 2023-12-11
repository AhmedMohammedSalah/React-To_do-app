import { todosTypes } from "../types";
const initialState = {
    todos:localStorage.getItem( 'todos' )? JSON.parse( localStorage.getItem( 'todos' ) ) :[],
    activeTodo:{}
}
const todosReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case todosTypes.ADD_TODO:
            return {
                ...state,
                todos:[...state.todos,action.paylod]
            }
        case todosTypes.EDIT_COMPLETION:
            
            return {
                ...state,
                todos: getCompleted( state.todos, action.paylod )
            }
            case todosTypes.DELETE_TODO:
            
            return {
                ...state,
                todos: deleteTodo( state.todos, action.paylod )
            }
            case todosTypes.SET_ACTIVE_TODO:
            
            return {
                ...state,
                activeTodo: action.paylod 
            }
            case todosTypes.EDIT_TODO:
            
            return {
                ...state,
                todos: editCompleted( state.todos, state.activeTodo,action.paylod )
            }
            
        default:
            return {
                ...state
            }
    }
}
const getCompleted = ( todos, id ) => {
    const newData = todos.map( ( td ) => {
        if ( td.id === id ) {
            return { ...td, done: !td.done };
        }
        return td;
    } )

    return newData;
}
const editCompleted = ( todos, todo, title ) => {
    
    const newtodos = todos.map( td => {
        if ( td.id === todo.id ) {
            td.title = title;
            return td
        }
        else { return td }

    } )

    return newtodos;
}

const deleteTodo = ( todos, id ) => {
    const newData = todos.filter( td => td.id !== id );
    return newData;  
}

export default todosReducer