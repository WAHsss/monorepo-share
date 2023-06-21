import type { StorybookConfig } from '@storybook/react-vite';
import {mergeConfig } from 'vite';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: '',
      },
    },
  },
  viteFinal: async (config, { configType }) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@share/is-even': path.resolve(
            __dirname,
            '../../is-even/src/index.ts'
          ),
        },
      },
    });
  },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
