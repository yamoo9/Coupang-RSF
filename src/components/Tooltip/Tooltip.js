import classNames from 'classnames'
import { string, number, oneOfType, oneOf } from 'prop-types'
import { nullType } from '../../types'

import {
  tooltip,
  orientationTop,
  orientationRight,
  orientationBottom,
  orientationLeft,
} from './Tooltip.module.scss'

/* -------------------------------------------------------------------------- */

const Tooltip = ({
  top,
  right,
  bottom,
  left,
  color,
  bgColor,
  orientation,
  message,
  ...restProps
}) => {
  const styles = {
    top,
    right,
    bottom,
    left,
    color,
    backgroundColor: bgColor,
  }

  const setOrienationClass = (type) => {
    switch (type) {
      case 'top':
        return orientationTop
      case 'right':
        return orientationRight
      case 'bottom':
        return orientationBottom
      case 'left':
        return orientationLeft
      default:
    }
  }

  return (
    <span
      role="tooltip"
      className={classNames(tooltip, setOrienationClass(orientation))}
      style={styles}
      {...restProps}
    >
      {message}
    </span>
  )
}

Tooltip.defaultProps = {
  top: null,
  right: null,
  bottom: null,
  left: null,
  color: null,
  bgColor: null,
  orientation: 'top',
}

Tooltip.propTypes = {
  /** 툴팁 메시지 */
  message: string.isRequired,
  /** 툴팁 top 위치 */
  top: oneOfType([nullType, number]),
  /** 툴팁 right 위치 */
  right: oneOfType([nullType, number]),
  /** 툴팁 bottom 위치 */
  bottom: oneOfType([nullType, number]),
  /** 툴팁 left 위치 */
  left: oneOfType([nullType, number]),
  /** 툴팁 글자 색상 */
  color: oneOfType([nullType, string]),
  /** 툴팁 배경 색상 */
  bgColor: oneOfType([nullType, string]),
  /** 툴팁 화살표 방향 */
  orientation: oneOf(['top', 'right', 'bottom', 'left']),
}

export default Tooltip
