import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../components';
import { ThemeProvider } from '../providers/themeProvider/themeProvider';
import { LangProvider } from '../providers/langProvider/langProvider';

const meta: Meta<typeof Header> = {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;

const Theme = () => (
  <LangProvider>
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  </LangProvider>
);
export const Default = Theme.bind({});
