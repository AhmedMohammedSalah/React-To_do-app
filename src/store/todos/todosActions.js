import { todosTypes } from "../types"


export const addNewToDo = ( newTodo ) => {

    return {
        type: todosTypes.ADD_TODO,
        paylod: newTodo
    }
};

export const handleDone = ( id ) => {
    return {
        type: todosTypes.EDIT_COMPLETION,
        paylod: id
    }
};

// DELETE_TODO:
export const deleteTodo = ( id ) => {
    return {
        type: todosTypes.DELETE_TODO,
        paylod: id
    }
};
// SET_ACTIVE_TODO:
export const setActiveTodo = ( todo ) => {
    return {
        type: todosTypes.SET_ACTIVE_TODO,
        paylod: todo
    }
}
// EDIT_TODO:
export const editTodo = ( title ) => {
    return {
        type: todosTypes.EDIT_TODO,
        paylod: title
    }

}
