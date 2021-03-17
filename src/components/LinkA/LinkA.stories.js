import LinkA from './LinkA'

export default {
  title: 'Components/Header/LinkA',
  component: LinkA,
  parameters: {
    docs: {
      description: {
        component:
          '**헤더 내비게이션 링크** 컴포넌트는 클릭 시 페이지를 전환합니다.',
      },
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/QNttUlYVQ1wMHo2E2ndD7J/SignIn-%E2%86%90-Coupang?node-id=854%3A31',
    },
  },
}

const Template = (args) => <LinkA {...args} />

export const NormalLinkA = Template.bind({})
export const AreaLinkA = Template.bind({})
export const ArrowBottomLinkA = Template.bind({})

NormalLinkA.args = {
  href: '/signup',
  children: '회원가입',
}
NormalLinkA.storyName = '회원가입 페이지 링크'

AreaLinkA.args = {
  href: '/singin',
  children: '로그인',
  style: {
    background: '#f0f0f0',
  },
}
AreaLinkA.storyName = '로그인 페이지 링크 (영역 표시)'

ArrowBottomLinkA.args = {
  href: '/vendor-join',
  children: '입점신청',
  hasArrowIcon: true,
}
ArrowBottomLinkA.storyName = '입점신청 페이지 링크 (화살표 아이콘 표시)'
ArrowBottomLinkA.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/QNttUlYVQ1wMHo2E2ndD7J/SignIn-%E2%86%90-Coupang?node-id=854%3A34',
  },
}
