import { randomUUID } from "crypto";
import React from "react";
import { TodoItem } from "../TodoItem";
import { TodoListControls } from "../TodoListControls";
import { TodoListInput } from "../TodoListInput";
import { Container, Wrapper, Header, Title } from "./TodoList.styles";

export type Todo = {
    id: string;
    text: string;
    completed: boolean;
}

const TodoList = () => {
    const [todos, setTodos] = React.useState<Todo[]>([]);

    const addTodo = React.useCallback((text: string) => {
        setTodos(prevList => {
            return [...prevList, { id: randomUUID(), text, completed: false }];
        })
    }, []);

    return (
        <Container>
            <Wrapper>
                <Header>
                    <Title>To do List</Title>
                    <TodoListControls todos={todos} setTodos={setTodos} />
                </Header>
                {todos.map((todo) => (<TodoItem todo={todo} />))}
                <TodoListInput addTodo={addTodo} />
            </Wrapper>
        </Container>
    )
};

export default TodoList;
