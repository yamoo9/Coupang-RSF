import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

// https://yesviz.com/devices.php
const customViewports = {
  note8: {
    name: 'Galaxy Note 8',
    styles: {
      width: '414px',
      height: '846px',
    },
  },
  iphone12: {
    name: 'iPhone 12 Pro',
    styles: {
      width: '428px',
      height: '926px',
    },
  },
}

const viewport = {
  viewports: {
    ...INITIAL_VIEWPORTS,
    ...customViewports,
  },
}

export default viewport
