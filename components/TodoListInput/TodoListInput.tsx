import React from "react";
import { Form, Input, Button } from "./TodoListInput.styles";
import { v4 as uuidv4 } from 'uuid';
import { Todo } from "../TodoList";

interface Props {
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoListInput: React.FC<Props> = ({ setTodos }) => {
    const [text, setText] = React.useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }

    const addTodo = React.useCallback((text: string) => {
        setTodos(prevList => {
            const newList = [{ id: uuidv4(), text, completed: false, date: new Date() }, ...prevList];
            localStorage.setItem("todos", JSON.stringify(newList));
            return newList
        })
    }, []);

    return (
        <Form onSubmit={handleSubmit}>
            <Input value={text} onChange={(e) => setText(e.target.value)} name="input" id="input" type="text" placeholder="Add a new todo" />
            <Button type="submit">+</Button>
        </Form>
    )
};

export default TodoListInput;
