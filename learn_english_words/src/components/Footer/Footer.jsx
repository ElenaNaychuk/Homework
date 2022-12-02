import style from './footer.module.scss';

function Footer() {
    return (
        <footer className={style.container}>
            <button className={`${style.learned_words} ${style.block_navigation}`}>Выученные</button>
            <button className={`${style.categories} ${style.block_navigation}`}>Категории</button>
            <button className={`${style.words_list} ${style.block_navigation}`}>Список слов</button>
        </footer>
    );
}

export default Footer;