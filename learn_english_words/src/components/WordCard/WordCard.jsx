import { useState } from 'react';
import style from './wordCard.module.scss'

function WordCard(props) {
    const [clicked, setClick] = useState(props.clicked || false);
    const handelClick = () => {
        setClick(!clicked);
    }
    return (
        <div className={style.container_card} id={props.id}>
            <div className={style.wordEnglish}>{props.english}</div>
            <div className={style.transcript}>{props.transcription}</div>
            <div className={style.buttons}>
                <button className={`${style.button} ${clicked && style.none}`} onClick={handelClick}>Проверить</button>
                <p className={`${style.wordRussian} ${clicked && style.show}`}>{props.russian}</p>
            </div>
        </div>
    );
}

export default WordCard;