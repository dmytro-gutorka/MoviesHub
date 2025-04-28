import './MoviesBannerCard.scss'
import {Image} from "minista";
import Button from "@/components/Button";


const MoviesBannerCard = (props) => {

    const { title, description, imgSrc } = props

    return (
        <div className="movies-banner-card">
            <Image className="movies-banner-card__image" src={imgSrc}/>
            <div className="movies-banner-card__inner">
                <div className="movies-banner-card__body">
                    <h2 className="movies-banner-card__title h3">{title}</h2>
                    <div className="movies-banner-card__description hidden-mobile">
                        <p>{description}</p>
                    </div>
                </div>
                <footer className="movies-banner-card__footer">
                    <Button className="movies-banner-card__play-button" iconName="play" label="Play Now"/>
                    <div className="movies-banner-card__actions">
                        <Button iconName="plus" label="Add to playlist" mode="black-06" isLabelHidden/>
                        <Button iconName="like" label="Like" mode="black-06" isLabelHidden/>
                        <Button iconName="volume" label="Mute" mode="black-06" isLabelHidden/>
                    </div>
                </footer>
            </div>
        </div>
    )
}


export default MoviesBannerCard