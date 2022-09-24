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
}
interface Props {
    darkMode: boolean;
}

export enum SortBy {
    Date = "date",
    Completed = "completed",
    Name = "name"
}

const TodoList: React.FC<Props> = ({ darkMode }) => {
    const [todos, setTodos] = React.useState<Todo[]>([]);
    const [sortBy, setSortBy] = React.useState<SortBy>(SortBy.Date);
    const height = 5;

    const sortedTodos =
        sortBy === SortBy.Date ?
            [...todos].sort((a, b) => b.date.getTime() - a.date.getTime()) :
            sortBy === SortBy.Completed ?
                [...todos].sort((a, b) => (a.completed === b.completed) ? 0 : a.completed ? -1 : 1) :
                sortBy === SortBy.Name ?
                    [...todos].sort((a, b) => a.text.localeCompare(b.text)) :
                    [...todos];

    const transitions = useTransition(
        sortedTodos.map((data, i) => ({ ...data, y: i * height })),
        {
            from: { opacity: 0, y: 0 },
            leave: { height: 0, opacity: 0 },
            enter: ({ y }) => ({ y, opacity: 1 }),
            update: ({ y }) => ({ y }),
            keys: item => item.id
        }
    );

    return (
        <Container>
            <Wrapper>
                <Header>
                    <Wrapper flexDirection="row" alignItems="center" justifyContent="space-between">
                        <Title>To do List</Title>
                        <Text>Item count</Text>
                    </Wrapper>
                    <TodoListControls todos={todos} setTodos={setTodos} setSortBy={setSortBy} />
                </Header>
                <Wrapper minHeight="500px">
                    {transitions(({ y, ...props }, todo) => (
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
