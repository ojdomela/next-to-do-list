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

export enum SortBy {
    Date = "date",
    Completed = "completed",
    Name = "name"
}

const TodoList = () => {
    const [todos, setTodos] = React.useState<Todo[]>([]);
    const [sortBy, setSortBy] = React.useState<SortBy>(SortBy.Date);

    const sortTodos = (todos: Todo[]) => {
        const newTodos = [...todos];
        switch (sortBy) {
            case SortBy.Date:
                newTodos.sort((a, b) => b.date.getTime() - a.date.getTime())
                break;
            case SortBy.Completed:
                if (todos.every(todo => todo.completed) || todos.every(todo => !todo.completed)) {
                    return todos
                }
                newTodos.sort((a, b) => (a.completed === b.completed) ? 1 : a.completed ? -1 : 1)
                break;
            case SortBy.Name:
                newTodos.sort((a, b) => a.text.localeCompare(b.text));
                break;
            default:
                return todos;
        }
        return newTodos
    }

    let totalHeight = 0;
    const transitions = useTransition(
        sortTodos(todos).map((data) => {
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
                console.log(todo)
                return todo;
            }));
        }
    }, []);

    const countString = todos.length === 1 ? "1 item" : `${todos.length} items`;
    console.table(todos)
    return (
        <Container>
            <Header>
                <Title>To do List</Title>
                <Text>{countString}</Text>
            </Header>
            <TodoListControls todos={todos} setTodos={setTodos} setSortBy={setSortBy} />
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
