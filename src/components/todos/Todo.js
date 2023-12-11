import React from 'react'
import FeatherIcon from "feather-icons-react"
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, handleDone,setActiveTodo } from '../../store/todos/todosActions'
import { changeModes } from '../../store/modes/modesActions';
import { modesTypes } from '../../store/types';

const Todo = ( { todo } ) => {
    const mode =useSelector((state) =>state.modesReducer.mode)
    
    const dispatch = useDispatch();
    const toggleTodo = ( id ) => {
        dispatch( handleDone( id ) );
        if ( mode === modesTypes.NOTDONE ) {
            todo.done = !todo.done;
            
        }
        // dispatch( changeModes( modesTypes.NOTDONE ) );
    }
    return (
        <div className={`todos-todo ${todo.done? 'done':''}`}>
            <div className='todos-todo_icon'onClick={()=>toggleTodo(todo.id)}>
            <FeatherIcon icon={`${todo.done? "check-circle":"circle"}`} />

            </div>
            <div className='todos-todo_text'>{todo.title}</div>
            {mode!=='edit'&&(
            <div className='todos-todo_cta'>
                    <div className='todos-todo_cta-edit' onClick={() => {
                        dispatch( setActiveTodo( todo ) )
                        dispatch( changeModes( modesTypes.EDIT ) )
                        
                    }}>
                    <FeatherIcon icon="edit" size="20"/>

                </div> 
                <div className='todos-todo_cta-delete' onClick={()=>dispatch(deleteTodo(todo.id))}>
                    <FeatherIcon icon="trash-2"size="20"/>

                </div>
            </div>
            )}
        </div>
    )
}

export default Todo 