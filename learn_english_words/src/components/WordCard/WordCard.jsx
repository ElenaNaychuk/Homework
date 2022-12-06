import { useState } from 'react';
import style from './wordCard.module.scss'

function WordCard(props) {
    const [clicked, setClick] = useState(props.clicked || false);
    const handelClick = () => {
        setClick(true);
    }

    return (
        <div className={style.container_card} id={props.id}>
            <div className={style.wordEnglish}>{props.english}</div>
            <div className={style.transcript}>{props.transcription}</div>
            <div className={style.buttons}>
                {
                    clicked
                        ? <p className={style.wordRussian}>{props.russian}</p>
                        : <button onClick={handelClick} className={style.button}>Проверить</button>
                }
            </div>
        </div>
    );
}

export default WordCard;