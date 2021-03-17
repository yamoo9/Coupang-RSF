import React from 'react'
import classNames from 'classnames'
import { string, number, object, oneOfType } from 'prop-types'
import { isValidEmailFormat, isValidPasswordFormat } from '../../utils'

import {
  form,
  control,
  group,
  findLink,
  findLinkArrow,
  buttonGroup,
  button,
} from './LogInForm.module.scss'

import IconInput from '../../components/IconInput/IconInput'
import AutoSignInCheckbox from '../../components/AutoSignInCheckbox/AutoSignInCheckbox'
import Button from '../../components/Button/Button'
import Divider from '../../components/Divider/Divider'

/* -------------------------------------------------------------------------- */

const initialLoginFormValues = {
  email: '',
  password: '',
  isAutoLogin: false,
  hasError: {
    email: null,
    password: null,
  },
}

/* -------------------------------------------------------------------------- */

class LogInForm extends React.Component {
  state = { ...initialLoginFormValues }

  confirmOfSubmitting() {
    const { email, password } = this.state

    const values = {
      email: email.trim(),
      password: password.trim(),
    }

    const validation = {
      email: isValidEmailFormat(values.email),
      password: isValidPasswordFormat(values.password),
    }

    return values.email.length === 0 ||
      values.password.length === 0 ||
      !validation.email ||
      !validation.password
      ? true
      : false
  }

  resetFormValues() {
    this.setState(initialLoginFormValues)
  }

  setErrorState(name, message) {
    this.setState({
      ...this.state,
      hasError: {
        ...this.state.hasError,
        [name]: { message },
      },
    })
  }

  resetErrorState(name) {
    this.setState({
      ...this.state,
      hasError: {
        ...this.state.hasError,
        [name]: null,
      },
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { hasError, ...requestFormData } = this.state
    const formdata = new FormData()

    Object.entries(requestFormData).forEach(([key, value]) =>
      formdata.append(key, value)
    )

    // console.log(formdata)

    // 참고: https://mzl.la/2P1WxEs
    for (let [key, value] of formdata.entries()) {
      console.log(`%c${key} → ${value}`, 'font-weight: bold')
    }
  }

  handleChange = (e) => {
    const { name, value, checked } = e.target

    const newState = {
      [name]: name !== 'isAutoLogin' ? value.trim() : checked,
    }

    this.setState(newState)
  }

  handleBlurCheckValidFormat = ({ target: { name, value } }) => {
    switch (name) {
      // 이메일 유효성 검사 ---------------------------------------------

      case 'email':
        if (value.trim().length === 0) {
          this.setErrorState(name, '아이디(이메일)를 입력해주세요.')
          break
        }

        if (!isValidEmailFormat(value)) {
          this.setErrorState(
            name,
            '아이디(이메일)는 이메일 형식으로 입력해주세요.'
          )
          break
        }

        this.resetErrorState(name)
        break

      // 패스워드 유효성 검사 ---------------------------------------------

      case 'password':
        const valueLength = value.trim().length

        if (valueLength === 0) {
          this.setErrorState(name, '비밀번호를 입력해주세요.')
          break
        }

        if (!isValidPasswordFormat(value)) {
          this.setErrorState(
            name,
            '숫자, 영어 조합 6자리 이상 입력해야 합니다.'
          )
          break
        }

        this.resetErrorState(name)
        break

      default:
        throw new Error('`email`, `password` 인풋 이름만 처리 가능합니다.')
    }
  }

  render() {
    const { width, className = '', style, ...restProps } = this.props
    const { email, password, isAutoLogin, hasError } = this.state

    const styles = {
      width,
      ...style,
    }

    return (
      <form
        className={classNames(form, className)}
        style={styles}
        noValidate
        {...restProps}
      >
        <IconInput
          email
          icon="letter"
          id="email"
          name="email"
          label="이메일"
          placeholder="아이디(이메일)"
          focusedSelection
          className={control}
          value={email}
          onChange={this.handleChange}
          onBlur={this.handleBlurCheckValidFormat}
          error={hasError.email}
        />
        <IconInput
          password
          icon="lock"
          id="password"
          name="password"
          label="비밀번호"
          placeholder="비밀번호"
          className={control}
          value={password}
          onChange={this.handleChange}
          onBlur={this.handleBlurCheckValidFormat}
          error={hasError.password}
        />
        <div className={group}>
          <AutoSignInCheckbox
            name="isAutoLogin"
            checked={isAutoLogin}
            onChange={this.handleChange}
          />
          <a href="/find-email-or-password" className={findLink}>
            아이디(이메일)/비밀번호 찾기
            <svg
              width="11"
              height="18"
              viewBox="0 0 11 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={findLinkArrow}
            >
              <path d="M1.5 1L9.5 9L1.5 17" stroke="#0074E9" strokeWidth="2" />
            </svg>
          </a>
        </div>
        <div className={buttonGroup}>
          <Button
            type="submit"
            className={button}
            disabled={this.confirmOfSubmitting()}
            onClick={this.handleSubmit}
          >
            로그인
          </Button>

          <Divider />

          <Button tag="a" href="/signup" className={button} secondary>
            회원가입
          </Button>
        </div>
      </form>
    )
  }
}

LogInForm.propTypes = {
  /** 폼 너비를 설정할 수 있습니다. */
  width: oneOfType([string, number]),
  /** 사용자 정의 클래스 이름을 추가할 수 있습니다. */
  className: string,
  /** 사용자 정의 스타일 객체를 설정할 수 있습니다. */
  style: object,
}

export default LogInForm

/* -------------------------------------------------------------------------- */

// Storybook 용 로그인 폼 컴포넌트
export const LoginFormForStories = ({
  width,
  className = '',
  style,
  children,
  ...restProps
}) => {
  const styles = {
    width,
    ...style,
  }
  return (
    <form
      className={classNames(form, className)}
      style={styles}
      noValidate
      {...restProps}
    >
      {children}
    </form>
  )
}
