import './Socials.scss'
import classNames from 'classnames'
import Button from "@/components/Button";


const Socials = (props) => {
    const {
        className,
        links = []
    } = props

    return (
        <div className={classNames(className, 'socials')}>
            <ul className="socials__list">
                {links.map(({label, iconName}, index) => (
                    <li className="socials__item" key={index}>
                        <Button
                            className="socials__link"
                            mode="black-10"
                            href="/"
                            target="_blank"
                            label={label}
                            isLabelHidden
                            iconName={iconName}
                            hasFillIcon
                        />
                    </li>
                ) )}
            </ul>
        </div>
    )
}

export default Socials