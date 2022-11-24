import style from './wordCard.module.scss'

function WordCard() {
    return (
        <div className={style.container_card}>
            <div className={style.wordEnglish}>world</div>
            <div className={style.transcript}>[world]</div>
            <div className={style.wordRussian}>мир</div>
            <div className={style.word_group}>планета</div>
            <div className={style.buttons}>
                <button className={style.button}>Удалить</button>
                <button className={style.button}>Выученное</button>
            </div>
        </div>
    );
}

export default WordCard;