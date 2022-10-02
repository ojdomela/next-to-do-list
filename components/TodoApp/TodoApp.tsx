import React from "react";
import { TodoListControls } from "../TodoListControls";
import { TodoListInput } from "../TodoListInput";
import { Container, Header, Title, Text } from "./TodoApp.styles";
import { TodoList } from "../TodoList";

export type Todo = {
    id: string;
    text: string;
    completed: boolean;
    date: Date;
    y?: number;
}

export type SortBy = "date" | "completed" | "name";

const TodoApp = () => {
    const [todos, setTodos] = React.useState<Todo[]>([]);
    const [sortBy, setSortBy] = React.useState<SortBy>("date");

    React.useEffect(() => {
        const todos = localStorage.getItem("todos");
        if (todos) {
            setTodos(JSON.parse(todos).map((todo: Todo) => {
                todo.date = new Date(todo.date);
                console.log(todo)
                return todo;
            }));
        }
    }, []);

    const countString = todos.length === 1 ? "1 item" : `${todos.length} items`;
    return (
        <Container>
            <Header>
                <Title>To do List</Title>
                <Text>{countString}</Text>
            </Header>
            <TodoListControls todos={todos} setTodos={setTodos} setSortBy={setSortBy} />
            <TodoList todos={todos} setTodos={setTodos} sortBy={sortBy} />
            <TodoListInput setTodos={setTodos} />
        </Container>
    )
};

export default TodoApp;
