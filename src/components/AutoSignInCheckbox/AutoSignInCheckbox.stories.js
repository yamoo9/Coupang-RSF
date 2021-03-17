import AutoSignInCheckbox from './AutoSignInCheckbox'

export default {
  title: 'Components/Form/AutoSignInCheckbox',
  component: AutoSignInCheckbox,
  parameters: {
    docs: {
      description: {
        component:
          '**자동 로그인 체크박스** 컴포넌트는 주로 로그인 페이지에서 사용됩니다.',
      },
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/QNttUlYVQ1wMHo2E2ndD7J/SignIn-%E2%86%90-Coupang?node-id=3%3A246',
    },
  },
}

const Template = (args) => <AutoSignInCheckbox {...args} />

export const Checked = Template.bind({})
Checked.args = { checked: true }
Checked.storyName = '자동 로그인 체크박스 (☑)'

export const Unchecked = Template.bind({})
Unchecked.args = {}
Unchecked.storyName = '자동 로그인 체크박스 (▢)'

export const CheckedDisabled = Template.bind({})
CheckedDisabled.args = { checked: true, disabled: true }
CheckedDisabled.storyName = '자동 로그인 체크박스 (☑, 비활성 상태)'

export const UncheckedDisabled = Template.bind({})
UncheckedDisabled.args = { disabled: true }
UncheckedDisabled.storyName = '자동 로그인 체크박스 (▢, 비활성 상태)'
