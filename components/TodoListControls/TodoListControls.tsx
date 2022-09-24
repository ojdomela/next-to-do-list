import React from "react";
import { Todo } from "../TodoList";
import { Container } from "./TodoListControls.styles";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoListControls: React.FC<Props> = ({ todos, setTodos }) => {


    const button = todos.every(todo => todo.completed) ? "Uncheck All" : "Check All";
    console.log(todos)    
    console.log(button)

    return (
        <Container>
            <select name="" id="">
                <option value="">Most Recent</option>
                <option value="">Alphabetically</option>
                <option value="">Finished</option>
            </select>
            <button>Mark all as Finished</button>
        </Container>
    )
};

export default TodoListControls;
