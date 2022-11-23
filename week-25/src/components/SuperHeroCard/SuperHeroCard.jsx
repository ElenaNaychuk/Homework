import style from './superHeroesCard.module.scss'

function SuperheroCard(props) {
    return (
        <div className={style.container_cards}>
            <div className={style.card_hero}>
                <img className={style.image} src={props.url} alt={props.name} />
                <h4 className={style.title}>{props.name}</h4>
                <p className={style.universe}><span className="names">Вселенная:</span> {props.universe}</p>
                <p className={style.occupation}><span className="names">Деятельность: </span>{props.occupation}</p>
                <p className={style.superPower}><span className="names">Суперсила: </span>{props.superPower}</p>
                <p className={style.detailedDescription}><span className="names">Подробнее: </span>{props.detailedDescription}</p>
                <legend className={style.rating_container}>
                    <input className={style.rating} type="radio" name="raiting" value="5" />
                    <input className={style.rating} type="radio" name="raiting" value="4" />
                    <input className={style.rating} type="radio" name="raiting" value="3" />
                    <input className={style.rating} type="radio" name="raiting" value="2" />
                    <input className={style.rating} type="radio" name="raiting" value="1" />
                    <p className={style.rating_text}>Рейтинг:</p>
                </legend>
            </div>
        </div>
    );
}

export default SuperheroCard;