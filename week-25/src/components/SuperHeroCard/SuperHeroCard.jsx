
function SuperheroCard(props) {
    return (
        <div class="container_cards">
            <div className="card_hero">
                <img className="image" src={props.url} alt={props.name} />
                <h4 className="title">{props.name}</h4>
                <p className="universe"><span className="names">Вселенная:</span> {props.universe}</p>
                <p className="occupation"><span className="names">Деятельность: </span>{props.occupation}</p>
                <p className="superPower"><span className="names">Суперсила: </span>{props.superPower}</p>
                <p className="detailedDescription"><span className="names">Подробнее: </span>{props.detailedDescription}</p>
                <legend className="rating_container">
                    <input className="rating" type="radio" name="raiting" value="5" />
                    <input className="rating" type="radio" name="raiting" value="4" />
                    <input className="rating" type="radio" name="raiting" value="3" />
                    <input className="rating" type="radio" name="raiting" value="2" />
                    <input className="rating" type="radio" name="raiting" value="1" />
                    <p className="rating_text">Рейтинг:</p>
                </legend>
            </div>
        </div>
    );
}

export default SuperheroCard;