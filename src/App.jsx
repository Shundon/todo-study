import { useState } from "react";
/*styles*/
import "./App.css";

/*ToDoの初期値*/
const initTodo =[
  {
    id: 1,
    title: "ToDo1",
  },
  {
    id: 2,
    title: "ToDo2",
  },
]

export const App = () => {
  /*state*/
  /*todoList*/
  const [todoList, setTodoList] = useState(initTodo);
  // add input value
  const[addInputValue, setAddInputValue] = useState("");
  /* 採番用ID*/
  const[uniqueId, setUniqueId] = useState(initTodo.length);
  /**
   * add input value更新処理
   * @param {*} event 
   */
  const onChangeAddInputValue = (event) => {
    setAddInputValue(event.target.value);
  }
  
  /**
   * タスク追加処理
   * @param {*} event 
   */
  const handleAddTodo = (event) => {
    if(event.key === "Enter" && addInputValue !== "") {

      const nextUniqueId = uniqueId +1;
      // todoの追加処理
      const newTodoList = [...todoList, {
        id: nextUniqueId,
        title: addInputValue,
      }];
      console.log(newTodoList)
      setTodoList(newTodoList);
      // IDをインクリメント
      setUniqueId(nextUniqueId);
      // addInputValueをリセット
      setAddInputValue("");
    }

  }

  /**
   * タスク削除処理
   * @param {*} targetId 
   */
  const handleDeleteTodo = (targetId, targetTitle) => {
    if(window.confirm(`「${targetTitle}のtodoを削除しますか？」`)){
      const newTodoList = todoList.filter((todo) => {
        return todo.id !== targetId;
      });
      
      setTodoList(newTodoList);
    }
  };
  
  // todoListはデータ、setTodoListは更新するための関数
  // useStateの引数にinitTodoを入れることで、todoListの初期値として扱える

  return (
    <> 
      <div className="App">
        <h1 className="title">Todo List</h1>
        {/*Todo追加領域*/}
        <section className="commonArea">
          <h2 className="addTitle">ADD TODO</h2>
          <input className="input" 
          type="text"
          value={addInputValue}
          onChange={onChangeAddInputValue}
          onKeyDown={handleAddTodo}
           />

          {/*ToDo一覧領域*/}
          <section className="common-area">
            <ul className="todo-list">
              {todoList.map((todo) => {
                return (
                <li className="todo" key = {todo.id}>
                  <span className="task">{todo.title}</span>
                  <i className="fa-solid fa-trash-can trash"
                  onClick={() => handleDeleteTodo(todo.id, todo.title)}></i>
                </li>
                );
              })}
            </ul>
          </section>
        </section>
      </div>
    </>
  );
};
