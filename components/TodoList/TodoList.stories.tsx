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
        darkMode: {
            control: {
                type: 'boolean'
            }
        }
    },
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => <TodoList {...args} />;

export const Default = Template.bind({});
Default.args = {
    darkMode: true
};
