import Checkbox from './Checkbox'

/* -------------------------------------------------------------------------- */

export default {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          '**체크박스** 컴포넌트는 GUI 요소(또는 위젯) 중 하나로 사용자로부터 하나 이상 입력을 받을 수 있습니다.',
      },
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/QNttUlYVQ1wMHo2E2ndD7J/SignIn-%E2%86%90-Coupang?node-id=3%3A231',
    },
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: '체크 상태 변경!' },
  },
}

/* -------------------------------------------------------------------------- */

const Template = (args) => <Checkbox {...args} />

export const Checked = Template.bind({})
Checked.args = {
  label: '자동 로그인',
  checked: true,
}
Checked.storyName = '체크박스 (☑️)'

export const Unchecked = Template.bind({})
Unchecked.args = {
  label: '자동 로그인',
}
Unchecked.storyName = '체크박스 (▢)'

export const CheckedDisabled = Template.bind({})
CheckedDisabled.args = {
  label: '자동 로그인',
  checked: true,
  disabled: true,
}
CheckedDisabled.storyName = '체크박스 (☑️, 비활성 상태)'

export const UnheckedDisabled = Template.bind({})
UnheckedDisabled.args = {
  label: '자동 로그인',
  checked: false,
  disabled: true,
}
UnheckedDisabled.storyName = '체크박스 (▢, 비활성 상태)'
