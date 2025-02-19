import type { Meta } from '@storybook/react';
import { ModalWithInput } from '../components';

const meta: Meta<typeof ModalWithInput> = {
  title: 'UI/ModalWithInput',
  component: ModalWithInput,
  tags: ['autodocs'],
};

export default meta;

export const Visible = {
  args: {
    children: 'Some content',
    isVisible: true,
  },
};

export const Hidden = {
  args: {
    children: 'Some content',
    isVisible: false,
  },
};
