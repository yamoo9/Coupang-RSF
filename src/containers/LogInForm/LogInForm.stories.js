import LogInForm, { LoginFormForStories } from './LogInForm'

import {
  control,
  group,
  findLink,
  findLinkArrow,
  buttonGroup,
  button,
} from './LogInForm.module.scss'

import {
  EmailIconInput,
  EmailErrorIconInput,
  PasswordIconInput,
  PasswordErrorIconInput,
} from '../../components/IconInput/IconInput.stories'

import {
  Checked,
  Unchecked,
} from '../../components/AutoSignInCheckbox/AutoSignInCheckbox.stories'

import {
  PrimaryButton,
  PrimaryDisabledButton,
  SecondaryButton,
} from '../../components/Button/Button.stories'

import Divider from '../../components/Divider/Divider'

/* -------------------------------------------------------------------------- */

export default {
  title: 'Containers/Form/LogInForm',
  component: LogInForm,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '**로그인 폼** 컴포넌트는 사용자로부터 이메일, 패스워드를 입력 받아 서버에 전송해 인증 정보를 확인합니다.',
      },
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/QNttUlYVQ1wMHo2E2ndD7J/SignIn-%E2%86%90-Coupang?node-id=886%3A269',
    },
  },
  argTypes: {
    width: { control: { type: 'range', min: 400, step: 5, max: 800 } },
  },
}

/* -------------------------------------------------------------------------- */

const Template = (args) => <LogInForm {...args} />

export const Form = Template.bind({})
Form.args = {
  width: 320,
}
Form.storyName = '로그인 폼 (모바일)'

//* -------------------------------------------------------------------------- */
// 참고: https://bit.ly/2NpYKJn
//* -------------------------------------------------------------------------- */

export const PristineForm = (args) => (
  <LoginFormForStories {...args}>
    <EmailIconInput {...EmailIconInput.args} className={control} />
    <PasswordIconInput {...PasswordIconInput.args} className={control} />
    <div className={group}>
      <Unchecked {...Unchecked.args} />
      <FindLink />
    </div>

    <div className={buttonGroup}>
      <PrimaryDisabledButton
        {...PrimaryDisabledButton.args}
        type="submit"
        className={button}
      >
        로그인
      </PrimaryDisabledButton>

      <Divider />

      <SecondaryButton
        {...SecondaryButton.args}
        tag="a"
        href="/signup"
        className={button}
      >
        회원가입
      </SecondaryButton>
    </div>
  </LoginFormForStories>
)
PristineForm.args = {
  width: 576,
}
PristineForm.storyName = '로그인 폼 (초기 상태)'

/* -------------------------------------------------------------------------- */

export const InputedForm = (args) => (
  <LoginFormForStories {...args}>
    <EmailIconInput
      {...EmailIconInput.args}
      initialValue="yamoo9@naver.com"
      className={control}
    />
    <PasswordIconInput
      {...PasswordIconInput.args}
      initialValue="kdia1e"
      className={control}
    />
    <div className={group}>
      <Checked {...Checked.args} />
      <FindLink />
    </div>

    <div className={buttonGroup}>
      <PrimaryButton {...PrimaryButton.args} type="submit" className={button}>
        로그인
      </PrimaryButton>

      <Divider />

      <SecondaryButton
        {...SecondaryButton.args}
        tag="a"
        href="/signup"
        className={button}
      >
        회원가입
      </SecondaryButton>
    </div>
  </LoginFormForStories>
)
InputedForm.args = {
  width: 576,
}
InputedForm.storyName = '로그인 폼 (입력 상태)'

/* -------------------------------------------------------------------------- */

export const ErrorForm = (args) => (
  <LoginFormForStories {...args}>
    <EmailErrorIconInput {...EmailErrorIconInput.args} className={control} />
    <PasswordErrorIconInput
      {...PasswordErrorIconInput.args}
      className={control}
    />
    <div className={group}>
      <Checked {...Checked.args} />
      <FindLink />
    </div>

    <div className={buttonGroup}>
      <PrimaryDisabledButton
        {...PrimaryDisabledButton.args}
        type="submit"
        className={button}
      >
        로그인
      </PrimaryDisabledButton>

      <Divider />

      <SecondaryButton
        {...SecondaryButton.args}
        tag="a"
        href="/signup"
        className={button}
      >
        회원가입
      </SecondaryButton>
    </div>
  </LoginFormForStories>
)
ErrorForm.args = {
  width: 576,
}
ErrorForm.storyName = '로그인 폼 (오류 상태)'

/* -------------------------------------------------------------------------- */

const FindLink = () => (
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
)
