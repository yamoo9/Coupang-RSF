import Logo from './Logo'

export default {
  title: 'Components/UI/Logo',
  component: Logo,
  parameters: {
    docs: {
      description: {
        component: '**로고** 컴포넌트는 서비스를 대표하는 심볼(상징)입니다.',
      },
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/QNttUlYVQ1wMHo2E2ndD7J/SignIn-%E2%86%90-Coupang?node-id=3%3A154',
    },
  },
}

const Template = (args) => <Logo {...args} />

export const ColorLogo = Template.bind({})
ColorLogo.storyName = '로고 (color 모드)'

export const MonoLogo = Template.bind({})
MonoLogo.args = {
  mode: 'mono',
  label: 'coupang',
}
MonoLogo.storyName = '로고 (mono 모드)'

export const BlackLogo = Template.bind({})
BlackLogo.args = {
  mode: 'black',
}
BlackLogo.storyName = '로고 (black 모드)'
