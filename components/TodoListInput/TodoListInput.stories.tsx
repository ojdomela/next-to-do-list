import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TodoListInput from './TodoListInput';

export default {
    title: 'TodoListInput',
    component: TodoListInput,
    argTypes: {
        setTodos: {
            control: {
                type: 'function',
            },
        }
    }
} as ComponentMeta<typeof TodoListInput>;

const Template: ComponentStory<typeof TodoListInput> = (args) => <TodoListInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    setTodos: () => {}
};
