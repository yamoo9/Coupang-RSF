import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import { StrictMode } from 'react'
import { render } from 'react-dom'
import './styles/index.scss'

// import SignInPage from './pages/SignIn/SignIn'
import LinkA from './components/LinkA/LinkA'

render(
  <StrictMode>
    {/* <SignInPage /> */}
    <LinkA external hasArrowIcon href="/signup">
      회원가입
    </LinkA>
  </StrictMode>,
  document.getElementById('root')
)
