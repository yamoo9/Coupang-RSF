import React from 'react'
import classNames from 'classnames'
import { oneOf, number, string, node, object } from 'prop-types'
import containerStyle from './Container.module.scss'

/* -------------------------------------------------------------------------- */

const Container = ({
  align = 'center',
  min = 1,
  max = 1024,
  className = '',
  style = {},
  children,
  ...restProps
}) => {
  const styles = {
    minWidth: min,
    maxWidth: max,
    ...style,
  }

  return (
    <div
      className={classNames(containerStyle[align], className)}
      style={styles}
      {...restProps}
    >
      {children}
    </div>
  )
}

Container.propTypes = {
  /** 컨테이너 최소 너비 값을 설정합니다. */
  min: number,
  /** 컨테이너 최대 너비 값을 설정합니다. */
  max: number,
  /** 컨테이너 정렬 방향을 설정합니다. */
  align: oneOf(['left', 'center', 'right']),
  /** 사용자 정의 클래스를 추가할 수 있습니다. */
  className: string,
  /** 사용자 정의 클래스를 추가 설정할 수 있습니다. */
  style: object,
  /** React 컴포넌트가 반환 가능한 모든 값을 자식 노드로 전달 받을 수 있습니다. */
  children: node,
}

export default Container
