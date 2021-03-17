import SignInedInfo from './SignInedInfo'
import { withKnobs, object, text, boolean } from '@storybook/addon-knobs'

export default {
  title: 'Components/Header/SignInedInfo',
  // Story에 노브(knobs) 지원을 추가하려면 `withKnobs` 데코레이터를 추가합니다.
  // 'withKnobs'는 전역 데코레이터로 설정할 수도 있습니다. (.storybook/preview.js)
  decorators: [withKnobs],
  component: SignInedInfo,
  parameters: {
    docs: {
      description: {
        component:
          '**로그인 정보** 컴포넌트는 로그인 상태인 경우에만 헤더바 UI에 표시됩니다.',
      },
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/QNttUlYVQ1wMHo2E2ndD7J/SignIn-%E2%86%90-Coupang?node-id=854%3A103',
    },
    controls: { hideNoControlsWarning: true },
  },
  argTypes: {
    // 노브(knobs)로 대체 컨트롤 합니다.
    // authUser: { control: { type: 'object' } },
    // className: { control: { type: 'text' } },
    // visibleAvatar: { control: { type: 'boolean', }, },
  },
}

export const SignIned = () => {
  // 노브(knobs) 동적 변수 설정
  const label = '인증 사용자 (authUser)'

  const defaultValue = {
    displayName: '야무',
    photoURL: 'https://bit.ly/3vroTsh',
  }

  return (
    <SignInedInfo
      authUser={object(label, defaultValue)}
      className={text('클래스 이름 (className)', '')}
      visibleAvatar={boolean('아바타 표시 (visibleAvater)', false)}
      onSignOut={() => console.log('로그아웃')}
    />
  )
}
SignIned.storyName = '로그인 정보 (로그인 상태)'

export const SignOuted = () => <SignInedInfo />
SignOuted.storyName = '로그인 정보 (로그아웃 상태 ▸ 렌더링 없음)'
