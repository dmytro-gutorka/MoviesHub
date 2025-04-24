import 'swiper/css';
import './Slider.scss'
import SliderNavigation from "@/components/Slider/SliderNavigation";


const defaultSliderParams = {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 30,
    breakpoints: {
        0: {
            spaceBetween: 10,
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        481: {
            spaceBetween: 20,
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        1441: {
            spaceBetween: 30,
            slidesPerView: 5,
            slidesPerGroup: 5,
            allowTouchMove: false,
        }
    }
}


const Slider = (props) => {

    const {
        children,
        navigationTargetElementId = null,
        sliderParams = defaultSliderParams,
        hasScrollBar = true,

    } = props

    return (
        <div
            className="slider"
            data-js-slider={JSON.stringify({
                sliderParams,
                navigationTargetElementId
            })}
        >
            <div className="slider__swiper swiper" data-js-slider-swiper="">
                <ul className="slider__list swiper-wrapper">
                    {children.map((slide, index) => (
                        <li className="slider__item swiper-slide" key={index}>
                            {slide}
                        </li>
                    ))}
                </ul>
            </div>

            {!navigationTargetElementId && (
                <SliderNavigation
                    className="slider__navigation"
                />
            )}

            {hasScrollBar && (
                <div
                    className="slider__scrollbar visible-mobile"
                    data-js-slider-scrollbar=""
                />
            )}
        </div>
    )
}

export default Slider