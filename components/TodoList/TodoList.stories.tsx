import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TodoList from './TodoList';

export default {
    title: 'TodoList',
    component: TodoList,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        todos: {
            control: {
                type: 'object',
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
        sortBy: {
            control: {
                type: 'object',
            },
            table: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => <TodoList {...args}/>;

export const Name = Template.bind({});
Name.args = {
    todos: [
        {
            id: "1",
            text: "Learn React",
            completed: true,
            date: new Date(2021, 4, 1),
            y: 66,
        },
        {
            id: "2",
            text: "Learn Storybook",
            completed: false,
            date: new Date(2022, 6, 1),
            y: 66,
        },
        {
            id: "3",
            text: "Learn Next.js",
            completed: false,
            date: new Date(2022, 8, 1),
            y: 66,
        },
    ],
    setTodos: () => {},
    sortBy: "name",
};

export const Age = Template.bind({});
Age.args = {
    todos: [
        {
            id: "1",
            text: "Learn React",
            completed: true,
            date: new Date(2021, 4, 1),
            y: 66,
        },
        {
            id: "2",
            text: "Learn Storybook",
            completed: false,
            date: new Date(2022, 6, 1),
            y: 66,
        },
        {
            id: "3",
            text: "Learn Next.js",
            completed: false,
            date: new Date(2022, 8, 1),
            y: 66,
        },
    ],
    setTodos: () => {},
    sortBy: "date",
};

export const Completed = Template.bind({});
Completed.args = {
    todos: [
        {
            id: "1",
            text: "Learn React",
            completed: true,
            date: new Date(2021, 4, 1),
            y: 66,
        },
        {
            id: "2",
            text: "Learn Storybook",
            completed: false,
            date: new Date(2022, 6, 1),
            y: 66,
        },
        {
            id: "3",
            text: "Learn Next.js",
            completed: false,
            date: new Date(2022, 8, 1),
            y: 66,
        },
    ],
    setTodos: () => {},
    sortBy: "completed",
};
