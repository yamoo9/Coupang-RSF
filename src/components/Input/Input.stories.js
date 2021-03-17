import Input from './Input'

export default {
  title: 'Components/Form/Input',
  component: Input,
  parameters: {
    backgrounds: {
      default: 'light',
    },
    docs: {
      description: {
        component: '**인풋** 컴포넌트는 폼 컨트롤로 활용됩니다.',
      },
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/QNttUlYVQ1wMHo2E2ndD7J/SignIn-%E2%86%90-Coupang?node-id=1%3A271',
    },
  },
}

/* -------------------------------------------------------------------------- */

const Template = (args) => <Input {...args} />

export const Email = Template.bind({})
Email.args = {
  id: 'user-email',
  label: '이메일',
  email: true,
  labelVisible: true,
  placeholder: '아이디(이메일)',
}
Email.storyName = '이메일 인풋 (레이블 표시)'

export const EmailNoLabel = Template.bind({})
EmailNoLabel.args = {
  id: 'user-email',
  label: '이메일',
  email: true,
  labelVisible: false,
  placeholder: '아이디(이메일)',
  initialValue: 'yamoo9@naver.com',
}
EmailNoLabel.storyName = '이메일 인풋 (레이블 감춤)'

export const EmailInputError = Template.bind({})
EmailInputError.args = {
  id: 'user-email',
  label: '이메일',
  email: true,
  labelVisible: true,
  placeholder: '아이디(이메일)',
  initialValue: 'yamoo9',
  error: {
    message: '아이디(이메일)는 이메일 형식으로 입력해주세요.',
  },
}
EmailInputError.storyName = '이메일 인풋 (레이블 표시, 오류 표시)'

export const EmailError = Template.bind({})
EmailError.args = {
  id: 'user-email',
  label: '이메일',
  email: true,
  labelVisible: false,
  placeholder: '아이디(이메일)',
  error: {
    message: '아이디(이메일)를 입력해주세요.',
  },
}
EmailError.storyName = '이메일 인풋 (레이블 감춤, 오류 표시)'

export const EmailReadOnly = Template.bind({})
EmailReadOnly.args = {
  id: 'user-email',
  label: '이메일',
  email: true,
  labelVisible: true,
  placeholder: '아이디(이메일)',
  initialValue: 'yamoo9@naver.com',
  readonly: true,
}
EmailReadOnly.storyName = '이메일 인풋 (레이블 표시, 읽기전용 상태)'

export const EmailDisabled = Template.bind({})
EmailDisabled.args = {
  id: 'user-email',
  label: '이메일',
  email: true,
  labelVisible: false,
  placeholder: '아이디(이메일)',
  initialValue: 'yamoo9@euid.dev',
  disabled: true,
}
EmailDisabled.storyName = '이메일 인풋 (레이블 감춤, 비활성 상태)'

/* -------------------------------------------------------------------------- */

export const Password = Template.bind({})
Password.args = {
  id: 'user-password',
  label: '비밀번호',
  password: true,
  labelVisible: true,
  initialValue: 'yamoo9!',
  placeholder: '숫자,영어 조합 6자리 이상',
}
Password.storyName = '패스워드 인풋 (레이블 표시)'

export const PasswordNoLabel = Template.bind({})
PasswordNoLabel.args = {
  id: 'user-password',
  label: '비밀번호',
  password: true,
  labelVisible: false,
  initialValue: 'yamoo9!',
  placeholder: '숫자,영어 조합 6자리 이상',
}
PasswordNoLabel.storyName = '패스워드 인풋 (레이블 감춤)'

export const PasswordLabelVisible = Template.bind({})
PasswordLabelVisible.args = {
  id: 'user-password',
  label: '비밀번호',
  password: true,
  labelVisible: true,
  initialValue: 'yamoo9!',
  initialPasswordVisible: true,
  placeholder: '숫자,영어 조합 6자리 이상',
}
PasswordLabelVisible.storyName = '패스워드 인풋 (레이블 표시, 패스워드 표시)'

export const PasswordVisible = Template.bind({})
PasswordVisible.args = {
  id: 'user-password',
  label: '비밀번호',
  password: true,
  labelVisible: false,
  initialValue: 'yamoo9!',
  initialPasswordVisible: true,
  placeholder: '숫자,영어 조합 6자리 이상',
}
PasswordVisible.storyName = '패스워드 인풋 (레이블 감춤, 패스워드 표시)'

export const PasswordError = Template.bind({})
PasswordError.args = {
  id: 'user-password',
  label: '비밀번호',
  password: true,
  labelVisible: true,
  initialValue: 'yamoo9!',
  placeholder: '숫자,영어 조합 6자리 이상',
  error: {
    message: '비밀번호를 입력해주세요.',
  },
}
PasswordError.storyName = '패스워드 인풋 (레이블 표시, 오류 표시)'

export const PasswordInputError = Template.bind({})
PasswordInputError.args = {
  id: 'user-password',
  label: '비밀번호',
  password: true,
  passwordVisible: true,
  labelVisible: false,
  initialValue: 'yamoo9!',
  placeholder: '숫자,영어 조합 6자리 이상',
  error: {
    message: '숫자, 영어 조합 6자리 이상 입력해야 합니다.',
  },
}
PasswordInputError.storyName = '패스워드 인풋 (레이블 감춤, 오류 표시)'

export const PasswordReadOnly = Template.bind({})
PasswordReadOnly.args = {
  id: 'user-password',
  label: '비밀번호',
  password: true,
  labelVisible: true,
  placeholder: '숫자,영어 조합 6자리 이상',
  initialValue: 'yamoo9!',
  readonly: true,
}
PasswordReadOnly.storyName = '패스워드 인풋 (레이블 표시, 읽기전용 상태)'

export const PasswordDisabled = Template.bind({})
PasswordDisabled.args = {
  id: 'user-password',
  label: '비밀번호',
  password: true,
  labelVisible: false,
  placeholder: '숫자,영어 조합 6자리 이상',
  initialValue: 'yamoo9!',
  disabled: true,
}
PasswordDisabled.storyName = '패스워드 인풋 (레이블 감춤, 비활성 상태)'
