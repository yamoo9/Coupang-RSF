import {
  page,
  container,
  homeLink,
  form,
  copyright,
} from './SignIn.module.scss'

import Logo from '../../components/Logo/Logo'
import Container from '../../containers/Container/Container'
import LogInForm from '../../containers/LogInForm/LogInForm'

/* -------------------------------------------------------------------------- */

export default function SignInPage(props) {
  return (
    <div className={page}>
      <Container className={container}>
        <HomeLink>
          <Logo />
        </HomeLink>

        <LogInForm width={'100%'} className={form} style={{ maxWidth: 578 }} />

        <small lang="en" className={copyright}>
          &copy;Coupang Corp. All rights reserved.
        </small>
      </Container>
    </div>
  )
}

// 추후에 `홈 링크` 컴포넌트를 만들어 분리할 수 있습니다.
const HomeLink = (props) => (
  <h1 className={homeLink}>
    <a href="/">{props.children}</a>
  </h1>
)
