import React, { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Form from'./components/Form';

function App() {
  const [typeText, setTypeText] = useState("")
  const [todoItems, setTodoItems] = useState([])
  const [myState,setMyState] = useState("")
  const [filterItems, setFilterItems] = useState([])

  const filterHandler=()=>{
    switch(myState){
      case 'completed':
        console.log("completed")
        setFilterItems(todoItems.filter((item)=>item.completed===true))
        break;
      case 'uncompleted':
        console.log("uncompleted")
        setFilterItems(todoItems.filter((item)=>item.completed!==true))
        break;
      default:
        setFilterItems(todoItems)
        break;
    }
    saveLocalStorage()
  }

  const saveLocalStorage=()=>{
    localStorage.setItem("todo",JSON.stringify(todoItems))
  }

  const getLocalStorage=()=>{
    if(localStorage.getItem("todo")===null){
      localStorage.setItem("todo",JSON.stringify([]));
    }

    else{
      let localSave = localStorage.getItem("todo")
      setTodoItems(JSON.parse(localSave))
    }
  }
  useEffect(getLocalStorage,[])
  useEffect(filterHandler,[todoItems,myState])

  return (
    <div>
      <header>Do Something</header>
      <Form 
      setTypeText={setTypeText} 
      typeText={typeText} 
      todoItems={todoItems} 
      setTodoItems={setTodoItems} 
      setMyState={setMyState}
      />

      <TodoList 
      todoItems={todoItems} 
      setTodoItems={setTodoItems}
      filterItems = {filterItems} 
      />
    </div>
  );
 }

export default App;
