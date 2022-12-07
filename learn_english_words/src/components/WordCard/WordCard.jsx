import { useState } from 'react';
import style from './wordCard.module.scss'

function WordCard(props) {

    return (
        <div className={style.container_card} id={props.id}>
            <div className={style.wordEnglish}>{props.english}</div>
            <div className={style.transcript}>{props.transcription}</div>
            <div className={style.buttons}>
                {
                    props.clicked
                        ? <p className={style.wordRussian}>{props.russian}</p>
                        : <button onClick={props.handelClick} className={style.button}>Проверить</button>
                }
            </div>
        </div>
    );
}

export default WordCard;