import TodoList from './views/TodoList'
import Header from './components/todos/Header';
import './assets/css/index.css'
import { useState } from 'react';

function App() {
  const [numOfItems,setNumOfItems]=useState(0);
  return (
    <div className="App">
      <Header numOfItems={numOfItems}/>
      <TodoList setNumOfItems={setNumOfItems} />
    </div>
  );
}

export default App;
