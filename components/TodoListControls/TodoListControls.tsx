import React from "react";
import { Todo } from "../TodoList";
import { Container, Wrapper } from "./TodoListControls.styles";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoListControls: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <Container>
            <Wrapper>
                <input type="checkbox" name="check-all" id="check-all" />
            </Wrapper>
            <button>Clear</button>
            <select name="" id="">
                <option value="">Option 1</option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
            </select>
        </Container>
    )
};

export default TodoListControls;
