import { fn } from '@storybook/test';

import Button from '../components/Button.vue';

export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    loading: {control: 'boolean'},
    disabled: {control: 'boolean'},
    loaderSize: {control: 'number'},
    colorStart: {control: 'color'},
    colorEnd: {control: 'color'},
    size: { control: { type: 'select' }, options: ['lg', 'md', 'sm'] },
    type: { control: { type: 'select' }, options: ['primary','secondary', 'red', 'gray', 'tag', 'filters', 'secondary-outlined', 'green', 'border-red', 'border-green' ] },
  },
  args: { onClick: fn() },
};

export const Primary = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args" style="width:156px">Send Request</Button>`,
  }),
  args: {
    size: 'lg',
    type: 'primary'
  },
};

export const PrimaryLoading = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args" style="width:156px">This is a button</Button>`,
  }),
  args: {
    size: 'lg',
    type: 'primary',
    loading: true,
  },
};

export const Secondary = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args" style="width:156px">This is a button</Button>`,
  }),
  args: {
    size: 'lg',
    type: 'secondary'
  },
};



