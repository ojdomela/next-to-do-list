import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TodoListControls from './TodoListControls';

export default {
    title: 'TodoListControls',
    component: TodoListControls,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        todos: {
            control: {
                type: 'object',
            },
            table: {
                disable: true,
            },
        },
        setTodos: {
            control: {
                type: 'object',
            },
            table: {
                disable: true,
            },
        },
        setSortBy: {
            control: {
                type: 'object',
            },
            table: {
                disable: true,
            },
        }
    }
} as ComponentMeta<typeof TodoListControls>;

const Template: ComponentStory<typeof TodoListControls> = (args) => <TodoListControls {...args} />;

export const Incomplete = Template.bind({});
Incomplete.args = {
    todos: [
        {
            id: '1',
            text: 'Todo 1 starts false',
            completed: false,
            date: new Date()
        }
    ]
};

export const Completed = Template.bind({});
Completed.args = {
    todos: [
        {
            id: '2',
            text: 'Todo 2 starts true',
            completed: true,
            date: new Date()
        }
    ]
};
