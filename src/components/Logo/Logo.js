import React from 'react'
import { string, oneOf } from 'prop-types'
import colorfulPath from './images/colorful.svg'
import monoPath from './images/mono.svg'
import blackPath from './images/black.svg'

/* -------------------------------------------------------------------------- */

const Logo = ({ mode = 'color', label = '쿠팡', ...restProps }) => {
  let src = ''
  switch (mode) {
    case 'mono':
      src = monoPath
      break
    case 'black':
      src = blackPath
      break
    default:
      src = colorfulPath
  }

  return <img src={src} alt={label} {...restProps} />
}

Logo.propTypes = {
  /** 로고 모드는 다음 3가지 타입을 지원합니다. */
  mode: oneOf(['color', 'mono', 'black']),
  /** 로고 레이블은 스크린 리더 사용자에게 읽힐 콘텐츠입니다. 이미지와 동등한 정보를 제공하세요. */
  label: string,
}

export default Logo
