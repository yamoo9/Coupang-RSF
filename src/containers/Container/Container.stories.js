import Container from './Container'
import LinkA from '../../components/LinkA/LinkA'
import Logo from '../../components/Logo/Logo'

/* -------------------------------------------------------------------------- */

export default {
  title: 'Components/UI/Container',
  component: Container,
  parameters: {
    docs: {
      description: {
        component:
          '**컨테이너** 컴포넌트는 하위(자식) 요소를 감쌀 수 있으며 왼쪽, 가운데, 오른쪽으로 레이아웃 할 수 있습니다.',
      },
    },
  },
  argTypes: {
    min: { control: { type: 'range', min: 0, step: 5, max: 790 } },
    max: { control: { type: 'range', min: 800, step: 5, max: 1920 } },
  },
}

const Template = (args) => <Container {...args} />

export const ContainerGuide = Template.bind({})
ContainerGuide.args = {
  style: {
    textAlign: 'center',
    background: '#f7f7f7',
  },
  children: [
    <LinkA href="https://coupang.com">
      <Logo title="쿠팡~!" />
    </LinkA>,
  ],
}
ContainerGuide.storyName = '컨테이너 (중앙 정렬)'

export const ContainerAlignLeft = Template.bind({})
ContainerAlignLeft.args = {
  align: 'left',
  min: 790,
  style: {
    textAlign: 'center',
    background: '#f7f7f7',
  },
  children: [
    <LinkA href="https://coupang.com">
      <Logo title="쿠팡~!" />
    </LinkA>,
  ],
}
ContainerAlignLeft.storyName = '컨테이너 (왼쪽 정렬, 최소 너비 790px)'

export const ContainerAlignRight = Template.bind({})
ContainerAlignRight.args = {
  align: 'right',
  max: 800,
  style: {
    textAlign: 'center',
    background: '#f7f7f7',
  },
  children: [
    <LinkA href="https://coupang.com">
      <Logo title="쿠팡~!" />
    </LinkA>,
  ],
}
ContainerAlignRight.storyName = '컨테이너 (왼쪽 정렬, 최대 너비 800px)'
