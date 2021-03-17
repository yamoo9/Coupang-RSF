import Divider from './Divider'

export default {
  title: 'Components/UI/Divider',
  component: Divider,
  parameters: {
    docs: {
      description: {
        component:
          '**디바이더** 컴포넌트는 상/하 영역과 구분되는 선을 화면에 그릴 수 있습니다. 이 요소는 표현 역할(role)로 의미가 부여되어 있고, 접근성에 문제가 생기지 않도록 조치합니다.',
      },
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/QNttUlYVQ1wMHo2E2ndD7J/SignIn-%E2%86%90-Coupang?node-id=928%3A512',
    },
  },
  argTypes: {
    color: { control: { type: 'color' } },
    space: { control: { type: 'range' } },
  },
}

const Template = (args) => <Divider {...args} />

export const Normal = Template.bind({})
Normal.storyName = '구분 선 (기본)'

export const CustomSpace = Template.bind({})
CustomSpace.args = { space: 40 }
CustomSpace.storyName = '구분 선 (상/하 공간 조정)'

export const CustomColor = Template.bind({})
CustomColor.args = { color: '#3082bb' }
CustomColor.storyName = '구분 선 (색상 조정)'

export const CustomStyle = Template.bind({})
CustomStyle.args = {
  style: {
    height: 5,
    width: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}
CustomStyle.storyName = '구분 선 (스타일 조정)'
