/**
 * App
 */
import { useState } from "react";
/** AddTodo */
import { AddTodo } from "./compornents/AddTodo";
import { TodoList } from "./compornents/TodoList";
import {InputForm} from "./compornents/Common/InputForm";

/** hooks */
import { useApp } from "./hooks/useApp";

/*styles*/
import styles from "./App.module.css"

export const App = () => {
  /** hooks */
  const [states, actions] = useApp();

  return (
    <>
      <div className={styles.App}>
        <h1 className={styles.title}>Todo List</h1>

        {/*Todo追加領域*/}
        <section className={styles.commonArea}>

          <AddTodo
            addInputValue={states.addInputValue}
            onChangeAddInputValue={actions.onChangeAddInputValue}
            handleAddTodo={actions.handleAddTodo}
          />

          {/* Todo検索フォーム */}
          <section className={states.commonArea}>
            <InputForm 
            placeholder={"Search Keyword"}
            />
          </section>

          {/*ToDoリスト一覧領域*/}
          <section className={styles.commonArea}>
            <TodoList
              todoList={states.todoList}
              handleDeleteTodo={actions.handleDeleteTodo}
            />
          </section>

        </section>
      </div>
    </>
  );
};
