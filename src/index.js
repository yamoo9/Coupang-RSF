import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import { StrictMode } from 'react'
import { render } from 'react-dom'
import './styles/index.scss'

import SignInPage from './pages/SignIn/SignIn'

render(
  <StrictMode>
    <SignInPage />
  </StrictMode>,
  document.getElementById('root')
)
