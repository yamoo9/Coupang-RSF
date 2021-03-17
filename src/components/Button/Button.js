import classNames from 'classnames'
import { bool, string, func, node, oneOf } from 'prop-types'
import {
  button,
  primary,
  secondary as secondaryClass,
} from './Button.module.scss'

/* -------------------------------------------------------------------------- */

const Button = ({
  tag = 'button',
  secondary = false,
  bgColor,
  fgColor,
  className = '',
  ...restProps
}) => {
  const Tag = tag

  const composeClasses = classNames(
    button,
    secondary ? secondaryClass : primary
  )

  const customStyle = {
    backgroundColor: bgColor || null,
    color: fgColor || null,
  }

  return (
    <Tag
      type={tag === 'button' ? 'button' : null}
      className={classNames(composeClasses, className)}
      style={customStyle}
      {...restProps}
    />
  )
}

Button.propTypes = {
  /** 버튼 또는 링크(a)로 변경하여 활용할 수 있습니다. */
  tag: oneOf(['button', 'a']),
  /** 버튼 모드를 Secondary 변경 유무를 설정합니다. */
  secondary: bool,
  /** 버튼을 사용할 수 없도록 설정합니다. */
  disabled: bool,
  /** 버튼 배경색을 설정합니다. */
  bgColor: string,
  /** 버튼 전경색을 설정합니다. */
  fgColor: string,
  /** 사용자 정의 클래스 이름을 추가할 수 있습니다. */
  className: string,
  /** 버튼 이벤트 리스너는 함수만 설정 가능합니다. */
  onClick: func,
  /** 자식(들)은 React 컴포넌트가 반환 가능한 것들만 가능합니다. */
  children: node,
}

export default Button
