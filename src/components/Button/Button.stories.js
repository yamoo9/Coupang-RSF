import Button from './Button'
import { withDesign } from 'storybook-addon-designs'

/* -------------------------------------------------------------------------- */

export default {
  title: 'Components/Form/Button',
  component: Button,
  decorators: [withDesign],
  parameters: {
    docs: {
      description: {
        component:
          '**버튼** 컴포넌트는 이벤트를 트리거 하는 방식으로 사용자와 상호작용(interaction) 하여 제어(contorl) 하는 그래픽 컨트롤입니다.',
      },
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/QNttUlYVQ1wMHo2E2ndD7J/SignIn-%E2%86%90-Coupang?node-id=1%3A117',
    },
  },
  argTypes: {
    disabled: { control: 'boolean' },
    fgColor: { control: 'color' },
    bgColor: { control: 'color' },
    onClick: { action: '버튼 클릭!' },
  },
}

/* -------------------------------------------------------------------------- */

const Template = (args) => <Button {...args} />

export const PrimaryButton = Template.bind({})
PrimaryButton.args = { children: '로그인' }
PrimaryButton.storyName = '버튼 (primary)'

export const SecondaryButton = Template.bind({})
SecondaryButton.args = {
  children: '회원가입',
  secondary: true,
}
SecondaryButton.storyName = '버튼 (secondary)'

export const PrimaryDisabledButton = Template.bind({})
PrimaryDisabledButton.args = {
  children: '로그인',
  disabled: true,
}
PrimaryDisabledButton.storyName = '버튼 (primary, 비활성 상태)'

export const SecondaryDisabledButton = Template.bind({})
SecondaryDisabledButton.args = {
  children: '회원가입',
  secondary: true,
  disabled: true,
}
SecondaryDisabledButton.storyName = '버튼 (secondary, 비활성 상태)'
