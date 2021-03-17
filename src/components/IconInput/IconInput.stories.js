import IconInput from './IconInput'

export default {
  title: 'Components/Form/IconInput',
  component: IconInput,
  parameters: {
    backgrounds: {
      default: 'light',
    },
    docs: {
      description: {
        component:
          '**아이콘 인풋** 컴포넌트는 사용자로부터 입력을 받는 폼 컨트롤입니다.',
      },
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/QNttUlYVQ1wMHo2E2ndD7J/SignIn-%E2%86%90-Coupang?node-id=1%3A294',
    },
  },
}

const Template = (args) => <IconInput {...args} />

export const EmailIconInput = Template.bind({})
EmailIconInput.args = {
  icon: 'letter',
  id: 'icon-input-email',
  label: '이메일',
  placeholder: 'yamoo9@euid.dev',
  email: true,
}
EmailIconInput.storyName = '아이콘 인풋 (이메일)'

export const EmailErrorIconInput = Template.bind({})
EmailErrorIconInput.args = {
  icon: 'letter',
  id: 'icon-input-email',
  label: '이메일',
  placeholder: 'yamoo9@euid.dev',
  initialValue: 'yamoo9@',
  email: true,
  error: {
    message: '아이디(이메일)는 이메일 형식으로 입력해주세요.',
  },
}
EmailErrorIconInput.storyName = '아이콘 인풋 (이메일, 오류 표시)'

export const PasswordIconInput = Template.bind({})
PasswordIconInput.args = {
  icon: 'lock',
  id: 'icon-input-password',
  label: '패스워드',
  placeholder: '숫자, 영어 조합 6자리 이상',
  password: true,
}
PasswordIconInput.storyName = '아이콘 인풋 (패스워드)'

export const PasswordErrorIconInput = Template.bind({})
PasswordErrorIconInput.args = {
  icon: 'lock',
  id: 'icon-input-password',
  label: '패스워드',
  placeholder: '숫자, 영어 조합 6자리 이상',
  password: true,
  initialValue: '9a1!',
  error: {
    message: '숫자, 영어 조합 6자리 이상 입력해야 합니다.',
  },
}
PasswordErrorIconInput.storyName = '아이콘 인풋 (패스워드, 오류 표시)'
