import style from './wordComponent.module.scss';
import { useState } from 'react'
import Word from './Word/Word.jsx';
import Button from './Button/Button';

function WordComponent(props) {
    const saveImg = <img className={style.img} src='./assets/images/icons8-галочка-64.png' alt='photo' />;
    const editImg = <img src='./assets/images/icons8-карандаш-100.png' alt='photo' />;
    const canselImg = <img className={style.img} src='./assets/images/icons8-отменить-30.png' alt='photo' />;
    const deleteImg = <img className={style.img} src='./assets/images/icons8-сортировка-отходов-50.png' alt='photo' />;

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
                {
                    isEditing &&
                    <Button content={saveImg} style={style.btn_save} />
                }
                {
                    isEditing &&
                    <Button function={cancelEditing} content={canselImg} style={style.cancel_edit_btn} />
                }
                {
                    isEditing &&
                    <Button content={deleteImg} style={style.btn_delete} />
                }
                {
                    !isEditing &&
                    <Button function={edit} content={editImg} style={style.btn_edit} />
                }
                {
                    !isEditing &&
                    < Button content={deleteImg} style={style.btn_delete} />
                }
            </div>
        </div>
    );
}

export default WordComponent;