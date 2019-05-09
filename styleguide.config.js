const path = require('path');

const color = {
  primary: '#6B9BD2',
  danger: '#e22d44',
  info: '#6B9BD2',
};

module.exports = {
  require: ['babel-polyfill', path.join(__dirname, 'src/styles/styles.scss')],
  styleguideDir: 'docs',
  theme: {
    maxWidth: '100%',
    sidebarWidth: 250,
    fontFamily: {
      base: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
      ],
      monospace: [
        'SF Mono',
        'Monaco',
        'Inconsolata',
        'Fira Code',
        'Fira Mono',
        'Droid Sans Mono',
        'Consolas',
        'Roboto Mono',
        'Source Code Pro',
        'monospace',
      ],
    },
    color: {
      link: color.info,
      linkHover: 'rgb(70, 69, 171)',
      sidebarBackground: color.primary,
      errorBackground: color.danger,
    },
  },
  styles: {
    StyleGuide: {
      root: {
        'text-rendering': 'optimizeLegibility',
        '-moz-osx-font-smoothing': 'grayscale',
        '-webkit-font-smoothing': 'antialiased',
      },
      content: {},
      logo: {
        border: 'none',
        paddingBottom: 0,
      },
    },
    Logo: {
      logo: {
        color: '#fff',
        fontSize: 20,
      },
    },
    ComponentsList: {
      list: {
        '& ul': {
          paddingLeft: 20,
        },
      },
      item: {
        '& a': {
          color: ['rgba(255, 255, 255, 0.9)', '!important'],
          fontWeight: [500, '!important'],
          cursor: ['pointer', '!important'],
          '&:hover': {
            textDecoration: 'underline',
            color: ['#fff', '!important'],
          },
        },
      },
      heading: {
        fontSize: ['18px', '!important'],
        fontWeight: [600, '!important'],
        color: ['#fff', '!important'],
      },
    },
    Pathline: {
      copyButton: {
        border: 0,
      },
    },
    Playground: {
      preview: {
        padding: 10,
      },
    },
    PlaygroundError: {
      root: {
        margin: 0,
      },
    },
  },
  propsParser: require('react-docgen-typescript').parse,
  webpackConfig: require('./webpack.config.js'),
};
