import { randomUUID } from "crypto";
import React from "react";
import { TodoItem } from "../TodoItem";
import { TodoListControls } from "../TodoListControls";
import { TodoListInput } from "../TodoListInput";
import { Container, Wrapper, Header, Title, Text } from "./TodoList.styles";
import { v4 as uuidv4 } from 'uuid';

export type Todo = {
    id: string;
    text: string;
    completed: boolean;
}

const TodoList = () => {
    const [todos, setTodos] = React.useState<Todo[]>([]);

    const addTodo = React.useCallback((text: string) => {
        setTodos(prevList => {
            return [...prevList, { id: uuidv4(), text, completed: true }];
        })
    }, []);

    return (
        <Container>
            <Wrapper>
                <Header>
                    <Wrapper flexDirection="row" alignItems="center" justifyContent="space-between">
                        <Title>To do List</Title>
                        <Text>Item count</Text>
                    </Wrapper>
                    <TodoListControls todos={todos} setTodos={setTodos} />
                </Header>
                <Wrapper minHeight="500px">
                    {todos.map((todo) => (<TodoItem todo={todo} />))}
                </Wrapper>
                <TodoListInput addTodo={addTodo} />
            </Wrapper>
        </Container>
    )
};

export default TodoList;
