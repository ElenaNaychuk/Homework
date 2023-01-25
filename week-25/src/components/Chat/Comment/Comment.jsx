import { useEffect } from 'react';
import style from './comment.module.scss'

function Comment({ comment }) {
    return (
        <li className={style.comment}>{comment}</li>
    );
}

export default Comment;