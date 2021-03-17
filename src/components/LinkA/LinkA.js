/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import classNames from 'classnames'
import { string, bool, node } from 'prop-types'
import { link } from './LinkA.module.scss'

/* -------------------------------------------------------------------------- */

const LinkA = ({
  href,
  external,
  className,
  hasArrowIcon,
  children,
  ...restProps
}) => {
  return (
    <a
      href={href}
      target={external ? '_blank' : null}
      rel={external ? 'noopener noreferrer' : null}
      className={classNames(link, className)}
      {...restProps}
    >
      {children}
      {hasArrowIcon && (
        <svg
          width="7"
          height="6"
          viewBox="0 0 7 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 0.5H0L3.60831 5.5L7 0.5Z" fill="#555555" />
        </svg>
      )}
    </a>
  )
}

LinkA.propTypes = {
  /** 연결할 링크 주소 설정은 **필수**입니다. */
  href: string.isRequired,
  /** 외부 페이지 링크인 경우 설정합니다. */
  external: bool,
  /** 화살표(▾) 아이콘을 표시합니다. */
  hasArrowIcon: bool,
  /** 자식 노드를 전달 받습니다. */
  children: node,
}

export default LinkA
