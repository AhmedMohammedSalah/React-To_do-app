import React, { useEffect, useState } from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import { modesTypes } from '../../store/types';
const Todos = ( props ) => {
    const [todos, setTodos] = useState( [] );
    const allTodos = useSelector( ( state ) => state.todosReducer.todos );
    const currentTodo = useSelector( ( state ) => state.todosReducer.activeTodo );
    const mode =useSelector((state) =>state.modesReducer.mode)
    useEffect( () => {
        if ( mode === modesTypes.EDIT ) {
            setTodos( [currentTodo] );
        } else if ( mode === modesTypes.NOTDONE ) {
            let notDoneTodos = todos.filter( ( td ) => td.done===false );
            setTodos( notDoneTodos );

        } else {
            setTodos( allTodos );
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mode, currentTodo, allTodos] );
    useEffect( () => {
        localStorage.setItem( 'todos', JSON.stringify( allTodos ) )
    }, [allTodos]);
    return (
        <div className='todos-list'>
            {todos.map(todo=>(
            <Todo 
            todo={todo}key={todo.id} 
            />
            ))}
            
            {todos.length === 0 ?
                ( <h3 className='no-todos'>لا يوجد مهام حالية  ....</h3> )
                :( mode === modesTypes.NOTDONE && todos.length === 0) ? ( <h3 className='no-todos'>لا يوجد مهام نشطة حالية  ....</h3>):null}
        </div>
    )
}

export default Todos
