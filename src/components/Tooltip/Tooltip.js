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
  /** 툴팁 메시지로 표시할 정보를 전달 받습니다. */
  message: string.isRequired,
  /** 툴팁 top 위치를 세밀하게 조정할 수 있습니다. */
  top: oneOfType([nullType, number]),
  /** 툴팁 right 위치를 세밀하게 조정할 수 있습니다. */
  right: oneOfType([nullType, number]),
  /** 툴팁 bottom 위치를 세밀하게 조정할 수 있습니다. */
  bottom: oneOfType([nullType, number]),
  /** 툴팁 left 위치를 세밀하게 조정할 수 있습니다. */
  left: oneOfType([nullType, number]),
  /** 툴팁 글자 색상을 조정할 수 있습니다. */
  color: oneOfType([nullType, string]),
  /** 툴팁 배경 색상을 조정할 수 있습니다. */
  bgColor: oneOfType([nullType, string]),
  /** 툴팁 화살표 방향을 조정할 수 있습니다. */
  orientation: oneOf(['top', 'right', 'bottom', 'left']),
}

export default Tooltip
