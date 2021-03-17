import Tooltip from './Tooltip'

export default {
  title: 'Components/UI/Tooltip',
  component: Tooltip,
  parameters: {
    backgrounds: {
      default: 'gray',
    },
    docs: {
      description: {
        component:
          '**툴팁** 컴포넌트는 GUI 요소입니다. 보충 설명을 보여줄 때 사용됩니다.',
      },
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/QNttUlYVQ1wMHo2E2ndD7J/SignIn-%E2%86%90-Coupang?node-id=762%3A478',
    },
  },
  argTypes: {
    top: { control: { type: 'range' } },
    left: { control: { type: 'range' } },
    bottom: { control: { type: 'range' } },
    right: { control: { type: 'range' } },
    color: { control: { type: 'color' } },
    bgColor: { control: { type: 'color' } },
  },
}

const Template = (args) => <Tooltip {...args} />

export const Top = Template.bind({})
Top.args = {
  message: '개인 정보 보호를 위해 본인 기기에서만 이용해주세요',
  top: 20,
  left: 20,
  right: null,
  bottom: null,
}
Top.storyName = ' 툴팁 화살표 방향 (↑)'

export const Right = Template.bind({})
Right.args = {
  message: '개인 정보 보호를 위해 본인 기기에서만 이용해주세요',
  top: 20,
  left: null,
  right: 20,
  bottom: null,
  orientation: 'right',
}
Right.storyName = '툴팁 화살표 방향 (→)'

export const Bottom = Template.bind({})
Bottom.args = {
  message: '개인 정보 보호를 위해 본인 기기에서만 이용해주세요',
  top: null,
  left: null,
  right: 20,
  bottom: 20,
  orientation: 'bottom',
}
Bottom.storyName = '툴팁 화살표 방향 (↓)'

export const Left = Template.bind({})
Left.args = {
  message: '개인 정보 보호를 위해 본인 기기에서만 이용해주세요',
  top: null,
  left: 20,
  right: null,
  bottom: 20,
  orientation: 'left',
}
Left.storyName = '툴팁 화살표 방향 (←)'
