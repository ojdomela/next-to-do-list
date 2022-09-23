import React from "react";
import { TodoIcon } from "../TodoIcon";

interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

interface Props {
    todo: Todo;
}

const TodoList : React.FC<Props> = ({ todo }) => {

    return (
        <div>
            <TodoIcon />
            Some item text
        </div>
    )
};

export default TodoList;
