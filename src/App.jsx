/**
 * App
 */
import { useState } from "react";
/** AddTodo */
import { AddTodo } from "./compornents/AddTodo";
import { TodoList } from "./compornents/TodoList";

/** hooks */
import { useApp } from "./hooks/useApp";

/*styles*/
import "./App.css";

export const App = () => {
  /** hooks */
  const [states, actions] = useApp();

  return (
    <>
      <div className="App">
        <h1 className="title">Todo List</h1>

        {/*Todo追加領域*/}
        <section className="commonArea">
          <AddTodo
            addInputValue={states.addInputValue}
            onChangeAddInputValue={actions.onChangeAddInputValue}
            handleAddTodo={actions.handleAddTodo}
          />

          {/*ToDo一覧領域*/}
          <section className="common-area">
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
