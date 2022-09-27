import React from "react";
import { TodoItem } from "../TodoItem";
import { TodoListControls } from "../TodoListControls";
import { TodoListInput } from "../TodoListInput";
import { Container, Wrapper, Header, Title, Text } from "./TodoList.styles";
import { useTransition, animated } from "react-spring";

export type Todo = {
    id: string;
    text: string;
    completed: boolean;
    date: Date;
    y?: number;
}


const TodoList = () => {
    const [todos, setTodos] = React.useState<Todo[]>([]);

    let totalHeight = 0;
    const transitions = useTransition(
        todos.map((data) => {
            if (data.y === undefined) return data;
            totalHeight += data.y
            return { ...data, y: totalHeight - data.y }
        }),
        {
            from: { opacity: 0, y: 0 },
            leave: { height: 0, opacity: 0 },
            enter: ({ y }) => ({ y, opacity: 1 }),
            update: ({ y }) => ({ y }),
            keys: item => item.id
        }
    );

    React.useEffect(() => {
        const todos = localStorage.getItem("todos");
        if (todos) {
            setTodos(JSON.parse(todos).map((todo: Todo) => {
                todo.date = new Date(todo.date);
                return todo;
            }));
        }
    }, []);

    const countString = todos.length === 1 ? "1 item" : `${todos.length} items`;

    return (
        <Container>
            <Header>
                <Title>To do List</Title>
                <Text>{countString}</Text>
            </Header>
            <TodoListControls todos={todos} setTodos={setTodos} />
            <Wrapper>
                {transitions(({ y, ...props }, todo) => (
                    <animated.li
                        key={todo.id}
                        style={{
                            transform: y.to(y => `translate3d(0,${y}px,0)`),
                            ...props
                        }}
                    >
                        <TodoItem todo={todo} setTodos={setTodos} />
                    </animated.li>
                ))}
            </Wrapper>
            <TodoListInput setTodos={setTodos} />
        </Container>
    )
};

export default TodoList;
