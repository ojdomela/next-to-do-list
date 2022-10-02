import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TodoApp from './TodoApp';

export default {
    title: 'TodoApp',
    component: TodoApp,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof TodoApp>;

const Template: ComponentStory<typeof TodoApp> = () => <TodoApp />;

export const Default = Template.bind({});
