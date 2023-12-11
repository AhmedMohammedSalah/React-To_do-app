import React, { useEffect, useState } from 'react'
import FeatherIcon from "feather-icons-react"
import { useDispatch, useSelector } from 'react-redux';
import { modesTypes } from '../../store/types';
import { addNewToDo, editTodo, setActiveTodo } from '../../store/todos/todosActions';

import { changeModes } from '../../store/modes/modesActions';
// import { modesReducer } from '../../store/modes/modesReducer';
const TodosForm = () => {
    const[title,setTitle]=useState('');
    const mode =useSelector((state) =>state.modesReducer.mode)
    const dispatch = useDispatch();
    const changeMode = () => {
        console.log(mode)
        if (mode===modesTypes.ADD) { dispatch( changeModes( modesTypes.NOTDONE ) ); }
        else if (mode===modesTypes.NOTDONE) { dispatch( changeModes( modesTypes.ADD ) ); }

    }
    const addNewTodo = () => {
        if ( mode === modesTypes.EDIT ) {
            dispatch( editTodo( title ) );
            dispatch( setActiveTodo( {} ) );
            dispatch( changeModes( modesTypes.ADD ) );
            setTitle( "" );

        } else {
            const newTodo = { id: new Date().getTime(), title, done: false };
            // setTodos([newTodo ,...todos])
            dispatch( addNewToDo( newTodo ) );
            setTitle( "" );

            
        }
    };
    
    const handleTitleChange=(e)=>{
        setTitle(e.target.value);
    }
    const activeTodo =useSelector((state) =>state.todosReducer.activeTodo)
    useEffect( () => {
        if ( mode === modesTypes.EDIT && activeTodo ) {
            setTitle( activeTodo.title );

    }
    }, [mode,activeTodo] );
    
    return (
        <div>
            <div className='todos-form'>
                <div className={`todos-form_icon ${mode===modesTypes.NOTDONE?"active":""}`}onClick={changeMode}> 
                    <FeatherIcon icon="circle"/>
                </div>
                <div className='todos-form_form'>
                    <input type="text" placeholder='اضف مهمة جديدة ......'onChange={handleTitleChange}value={title} onKeyPress={(e)=>{if (e.key==="Enter"){ title.length>0&&addNewTodo();setTitle('');}}} />

                </div>
                <div className='todos-form_submit'>
                    <button className='btn' disabled={title.length===0?true:false} onClick={()=>{title.length>0&&addNewTodo();setTitle('');}}>
                        {mode===modesTypes.EDIT?'تعديل ..':'إضافة'}
                        </button>
                </div>
            </div>
        </div>
    )
}

export default TodosForm
