import React from "react";
import { TodoIcon } from "./TodoIcon";
import { Container, Wrapper, Text } from "./TodoItem.styles";

interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

interface Props {
    todo: Todo;
}

const TodoList: React.FC<Props> = ({ todo }) => {

    return (
        <Container>
            <input type="checkbox" />
            <Wrapper>
                <Text completed={todo.completed}>{todo.text}</Text>
                <Text>date placeholder</Text>
            </Wrapper>
            <p>DEL</p>
        </Container>
    )
};

export default TodoList;
