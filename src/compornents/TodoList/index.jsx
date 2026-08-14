/**
 * TodoList
 */
/* styles */
import "./style.css"
/**
 * TodoList
 * @param {*} props 
 * @returns 
 */

export const TodoList = (props) => {
    /** props */
    const{todoList, handleDeleteTodo} = props;
    return (
    <ul className="todo-list">
        {todoList.map((todo) => {
        return (
            <li className="todo" key = {todo.id}>
                <span className="task">{todo.title}</span>
                <i className="fa-solid fa-trash-can trash"
                  onClick={() => handleDeleteTodo(todo.id, todo.title)}>
                </i>
            </li>
                );
        })}
    </ul>


    )
}