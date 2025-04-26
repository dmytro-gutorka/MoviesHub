import './TabsNavigation.scss'
import classNames from 'classnames'
import getIdFromTitle from "@/utils/getIdFromTitle";


const TabsNavigation = (props) => {

    const { className, id, title, items = [] } = props

    const titleFormated = getIdFromTitle(title)
    const titleId = `${titleFormated}-title`

    return (
        <div
            className={classNames(className, 'tabs-navigation')}
            aria-labelledby={titleId} data-js-tabs-navigation="" role="tablist" id={id}
        >
            <h3 className="visually-hidden" id={titleId}>{title}</h3>
            {items.map((item, index) => {

                const titleFormated = getIdFromTitle(item.title)
                const buttonId = `${titleFormated}-tab`
                const contentId = `${titleFormated}-tabpanel`
                const classes = classNames('tabs-navigation__button', {'is-active': item.isActive})

                return (
                    <div
                        className={classes}
                        id={buttonId}
                        role='tab'
                        aria-controls={contentId}
                        aria-selected={item.isActive}
                        data-js-tabs-button=""
                        key={index}
                        tabIndex={item.isActive ? 0 : -1}
                    >
                        {item.title}
                    </div>
                )
            })}
        </div>
    )
}


export default TabsNavigation