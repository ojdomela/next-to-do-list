import React from "react";
import { Todo } from "../TodoApp";
import { Container, Wrapper, Text } from "./TodoItem.styles";

interface Props {
    todo: Todo;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const TodoList: React.FC<Props> = ({ todo, setTodos }) => {
    const todoRef = React.useRef<HTMLDivElement>(null);

    const toggleComplete = React.useCallback((id: string) => {
        setTodos(prevList => {
            const newList = prevList.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
            localStorage.setItem("todos", JSON.stringify(newList));
            return newList
        })
    }, []);

    const removeTodo = React.useCallback((id: string) => {
        setTodos(prevList => {
            const newList = prevList.filter(todo => todo.id !== id);
            localStorage.setItem("todos", JSON.stringify(newList));
            return newList
        })
    }, []);

    React.useEffect(() => {
        setTodos(prevList => {
            const newList = prevList.map(item => {
                if (item.id === todo.id && !item.y) {
                    return {
                        ...item,
                        y: todoRef.current?.offsetHeight
                    }
                }
                return item;
            })
            localStorage.setItem("todos", JSON.stringify(newList));
            return newList
        })
    }, []);

    const dateString = React.useMemo(() => {
        const date = new Date(todo.date);
        return `Added on ${date.getHours()}:${date.getMinutes()}, ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }, [todo.date]);

    return (
        <Container ref={todoRef}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
            <Wrapper>
                <Text fontWeight="bold" completed={todo.completed}>{todo.text}</Text>
                <Text fontSize="1.2rem">{dateString}</Text>
            </Wrapper>
            <p onClick={() => removeTodo(todo.id)}>DEL</p>
        </Container>
    )
};

export default TodoList;
