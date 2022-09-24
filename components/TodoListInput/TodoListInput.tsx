import React from "react";
import { Form, Input, Button } from "./TodoListInput.styles";

interface Props {
    addTodo: (text: string) => void;
}

const TodoListInput: React.FC<Props> = ({ addTodo }) => {
    const [text, setText] = React.useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input value={text} onChange={(e) => setText(e.target.value)} name="input" id="input" type="text" placeholder="Add a new todo" />
            <Button type="submit">+</Button>
        </Form>
    )
};

export default TodoListInput;
