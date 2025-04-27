import './MoviesBanner.scss'
import classNames from 'classnames'
import Slider from "@/components/Slider";


const MoviesBanner = () => {
    const titleId = 'movies-banner-title'
    const moviesCards = []

    return (
        <section className="movies-banner container" aria-labelledby={titleId}>
            <h1 className="visually-hidden" id={titleId}>Movies & Shows</h1>

        </section>
    )

}

export default MoviesBanner