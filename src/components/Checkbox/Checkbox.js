import classNames from 'classnames'
import { string, bool, func } from 'prop-types'
import {
  checkbox,
  checked as checkedClass,
  disabled as disabledClass,
  checkedDisabled,
} from './Checkbox.module.scss'

const Checkbox = ({
  disabled = false,
  checked = false,
  label,
  className,
  onChange,
  ...restProps
}) => {
  return (
    <label
      className={classNames(
        checkbox,
        checked ? checkedClass : null,
        disabled ? disabledClass : null,
        checked && disabled ? checkedDisabled : null
      )}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...restProps}
      />{' '}
      {label}
    </label>
  )
}

Checkbox.propTypes = {
  /** 체크박스 옆에 표시 할 레이블입니다.. */
  label: string.isRequired,
  /** 체크박스의 체크 상태를 표시합니다. */
  checked: bool,
  /** 체크박스를 비활성화 처리합니다. */
  disabled: bool,
  /** 체크박스에 임의의 클래스를 설정할 수 있습니다. */
  className: string,
  /** 체크박스 이벤트 변화가 감지되면 실행 될 콜백 함수입니다. */
  onChange: func,
}

export default Checkbox
