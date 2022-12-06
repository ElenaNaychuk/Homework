import style from './button.module.scss'

function Button(props) {
    return (
        <button onClick={props.function} className={`${style.btn} ${props.style}`} >{props.content}</button >
    );
}

export default Button;