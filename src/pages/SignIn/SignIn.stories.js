import SignInPage from './SignIn'

export default {
  title: 'Pages/SignIn',
  component: SignInPage,
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/QNttUlYVQ1wMHo2E2ndD7J/SignIn-%E2%86%90-Coupang?node-id=762%3A2',
    },
    controls: { hideNoControlsWarning: true },
  },
}

export const Page = () => <SignInPage />
Page.storyName = '로그인 페이지'
