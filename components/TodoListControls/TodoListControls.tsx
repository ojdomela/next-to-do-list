import React from "react";
import { Todo } from "../TodoList";
import { SortBy } from "../TodoList/TodoList";
import { Container } from "./TodoListControls.styles";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    setSortBy: React.Dispatch<React.SetStateAction<SortBy>>;
}

const TodoListControls: React.FC<Props> = ({ todos, setTodos, setSortBy }) => {
    const complete = todos.every(todo => todo.completed);

    const handleToggle = () => {
        if (complete) {
            setTodos(todos.map(todo => ({ ...todo, completed: false })));
            return
        }
        setTodos(todos.map(todo => ({ ...todo, completed: true })));
    }

    return (
        <Container>
            <select onChange={(e) => {
                const value = e.target.value as SortBy;
                setSortBy(value)
            }} >
                <option value={SortBy.Date}>Most Recent</option>
                <option value={SortBy.Name}>Alphabetically</option>
                <option value={SortBy.Completed}>Finished</option>
            </select>
            <button onClick={handleToggle}>Mark all as {complete ? "Unfinished" : "Finished"}</button>
        </Container>
    )
};

export default TodoListControls;
