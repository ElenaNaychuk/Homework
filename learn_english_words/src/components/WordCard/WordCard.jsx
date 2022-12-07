import { useState } from 'react';
import style from './wordCard.module.scss'

function WordCard(props) {
    const [showsTranslation, setShowsTranslation] = useState(props.showsTranslation || false);

    const showTranslation = () => setShowsTranslation(true);

    const hideTranslation = () => setShowsTranslation(false);

    if (props.hideTranslationFuncReceiver) {
        props.hideTranslationFuncReceiver(hideTranslation);
    }

    return (
        <div className={style.container_card} id={props.id}>
            <div className={style.wordEnglish}>{props.english}</div>
            <div className={style.transcript}>{props.transcription}</div>
            <div className={style.buttons}>
                {
                    showsTranslation
                        ? <p className={style.wordRussian}>{props.russian}</p>
                        : <button onClick={showTranslation} className={style.button}>Проверить</button>
                }
            </div>
        </div>
    );
}

export default WordCard;