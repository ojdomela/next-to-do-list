import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TodoListControls from './TodoListControls';

export default {
    title: 'TodoListControls',
    component: TodoListControls,
    argTypes: {
        todos: {
            control: {
                type: 'object',
            },
        },
        setTodos: {
            control: {
                type: 'function',
            },
        }
    }
} as ComponentMeta<typeof TodoListControls>;

const Template: ComponentStory<typeof TodoListControls> = (args) => <TodoListControls {...args} />;

export const Default = Template.bind({});
Default.args = {
    todos: [
        {
            id: '1',
            text: 'Todo 1 starts false',
            completed: false,
            date: new Date()
        },
        {
            id: '2',
            text: 'Todo 2 starts complete',
            completed: true,
            date: new Date()
        }
    ],
    setTodos: () => {}
};
