import React from "react";
import { Form, Input, Button } from "./TodoListInput.styles";

interface Props {
    addTodo: (text: string) => void;
}

const TodoListInput: React.FC<Props> = ({ addTodo }) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e.currentTarget.todo.value);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Add a new todo" />
            <Button type="submit">Add</Button>
        </Form>
    )
};

export default TodoListInput;
