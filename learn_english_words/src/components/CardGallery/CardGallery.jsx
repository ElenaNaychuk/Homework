import style from './cardGallery.module.scss';
// import leftBtnImg from './assets/images/icons8-двойная-стрелка-влево-50.png'
// import rightBtnImg from './assets/images/icons8-двойная-стрелка-вправо-50.png'
import WordCard from '../WordCard/WordCard.jsx';
import { useState } from 'react';
import Button from '../WordComponent/Button/Button';

function CardGallery({ words, ...props }) {
    const [clicked, setClick] = useState(props.clicked || false);
    const handelClick = () => {
        setClick(true);
    }

    const [cardIndex, setIndexCard] = useState(0);
    const showPreviousCard = () => {
        if (cardIndex === 0) {
            setIndexCard(words.length - 1)
        } else {
            setIndexCard(cardIndex - 1)
        }
        setClick(false);
    }

    const showNextCard = (words) => {
        if (cardIndex === words.length - 1) {
            setIndexCard(0)
        } else {
            setIndexCard(cardIndex + 1)
        }
        setClick(false);
    }

    return (
        <div>
            <div className={style.container}>
                <Button
                    function={showPreviousCard}
                    className={style.btn}
                    src='./assets/images/icons8-двойная-стрелка-влево-50.png'
                />
                <WordCard
                    handelClick={handelClick}
                    english={words[cardIndex].english}
                    transcription={words[cardIndex].transcription}
                    id={words[cardIndex].id}
                    russian={words[cardIndex].russian}
                    clicked={clicked}
                />
                <Button
                    function={showNextCard}
                    className={style.btn}
                    src='./assets/images/icons8-двойная-стрелка-вправо-50.png'
                />
            </div>
            <div className={style.card_number}>{cardIndex + 1} / {words.length}</div>
        </div>
    );
}

export default CardGallery;