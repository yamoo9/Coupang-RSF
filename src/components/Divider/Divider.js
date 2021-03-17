import React from 'react'
import { number, string, object } from 'prop-types'
import classNames from 'classnames'
import { line } from './Divider.module.scss'

/* -------------------------------------------------------------------------- */

const Divider = ({
  space = 22,
  color = '#ccc',
  className = '',
  style = {},
  ...restProps
}) => {
  const styles = {
    marginTop: space,
    marginBottom: space,
    background: color,
    ...style,
  }

  return (
    <div
      role="presentation"
      className={classNames(line, className)}
      style={styles}
      {...restProps}
    />
  )
}

Divider.propTypes = {
  /** 구분선 마진 상/하 공간을 설정합니다. */
  space: number,
  /** 구분선 색상을 설정합니다. */
  color: string,
  /** 사용자 정의 클래스 이름을 추가할 수 있습니다. */
  className: string,
  /** 사용자 정의 스타일 객체를 추가할 수 있습니다. */
  style: object,
}

export default Divider
