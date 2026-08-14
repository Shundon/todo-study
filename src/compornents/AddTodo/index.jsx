/**
 * AddTodo
 */

// import React from "react";
// styles
import "./style.css"

/**
 * AddTodo
 * @param {*} props 
 * @returns 
 */
export const AddTodo = (props) => {
    /** props */
    const {addInputValue, onChangeAddInputValue, handleAddTodo} = props;
    return (
        <>
            <h2 className="addTitle">ADD TODO</h2>
            <input
            className="input"
            type="text"
            value={addInputValue}
            onChange={onChangeAddInputValue}
            onKeyDown={handleAddTodo}
            />
        </>

    )

}