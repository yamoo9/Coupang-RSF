import { create } from '@storybook/theming'

export default create({
  base: 'light',
  brandTitle: '쿠팡!',
  brandUrl: 'https://www.coupang.com/',
  brandImage:
    'https://upload.wikimedia.org/wikipedia/commons/3/35/Coupang_logo.png',

  // UI
  appBg: '#fff',
  appContentBg: '#fefefe',
  appBorderColor: '#e4e4e4',
  appBorderRadius: 4,

  // Form colors
  inputBg: '#fefefe',
  inputBorder: '#969696',
  inputTextColor: '#303030',
  inputBorderRadius: 4,
})
