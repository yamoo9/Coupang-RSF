import React from 'react'
import classNames from 'classnames'
import { string, bool, shape } from 'prop-types'
import Icon from '../Icon/Icon'
import {
  formControl,
  inputWrapperError,
  inputWrapper,
  input,
  label as labelClass,
  labelHidden as labelHiddenClass,
  button,
  error as errorClass,
} from './Input.module.scss'

/* -------------------------------------------------------------------------- */

class Input extends React.Component {
  state = {
    mode: this.props.mode ?? 'text',
    value: this.props.initialValue ?? '',
    isPasswordVisible: this.props.initialPasswordVisible ?? false,
  }

  handleChange = (e) => {
    const inputValue = e.target.value
    this.setState({
      value: inputValue,
    })
  }

  handleChangePasswordMode = () => {
    this.setState(({ isPasswordVisible }) => ({
      isPasswordVisible: !isPasswordVisible,
    }))
  }

  hanleFocus = (e) => {
    e.target.select()
  }

  _checkType() {
    const { email, password } = this.props
    if (email) {
      return 'email'
    }
    if (password) {
      return this.state.isPasswordVisible ? 'text' : 'password'
    }
    return 'text'
  }

  render() {
    const {
      id,
      label,
      name,
      labelVisible,
      icon,
      email,
      password,
      placeholder,
      readonly,
      disabled,
      initialValue,
      initialPasswordVisible,
      focusedSelection,
      mode,
      error: errorProp,
      className,
      ...restProps
    } = this.props

    const { isPasswordVisible, value } = this.state

    const iconType = isPasswordVisible ? 'hide' : 'show'
    const iconLabel = `비밀번호 ${isPasswordVisible ? '감춤' : '표시'}`

    return (
      <div className={classNames(formControl, className)}>
        <label
          htmlFor={id}
          className={classNames(labelClass, labelVisible || labelHiddenClass)}
        >
          {label}
        </label>
        <div
          className={classNames(inputWrapper, errorProp && inputWrapperError)}
        >
          {icon ? <Icon type={icon} /> : null}
          <input
            id={id}
            type={this._checkType()}
            name={name}
            className={classNames(input)}
            placeholder={placeholder}
            readOnly={readonly}
            disabled={disabled}
            value={value}
            onFocus={focusedSelection ? this.hanleFocus : null}
            onChange={this.handleChange}
            {...restProps}
          />
          {password ? (
            <button
              type="button"
              className={button}
              onClick={this.handleChangePasswordMode}
              disabled={disabled}
            >
              <Icon type={iconType} alt={iconLabel} title={iconLabel} />
            </button>
          ) : null}
        </div>
        {errorProp && (
          <span role="alert" className={errorClass}>
            {errorProp.message}
          </span>
        )}
      </div>
    )
  }
}

/* -------------------------------------------------------------------------- */

Input.defaultTypes = {
  labelVisible: true,
  focusedSelection: false,
  placeholder: '입력 도움말을 설정해주세요.',
  className: '',
  name: '',
}

Input.propTypes = {
  /** 식별 가능한 고유 아이디 설정은 **필수**입니다. */
  id: string.isRequired,
  /** 사용자에게 정보를 제공할 레이블 설정은 **필수**입니다. 비록 화면에 표시되지는 않더라도 스크린 리더 사용자에게 정보를 제공하기 때문입니다. */
  label: string.isRequired,
  /** 레이블을 화면에 표시할 지 여부를 설정합니다. 표시되지 않더라도 스크린 리더에서 읽혀 접근성을 준수할 수 있습니다. */
  labelVisible: bool,
  /** 포커스 상태가 되면 입력 내용을 전부 선택할 지 설정할 수 있습니다. */
  focusedSelection: bool,
  /** 사용자 정의 클래스 이름을 설정할 수 있습니다. */
  className: string,
  /** 폼 컨트롤 시, 사용자가 입력한 값과 매칭되는 네임 값을 설정합니다. */
  name: string,
  /** 사용자에게 입력할 내용 안내를 도와 줄 도움말을 설정합니다. */
  placeholder: string,
  /** 이메일 모드를 활성화 합니다. */
  email: bool,
  /** 패스워드 모드를 활성화 합니다. 이메일, 패스워드 모드 모두 활성화 된 경우 이메일 모드 보다 우선합니다. */
  password: bool,
  /** 읽기 전용 상태로 설정합니다. */
  readonly: bool,
  /** 비활성 상태로 설정합니다. */
  disabled: bool,
  /** 오류를 전달 받으면 메시지를 화면에 표시합니다. */
  error: shape({ message: string }),
  /** 화면에 표시 할 초기 입력 값을 설정할 수 있습니다. */
  initialValue: string,
  /** 패스워드 값을 바로 표시하도록 설정할 수 있습니다. */
  initialPasswordVisible: bool,
}

export default Input
