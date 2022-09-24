import React from "react";
import { Container, Wrapper, Text } from "./TodoItem.styles";

interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

interface Props {
    todo: Todo;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const TodoList: React.FC<Props> = ({ todo, setTodos }) => {

    const toggleComplete = React.useCallback((id: string) => {
        setTodos(prevList => {
            return prevList.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
        })
    }, []);

    const removeTodo = React.useCallback((id: string) => {
        setTodos(prevList => {
            return prevList.filter(todo => todo.id !== id);
        })
    }, []);

    return (
        <Container>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
            <Wrapper>
                <Text fontWeight="bold" completed={todo.completed}>{todo.text}</Text>
                <Text fontSize="1.2rem">date placeholder</Text>
            </Wrapper>
            <p onClick={() => removeTodo(todo.id)}>DEL</p>
        </Container>
    )
};

export default TodoList;
