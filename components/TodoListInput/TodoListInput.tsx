import React from "react";
import { TodoItem } from "../TodoItem";
import { TodoListControls } from "../TodoListControls";
import { Container, Wrapper, Header } from "./TodoListInput.styles";

interface Props {
    addTodo: (text: string) => void;
}

const TodoListInput : React.FC<Props> = () => {
    return (
        <Container>
            <Wrapper>
                <input type="text" />
            </Wrapper>
        </Container>
    )
};

export default TodoListInput;
