import React from 'react'
import { string, bool, oneOf, shape } from 'prop-types'
import classNames from 'classnames'
import Input from '../Input/Input'
import { iconInput, iconInputError } from './IconInput.module.scss'

/* -------------------------------------------------------------------------- */

const IconInput = ({
  icon,
  id,
  label,
  email = false,
  password = false,
  className,
  error,
  ...restProps
}) => {
  return (
    <Input
      id={id}
      icon={icon}
      label={label}
      className={classNames(iconInput, className, { [iconInputError]: error })}
      email={email}
      password={password}
      error={error}
      {...restProps}
    />
  )
}

IconInput.propTypes = {
  /** 표시 할 아이콘 타입 설정은 **필수**입니다. */
  icon: oneOf(['letter', 'lock']).isRequired,
  /** 식별 가능한 고유 아이디 설정은 **필수**입니다. */
  id: string.isRequired,
  /** 사용자에게 정보를 제공할 레이블 설정은 **필수**입니다. 비록 화면에 표시되지는 않더라도 스크린 리더 사용자에게 정보를 제공하기 때문입니다. */
  label: string.isRequired,
  /** 사용자에게 입력할 내용 안내를 도와 줄 도움말을 설정합니다. */
  placeholder: string,
  /** 이메일 모드를 활성화 합니다. */
  email: bool,
  /** 패스워드 모드를 활성화 합니다. 이메일, 패스워드 모드 모두 활성화 된 경우 이메일 모드 보다 우선합니다. */
  password: bool,
  /** 화면에 표시 할 초기 입력 값을 설정할 수 있습니다. */
  initialValue: string,
  /** 오류를 전달 받으면 메시지를 화면에 표시합니다. */
  error: shape({ message: string }),
}

export default IconInput
