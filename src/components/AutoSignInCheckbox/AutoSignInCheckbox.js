import { string, bool, func, oneOf } from 'prop-types'
import { formControl } from './AutoSignInCheckbox.module.scss'
import Checkbox from '../Checkbox/Checkbox'
import Tooltip from '../Tooltip/Tooltip'

/* -------------------------------------------------------------------------- */

export default function AutoSignInCheckbox({
  label,
  checked,
  disabled,
  orientation,
  message,
  onChange,
  ...restProps
}) {
  return (
    <span className={formControl}>
      <Checkbox
        label={label}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...restProps}
      />
      {checked && (
        <Tooltip
          left={-5}
          top={24}
          orientation={orientation}
          message={message}
        />
      )}
    </span>
  )
}

AutoSignInCheckbox.defaultProps = {
  label: '자동 로그인',
  orientation: 'top',
  message: '개인 정보 보호를 위해 본인 기기에서만 이용해주세요',
  onChange: null,
}

AutoSignInCheckbox.propTypes = {
  /** 컴포넌트의 레이블을 설정합니다. */
  label: string,
  /** 체크 상태를 전달 받습니다. (활성 또는 비활성 상태) */
  checked: bool,
  /** 활성 또는 비활성 상태로 설정합니다. */
  disabled: bool,
  /** 변경 이벤트 (함수)를 전달 받습니다. (`checked` 상태 업데이트) */
  onChange: func,
  /** 툴팁 화살표의 방향을 설정합니다. */
  orientation: oneOf(['top', 'right', 'bottom', 'left']),
  /** 안내할 메시지를 전달 받습니다. */
  message: string,
}
