import React from 'react'
import { string, oneOf } from 'prop-types'
import letterPath from './images/shape=letter.svg'
import lockPath from './images/shape=lock.svg'
import showPath from './images/shape=show.svg'
import hidePath from './images/shape=hide.svg'

/* -------------------------------------------------------------------------- */

const Icon = ({ type, alt = '', ...restProps }) => {
  let src = ''
  switch (type) {
    case 'letter':
      src = letterPath
      break
    case 'lock':
      src = lockPath
      break
    case 'show':
      src = showPath
      break
    case 'hide':
      src = hidePath
      break
    default:
      throw new Error('지원하는 아이콘 타입이 존재하지 않습니다.')
  }

  return <img src={src} alt={alt} {...restProps} />
}

Icon.propTypes = {
  /** 아이콘 타입은 다음 4가지 타입을 지원합니다. */
  type: oneOf(['letter', 'lock', 'show', 'hide']).isRequired,
  /** 아이콘 대체 텍스트는 스크린 리더 사용자에게 읽힐 콘텐츠입니다. 아이콘과 동등한 정보를 제공해야 합니다. */
  alt: string,
}

export default Icon
