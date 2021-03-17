import ButtonSignOut from './ButtonSignOut'

export default {
  title: 'Components/Header/ButtonSignOut',
  component: ButtonSignOut,
  parameters: {
    docs: {
      description: {
        component:
          '**로그아웃 버튼** 컴포넌트는 로그인 상태를 해제하여 로그아웃 상태로 변경하는 트리거입니다.',
      },
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/QNttUlYVQ1wMHo2E2ndD7J/SignIn-%E2%86%90-Coupang?node-id=854%3A95',
    },
  },
}

const Template = (args) => <ButtonSignOut {...args} />

export const NormalButton = Template.bind({})
NormalButton.storyName = '로그아웃 버튼'

export const DisabledButton = Template.bind({})
DisabledButton.args = {
  disabled: true,
}
DisabledButton.storyName = '로그아웃 버튼 (비활성 상태)'
