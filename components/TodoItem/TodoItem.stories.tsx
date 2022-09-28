import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TodoItem from './TodoItem';

export default {
    title: 'TodoItem',
    component: TodoItem,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        todo: {
            control: {
                type: 'object',
            },
        },
        setTodos: {
            control: {
                type: 'function',
            },
            table: {
                disable: true,
            },
        }
    }
} as ComponentMeta<typeof TodoItem>;

const Template: ComponentStory<typeof TodoItem> = (args) => <TodoItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    todo: {
        id: '1',
        text: 'Todo Item Dummy Text',
        completed: false,
        date: new Date()
    },
    setTodos: () => {}
};