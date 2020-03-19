
const path = require('path');
const custom = require('../webpack.config.js');
const { addons } = require('@storybook/addons');
const { themes } = require('@storybook/theming');

module.exports = {
  theme: themes.dark,
  stories: ['../**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: (config) => {
    return { ...config, module: { ...config.module, rules: custom.module.rules } };
  },
};
