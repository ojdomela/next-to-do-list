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
}

interface Props {
    darkMode: boolean;
}

const TodoList: React.FC<Props> = ({ darkMode }) => {
    const [todos, setTodos] = React.useState<Todo[]>([]);
    const height = 5;

    const transitions = useTransition(
        todos.map((data, i) => ({ ...data, y: i * height })),
        {
            from: { opacity: 0, y: todos.length * height },
            leave: { height: 0, opacity: 0 },
            enter: ({ y }) => ({ y, opacity: 1 }),
            update: ({ y }) => ({ y }),
            keys: item => item.id
        }
    );

    const swap = () => {
        setTodos(prevList => [...prevList].reverse())
    }
    

    console.log(todos)
    return (
        <Container>
            <Wrapper>
                <Header>
                    <Wrapper flexDirection="row" alignItems="center" justifyContent="space-between">
                        <Title onClick={swap} >To do List</Title>
                        <Text>Item count</Text>
                    </Wrapper>
                    <TodoListControls todos={todos} setTodos={setTodos} />
                </Header>
                <Wrapper minHeight="500px">
                    {transitions(({y, ...props}, todo) => (
                        <animated.div
                            key={todo.id}
                            style={{
                                transform: y.to(y => `translate3d(0,${y}rem,0)`),
                                ...props
                            }}
                        >
                            <TodoItem todo={todo} setTodos={setTodos} />
                        </animated.div>
                    ))}
                </Wrapper>
                <TodoListInput setTodos={setTodos} />
            </Wrapper>
        </Container>
    )
};

export default TodoList;
