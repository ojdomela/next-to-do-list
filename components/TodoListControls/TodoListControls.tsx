import React from "react";
import { SortBy, Todo } from "../TodoList";
import { Container } from "./TodoListControls.styles";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    setSortBy: React.Dispatch<React.SetStateAction<SortBy>>;
}

const TodoListControls: React.FC<Props> = ({ todos, setTodos, setSortBy }) => {
    const handleToggle = React.useCallback(() => {
        setTodos(prevTodos => {
            const newTodos = prevTodos.every(todo => todo.completed) ?
                prevTodos.map(todo => ({ ...todo, completed: false })) :
                prevTodos.map(todo => ({ ...todo, completed: true }));
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return newTodos
        });
    }, []);

    return (
        <Container>
            <select onChange={e => setSortBy(e.target.value as SortBy)} >
                <option value={"date"}>Most Recent</option>
                <option value={"name"}>Alphabetically</option>
                <option value={"completed"}>Finished</option>
            </select>
            <button onClick={handleToggle}>Mark all as {todos.every(todo => todo.completed) ? "Unfinished" : "Finished"}</button>
        </Container >
    )
};

export default TodoListControls;
