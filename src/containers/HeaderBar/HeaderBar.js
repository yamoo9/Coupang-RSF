import React from 'react'
import { shape, string, bool, func } from 'prop-types'
import Container from '../Container/Container'
import LinkA from '../../components/LinkA/LinkA'
import SignInedInfo from '../../components/SignInedInfo/SignInedInfo'
import { headerBar, subscribe, menu, container } from './HeaderBar.module.scss'

/* -------------------------------------------------------------------------- */

const HeaderBar = ({
  authUser,
  visibleAvatar = false,
  onSignOut,
  ...restProps
}) => {
  return (
    <div className={headerBar} {...restProps}>
      <Container max={1280} className={container}>
        <div className={subscribe}>
          <LinkA href="/subscribe/favorites">즐겨찾기</LinkA>
          <LinkA href="/subscribe/vender-join" hasArrowIcon>
            입점신청
          </LinkA>
        </div>
        <div className={menu}>
          {authUser ? (
            <SignInedInfo
              authUser={authUser}
              visibleAvatar={visibleAvatar}
              onSignOut={onSignOut}
            />
          ) : (
            <>
              <LinkA href="/singin">로그인</LinkA>
              <LinkA href="/signup">회원가입</LinkA>
            </>
          )}
          <LinkA href="/cs-center">고객센터</LinkA>
        </div>
      </Container>
    </div>
  )
}

HeaderBar.propTypes = {
  /** 인증 사용자 정보를 전달 받습니다. (Firebase 인증 사용자 정보 기준) */
  authUser: shape({
    displayName: string,
    photoURL: string,
  }),
  /** 아바타를 표시 설정합니다. (Firebase 인증 사용자 정보 기준) */
  visibleAvatar: bool,
  /** 로그아웃 (함수)를 전달 받아 처리합니다. */
  onSignOut: func,
}

export default HeaderBar
