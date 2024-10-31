import { fn } from '@storybook/test';

import PersonalButton from '../components/PersonalButton.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/test',
  component: PersonalButton,
  tags: ['test'],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export const PrimaryTest = {
  args: {
    text: 'Button',
  },
};