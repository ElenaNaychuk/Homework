import { useState } from 'react';
import Comment from './Comment/Comment';
import style from './chat.module.scss';
import { useRef } from 'react';
import { useEffect } from 'react';

const initialeState = ['My first comment'];

function Chat() {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState(initialeState);

    const commentInput = useRef(null);
    useEffect(() => { commentInput.current.focus() }, [comment])

    const handleCommentChange = (e) => {
        const userComment = e.target.value;
        setComment(userComment);
    };

    function checkSpam(comment) {
        return comment.replace(/viagra/g, '***');
    }

    const addComment = () => {
        if (comment != '') {
            const userComment = checkSpam(comment);
            setComments([userComment, ...comments]);
            setComment('');
        }
    }

    return (
        <>
            <h4>Практическое задание Chat</h4>
            <div className={style.chat__container}>
                <h3>Chat</h3>
                <ul className={style.chat__commentList}>
                    {comments.map((comment, index) =>
                        <Comment
                            key={index}
                            comment={comment}
                        />
                    )}
                </ul>
                <p className={style.chat__text}>Добавить комментарий:</p>
                <textarea
                    className={style.chat__inputComment}
                    onChange={handleCommentChange}
                    value={comment}
                    ref={commentInput}
                >
                </textarea>
                <button
                    className={style.chat__btn}
                    onClick={addComment}
                >
                    Отправить
                </button>
            </div>
        </>
    );
}

export default Chat;