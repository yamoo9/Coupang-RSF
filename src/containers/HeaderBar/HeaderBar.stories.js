import HeaderBar from './HeaderBar'

export default {
  title: 'Containers/Header/HeaderBar',
  component: HeaderBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '**헤더바** 컴포넌트는 헤더 영역에 레이아웃 되며, 로그인 된 사용자의 정보를 표시할 수 있습니다.',
      },
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/QNttUlYVQ1wMHo2E2ndD7J/SignIn-%E2%86%90-Coupang?node-id=854%3A60',
    },
  },
}

const Template = (args) => <HeaderBar {...args} />

export const SingOutedHeaderBar = Template.bind({})
SingOutedHeaderBar.storyName = '헤더바 (로그아웃)'

export const SingInedHeaderBar = Template.bind({})
SingInedHeaderBar.args = {
  authUser: {
    displayName: '야무',
    photoURL: 'https://bit.ly/3vroTsh',
  },
}
SingInedHeaderBar.storyName = '헤더바 (로그인)'

export const SingInedVisibleAvatarHeaderBar = Template.bind({})
SingInedVisibleAvatarHeaderBar.args = {
  authUser: {
    displayName: '야무',
    photoURL: 'https://bit.ly/3vroTsh',
  },
  visibleAvatar: true,
}
SingInedVisibleAvatarHeaderBar.storyName = '헤더바 (로그인, 아바타 표시)'
