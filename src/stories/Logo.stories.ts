import type { Meta } from '@storybook/react';
import { Logo } from '../components';

const meta: Meta<typeof Logo> = {
  title: 'UI/Logo',
  component: Logo,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    text: 'Ecommerce',
    logo: 'https://avatars.mds.yandex.net/i?id=bd59e86dd4d172e698bbb820eb1f5b1ba1f39292-4233546-images-thumbs&n=13'
  },
};

