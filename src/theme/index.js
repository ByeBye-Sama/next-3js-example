import { isString } from 'lodash'

const theme = {
  colors: {
    primary: '#29AC9C',
    secondary: '#CE546D',
    white: 'white',
    black: 'black',
  },
  spacing: (...args) => {
    return args.map(item => (isString(item) ? item : `${8 * item}px`)).join(' ')
  },
  textStyles: {
    h1: {
      fontWeight: 600,
      fontSize: '40px',
      lineHeight: '56px',
    },
    h2: {
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '28px',
    },
    title: {
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '24px',
    },
    body1: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '20px',
    },
    link: {
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: '24px',
      textDecoration: 'underline',
    },
  },
  textStyle: style => `
    font-size: ${theme.textStyles[style].fontSize};
    font-weight: ${theme.textStyles[style].fontWeight};
    line-height: ${theme.textStyles[style].lineHeight};
    ${theme.textStyles[style].textDecoration ? `text-decoration: ${theme.textStyles[style].textDecoration};` : ''}
    font-family: Open Sans,sans-serif;
  `,
}

export default theme
