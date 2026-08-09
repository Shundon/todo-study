import "./App.css";

export const App = () => {
  return (
    <> 
      <div className="App">
        <h1 className="title">Todo List</h1>
        {/*Todo追加領域*/}
        <section className="common-area">
          <h2 className="add-title">ADD TODO</h2>
          <input type="text" />

          {/*ToDo一覧領域*/}
          <section className="common-area">
            <ul className="todo-list">
              <li className="todo">
                <span className="todo-task">タスク1</span>
                <i className="fa-solid fa-trash-can"></i>
              </li>
              <li className="todo">
                <span className="todo-task">タスク2</span>
                <i className="fa-solid fa-trash-can"></i>
              </li>
            </ul>

          </section>


        </section>

      </div>
    </>
  );
};
