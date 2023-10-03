import React, { useState } from 'react'
import FeatherIcon from "feather-icons-react"
const TodosForm = ({addNewTodo,changeMode,mode,activeTodo}) => {
    
    const[title,setTitle]=useState('');
    const [editRender,setEditRender]=useState(false);
    const handleTitleChange=(e)=>{
        setTitle(e.target.value);
    }
    if (mode ==='edit' &&!editRender) {
        setTitle(activeTodo.title)
        setEditRender(true)
    }
    return (
        <div>
            <div className='todos-form'>
                <div className={`todos-form_icon ${mode==="filter"?"active":""}`}onClick={changeMode}> 
                    <FeatherIcon icon="circle"/>
                </div>
                <div className='todos-form_form'>
                    <input type="text" placeholder='اضف مهمة جديدة ......'onChange={handleTitleChange}value={title} />

                </div>
                <div className='todos-form_submit'>
                    <button className='btn' disabled={title.length===0?true:false} onClick={()=>{title.length>0&&addNewTodo(title);setTitle('');setEditRender(false)}}>
                        {mode==='edit'?'تعديل ..':'إضافة'}
                        </button>
                </div>
            </div>
        </div>
    )
}

export default TodosForm
