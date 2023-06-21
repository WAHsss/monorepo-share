import type { Meta } from '@storybook/react';
import { IsEven } from './is-even';

const Story: Meta<typeof IsEven> = {
  component: IsEven,
  title: 'IsEven',
};
export default Story;

export const Primary = {
  args: {},
};
