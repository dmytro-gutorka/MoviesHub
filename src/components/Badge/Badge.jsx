import './Badge.scss'
import classNames from 'classnames'
import Icon from "@/components/Icon";


const Badge = (props) => {

    const { className, isBig = false, children, mode, iconName, iconAreaLabel, hasFillIcon } = props
    // mode: '' (default) | 'accent'

    return (
        <div
            className={classNames(className, 'badge', {[`badge--${mode}`]: mode, 'badge--big': isBig})}>
            {iconName && <Icon className="badge__icon" name={iconName} hasFill={hasFillIcon} ariaLabel={iconAreaLabel}/> }
            <span>{children}</span>
        </div>
    )
}

export default Badge