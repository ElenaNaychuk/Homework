import style from './wordList.module.scss';

function WordsList(props) {
    return (
        <div className={style.conainer} id={props.id}>
            <div className={`${style.english} ${style.wrapper}`}>{props.english}</div>
            <div className={`${style.transcription} ${style.wrapper}`}>{props.transcription}</div>
            <div className={`${style.russian} ${style.wrapper}`}>{props.russian}</div>
            <div className={`${style.btn_container} ${style.wrapper}`}>
                {/* <button className={`${style.btn_save} ${style.btn}`}><img className={style.img} src='./assets/images/icons8-галочка-64.png' alt='photo' /></button> */}
                <button className={`${style.btn_edit} ${style.btn}`}><img src='./assets/images/icons8-карандаш-100.png' /></button>
                <button className={`${style.btn_remove} ${style.btn}`}><img className={style.img} src='./assets/images/icons8-сортировка-отходов-50.png' alt='photo' /></button>
            </div>
        </div>
    );
}

export default WordsList;