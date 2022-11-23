import style from './tariffCard.module.scss';
import * as classnames from 'classnames';

function TariffCard(props) {
    const className = classnames(
        style.tariff_card,
        {
            [style.main_card]: props.cardSize,
        },
        {
            [style.color_blue]: props.colorBlue,
        },
        {
            [style.color_green]: props.colorGreen,
        },
        {
            [style.color_red]: props.colorRed,
        },
        {
            [style.color_black]: props.colorBlack,
        },
    );
    return (
        <div className={className}>
            <div className={style.title}>Безлимитный {props.tariff}</div>
            <div className={style.price}><span className={style.price_currency}>руб </span><span className={style.price_cost}>{props.monthlyPrice}</span><span className={style.month}> /мес</span></div>
            <div className={style.speed}>до {props.internetSpeed} Мбит/сек</div>
            <div className={style.text}>{props.text}</div>
        </div >
    );
}

export default TariffCard;