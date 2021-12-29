import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

const Likes = ({ imageId, onLike, isLiked, likes}) => {
    return (
        <div className='likes'>
            <button onClick={() => onLike(imageId)}>
                <FontAwesomeIcon
                    className={
                        classNames({
                            'like-icon': true,
                            'is-liked': isLiked
                        })
                    }
                    icon={faHeart} />
            </button>
            <span>{likes}</span>
        </div>
    )
}

export default Likes;