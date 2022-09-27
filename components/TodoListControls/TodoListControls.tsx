import React from "react";
import { Todo } from "../TodoList";
import { Container } from "./TodoListControls.styles";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

enum SortBy {
    Date = "date",
    Completed = "completed",
    Name = "name"
}

const TodoListControls: React.FC<Props> = ({ todos, setTodos }) => {
    const handleToggle = React.useCallback(() => {
        setTodos(prevTodos => {
            const newTodos = prevTodos.every(todo => todo.completed) ?
                prevTodos.map(todo => ({ ...todo, completed: false })) :
                prevTodos.map(todo => ({ ...todo, completed: true }));
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return newTodos
        });
    }, []);

    const handleSort = React.useCallback((sortBy: SortBy) => {
        setTodos(prevTodos => {
            const newTodos = [...prevTodos];
            switch (sortBy) {
                case SortBy.Date:
                    newTodos.sort((a, b) => b.date.getTime() - a.date.getTime())
                    break;
                case SortBy.Completed:
                    newTodos.sort((a, b) => (a.completed === b.completed) ? 0 : a.completed ? -1 : 1)
                    break;
                case SortBy.Name:
                    newTodos.sort((a, b) => a.text.localeCompare(b.text));
                    break;
                    default: 
                    return prevTodos;
            }
            return newTodos;
        })
    }, []);

    return (
        <Container>
            <select defaultValue={SortBy.Date} onChange={e => handleSort(e.target.value as SortBy)} >
                <option value={SortBy.Date}>Most Recent</option>
                <option value={SortBy.Name}>Alphabetically</option>
                <option value={SortBy.Completed}>Finished</option>
            </select>
            <button onClick={handleToggle}>Mark all as {todos.every(todo => todo.completed) ? "Unfinished" : "Finished"}</button>
        </Container >
    )
};

export default TodoListControls;
