import Icon from './Icon'

export default {
  title: 'Components/UI/Icon',
  component: Icon,
  parameters: {
    backgrounds: {
      default: 'gray',
    },
    docs: {
      description: {
        component:
          '**아이콘** 컴포넌트는 텍스트 없이 모양만으로 정보를 전달하는 픽토그램(그림 문자)입니다.',
      },
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/QNttUlYVQ1wMHo2E2ndD7J/SignIn-%E2%86%90-Coupang?node-id=1%3A250',
    },
  },
}

const Template = (args) => <Icon {...args} />

export const LetterIcon = Template.bind({})
LetterIcon.args = {
  type: 'letter',
  alt: '편지 아이콘',
}
LetterIcon.storyName = '아이콘 (편지 모양)'

export const LockIcon = Template.bind({})
LockIcon.args = {
  type: 'lock',
  alt: '자물쇠 아이콘',
}
LockIcon.storyName = '아이콘 (자물쇠 모양)'

export const ShowIcon = Template.bind({})
ShowIcon.args = {
  type: 'show',
  alt: '열린 눈 아이콘',
}
ShowIcon.storyName = '아이콘 (열린 눈 모양)'

export const HideIcon = Template.bind({})
HideIcon.args = {
  type: 'hide',
  alt: '닫힌 눈 아이콘',
}
HideIcon.storyName = '아이콘 (닫힌 눈 모양)'
