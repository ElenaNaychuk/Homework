import style from './tariffCard.module.scss';
import * as classnames from 'classnames';
import { useState } from 'react';

function TariffCard(props) {
    const className = classnames(
        style.tariff_card,
        {
            [style.color_blue]: props.colorBlue,
            [style.color_green]: props.colorGreen,
            [style.color_red]: props.colorRed,
            [style.color_black]: props.colorBlack,
        },
    );
    // const [clicked, setClick] = useState(props.clicked || false)
    const handleClick = () => {
        props.toggleState();
    };
    const newClass = props.isActive ? style.main_card : '';
    console.log(props.isActive);
    console.log(style);
    return (
        <div onClick={handleClick} className={`${className} ${newClass}`} id={props.id}>
            <div className={style.title}>Безлимитный {props.tariff}</div>
            <div className={style.price}><span className={style.price_currency}>руб </span><span className={style.price_cost}>{props.monthlyPrice}</span><span className={style.month}> /мес</span></div>
            <div className={style.speed}>до {props.internetSpeed} Мбит/сек</div>
            <div className={style.text}>{props.text}</div>
        </div >
    );
}

export default TariffCard;