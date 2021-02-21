import React from 'react';
import Todo from './Todo'

const TodoList = ({setTodoItems,todoItems,filterItems}) =>{
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filterItems.map((todo)=>(
                    <Todo key={todo.id} 
                    id={todo.id} 
                    text={todo.text} 
                    todo={todo} 
                    setTodoItems={setTodoItems} 
                    todoItems={todoItems}/>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;