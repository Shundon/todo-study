/**
 * TodoList
 */
/* styles */
import styles from "./style.module.css"
/**
 * TodoList
 * @param {*} props 
 * @returns 
 */

export const TodoList = (props) => {
    /** props */
    const{todoList, handleDeleteTodo} = props;
    return (
    <ul className={styles.todoList}>
        {todoList.map((todo) => {
        return (
            <li className={styles.todo} key = {todo.id}>
                <span className={styles.task}>{todo.title}</span>
                <i className={`fa-solid fa-trash-can ${styles.trash}`}
                onClick={() => handleDeleteTodo(todo.id, todo.title)}>
                </i>
            </li>
                );
        })}
    </ul>


    )
}