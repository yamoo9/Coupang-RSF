import React from 'react'
import { func, node, bool } from 'prop-types'
import { button } from './ButtonSignOut.module.scss'

/* -------------------------------------------------------------------------- */

const ButtonSignOut = ({
  onSignOut,
  children = '로그아웃',
  disabled,
  ...restProps
}) => {
  return (
    <button
      type="button"
      className={button}
      disabled={disabled}
      onClick={onSignOut}
      {...restProps}
    >
      {children}
    </button>
  )
}

ButtonSignOut.propTypes = {
  /** 자식 노드를 전달 받습니다. */
  children: node,
  /** 로그아웃 (함수)를 전달 받으면 `onClick` 이벤트 핸들링됩니다. */
  onSignOut: func,
  /** 비활성 상태로 설정할 수 있습니다. */
  disabled: bool,
}

export default ButtonSignOut
