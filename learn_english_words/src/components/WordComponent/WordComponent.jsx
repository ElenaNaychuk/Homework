import style from './wordComponent.module.scss';
import { useState } from 'react'
import Word from './Word/Word.jsx';

function WordComponent(props) {
    const [isEditing, setIsEditing] = useState(props.clicked || false);

    const edit = () => {
        setIsEditing(true);
    }
    const cancelEditing = () => {
        if (window.confirm('Уверены что хотите отменить несохраненные изменения?')) {
            setIsEditing(false);
        }
    }
    return (
        <div className={style.conainer} id={props.id}>
            <Word content={props.english} isEditing={isEditing} />
            <Word content={props.transcription} isEditing={isEditing} />
            <Word content={props.russian} isEditing={isEditing} />
            <div className={`${style.btn_container} ${style.wrapper}`}>
                <button className={`${style.btn_save} ${style.btn}  ${isEditing && style.add_btn_save}`}><img className={style.img} src='./assets/images/icons8-галочка-64.png' alt='photo' /></button>
                <button onClick={edit} className={`${style.btn_edit} ${style.btn} ${isEditing && style.hidden_btn_edit}`}><img src='./assets/images/icons8-карандаш-100.png' alt='photo' /></button>
                <button onClick={cancelEditing} className={`${style.remove_edit_btn} ${style.btn} ${isEditing && style.show_remove_edit_btn}`}><img className={style.img} src='./assets/images/icons8-отменить-30.png' alt='photo' /></button>
                <button className={`${style.btn_remove} ${style.btn}`}><img className={style.img} src='./assets/images/icons8-сортировка-отходов-50.png' alt='photo' /></button>
            </div>
        </div>
    );
}

export default WordComponent;