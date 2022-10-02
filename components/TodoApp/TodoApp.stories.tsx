import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TodoList from './TodoApp';

export default {
    title: 'TodoList',
    component: TodoList,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = () => <TodoList />;

export const Default = Template.bind({});
