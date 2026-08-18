/**
 * AddTodo
 */

// import React from "react";
/** conpornents */
import { InputForm } from "../Common/InputForm";
// styles
import styles from "./style.module.css";

/**
 * AddTodo
 * @param {*} props
 * @returns
 */
export const AddTodo = (props) => {
  /** props */
  const { addInputValue, onChangeAddInputValue, handleAddTodo } = props;
  return (
    <>
      <h2 className={styles.addTitle}>ADD TODO</h2>
      {/* <input
        className={styles.input}
        type="text"
        value={addInputValue}
        onChange={onChangeAddInputValue}
        onKeyDown={handleAddTodo}
      /> */}
      <InputForm
      placeholder={"New TODO"}
      inputValue={addInputValue}
      handleChangeValue={onChangeAddInputValue}
      handleKeyDown={handleAddTodo} />
    </>
  );
};
