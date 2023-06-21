import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import path from 'path';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

const config: StorybookConfig = {
  stories: ['../../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
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
      plugins: [
        dts({
          entryRoot: '../src',
          tsConfigFilePath: path.join(__dirname, '../tsconfig.lib.json'),
          skipDiagnostics: true,
        }),
    
        viteTsConfigPaths({
          root: '../../../',
        }),
      ],
    });
  },
  features: {
    storyStoreV7: false,
  },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
