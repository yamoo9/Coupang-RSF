import React from 'react'
import classNames from 'classnames'
import { shape, string, func, bool, oneOfType } from 'prop-types'
import { nullType } from '../../types/index'

import ButtonSignOut from '../ButtonSignOut/ButtonSignOut'
import { info, userAvatar, userName } from './SignInedInfo.module.scss'

/* -------------------------------------------------------------------------- */

const SignInedInfo = ({
  authUser = null,
  visibleAvatar = true,
  onSignOut,
  className,
  ...restProps
}) => {
  return authUser ? (
    <span className={classNames(info, className)} {...restProps}>
      <span className={userName}>
        {visibleAvatar && (
          <img src={authUser?.photoURL} className={userAvatar} alt="" />
        )}
        <strong>{authUser?.displayName}</strong>님
      </span>{' '}
      <ButtonSignOut onSignOut={onSignOut} />
    </span>
  ) : null
}

SignInedInfo.propTypes = {
  /** 로그인(인증) 사용자 정보를 전달 받습니다. (**knobs** 패널에서 조정) */
  authUser: oneOfType([
    nullType,
    shape({
      displayName: string,
      photoURL: string,
    }),
  ]),
  /** 사용자 정의 클래스 이름을 설정합니다. (**knobs** 패널에서 조정) */
  className: string,
  /** 아바타를 표시 설정합니다. (**knobs** 패널에서 조정) */
  visibleAvatar: bool,
  /** 로그아웃 (함수)를 전달 받으면 로그아웃 처리합니다.  */
  onSignOut: func,
}

export default SignInedInfo
