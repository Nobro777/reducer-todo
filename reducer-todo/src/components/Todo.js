import React, { useState, useReducer } from 'react';
import { mainReducer, initialState } from '../reducers/mainReducer';

export default function Todo() {
    
    const [todoList, dispatch] = useReducer(mainReducer, initialState)
    
    const [todoItem, setTodoItem] = useState('')

    const handleChanges = e => {
        setTodoItem(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({ type: 'NEWTODO', payload: todoItem })
        setTodoItem("")
    }

    const handleClear = () => {
        dispatch({type: 'CLEAR_COMPLETED'})
    }

    const toggleItem = (itemId) => {
        dispatch({ type: 'TOGGLE_COMPLETED', id: itemId })
    }

    console.log("this is my state", todoList)
    return (
        <div>
            <h1>List of To-Do's...</h1>
            <div className="form">
                <form 
                onSubmit={handleSubmit}
                style={{display: "flex", flexDirection: "column", margin: "2% 35% 0 35%"}}>
                    <label>Enter a To-Do Item: </label>
                    
                        <input
                        type="text"
                        name="todoItem"
                        value={todoItem}
                        onChange={handleChanges}
                        ></input>

                    <button 
                    style={{ margin: "2% 0 2% 0%"}}>
                        ADD
                        </button>

                </form>
                <button onClick={handleClear}>
                        CLEAR
                        </button>
                        
                <div className="item-list">
                    {todoList.map(elem => (
                        <div style={{margin: "1% 0 1% 0"}} className={`${elem.completed ? 'completed' : ''}`} key={elem.id} onClick={() => {toggleItem(elem.id)}}>
                            {elem.task}
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}
