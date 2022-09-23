import React from "react";
import { Wrapper, Input, Button } from "./TodoListInput.styles";

interface Props {
    addTodo: (text: string) => void;
}

const TodoListInput: React.FC<Props> = () => {
    return (
        <Wrapper>
            <Input type="text" placeholder="Add a new todo" />
            <Button>Add</Button>
        </Wrapper>
    )
};

export default TodoListInput;
