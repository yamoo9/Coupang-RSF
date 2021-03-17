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
  min: number,
  max: number,
  align: oneOf(['left', 'center', 'right']),
  className: string,
  style: object,
  children: node,
}

export default Container
