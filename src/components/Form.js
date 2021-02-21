import React from 'react';

const　Form = ({typeText,setTypeText,setTodoItems,todoItems,setMyState}) =>{
    const clickHandler = (e) =>{
        e.preventDefault();
        setTodoItems([...todoItems,{text:typeText,completed:false,id:(Math.random()+Math.random())*1000,deleted:false}]);
        setTypeText("")
    }

    const changeHandler =(e)=>{
        setTypeText(e.target.value)
    }
    
    const stateHandler=(e)=>{
        setMyState(e.target.value)
    }

    return(
        <form>
            <input value={typeText} onChange={changeHandler} type="text" className="todo-input"></input>
            <button onClick={clickHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div onClick={stateHandler} className="select">
                <select  name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form