import React, { useState } from 'react'
import Todos from '../components/todos/Todos'
import TodosForm from '../components/todos/TodosForm'
const initData =localStorage.getItem('todos')?JSON.parse(localStorage.getItem('todos')):[]
const TodoList = ({setNumOfItems}) => {
  const [todos ,setTodos]=useState(initData);
  const [mode,setMode ]=useState("add");
  const [activeTodo,setActiveTodo ]=useState(null);
  const saveToLocal=()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  }
  saveToLocal()
  setNumOfItems(todos.length)
  const toggleTodo=(id)=>{
    setTodos(data=>{ 
      const newData=data.map((td)=>{
        if (td.id==id) {
          return {...td,done:!td.done};
        }
        return td;
      })
      return newData;
    })

  };
  const deleteTodo=(id)=>{
    setTodos(data=>{ 
      const newData=data.filter(td=>td.id !=id);
      return newData;
    })


  };
  const addNewTodo=(title)=>{
    if (mode=='edit') {
      const newtodos=todos.map(td=> {
        if (td.id==activeTodo.id) {
          td.title=title;
        }
        return td 
      })
      setTodos(newtodos);
  
      setMode("add")
    }else{    
      const newTodo ={id :new Date().getTime(),title,done:false};
        setTodos([newTodo ,...todos])
    

    }
  };
  let currentTodos= [...todos]
  if (mode=="filter"){
    currentTodos=todos.filter(t=> !t.done)
  }
  if (mode=='edit') {
    currentTodos=[activeTodo];
  }
  const changeMode=()=>{
    if (mode=="filter"){
      setMode("add");
    }else{
      setMode("filter")
    }
  };
  const editTodo=(todo)=>{
    setMode('edit');
    setActiveTodo(todo);

  }

  return (
    <main>
        <div className='container'>
            <div className='todos'>
                <TodosForm 
                addNewTodo={addNewTodo} 
                changeMode={changeMode} 
                mode={mode}
                activeTodo={activeTodo}
                />
                <Todos 
                editTodo={editTodo} 
                todos={currentTodos} 
                toggleTodo={toggleTodo} 
                deleteTodo={deleteTodo}
                mode={mode}
                />


            </div>
        </div>
    </main>
  )
}

export default TodoList
