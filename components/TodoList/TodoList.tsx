import React from "react";
import { TodoItem } from "../TodoItem";
import { Wrapper } from "./TodoList.styles";
import { useTransition, animated } from "react-spring";
import { SortBy, Todo } from "../TodoApp";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    sortBy: SortBy;
}

const TodoList: React.FC<Props> = ({ todos, setTodos, sortBy }) => {

    const sortTodos = React.useCallback((todos: Todo[]) => {
        const newTodos = [...todos];
        switch (sortBy) {
            case "date":
                newTodos.sort((a, b) => b.date.getTime() - a.date.getTime())
                break;
            case "completed":
                if (todos.every(todo => todo.completed) || todos.every(todo => !todo.completed)) {
                    return todos
                }
                newTodos.sort((a, b) => (a.completed === b.completed) ? 1 : a.completed ? -1 : 1)
                break;
            case "name":
                newTodos.sort((a, b) => a.text.localeCompare(b.text));
                break;
            default:
                return todos;
        }
        return newTodos
    }, [sortBy]);

    console.log(sortTodos(todos))
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

    return (
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
    )
};

export default TodoList;
