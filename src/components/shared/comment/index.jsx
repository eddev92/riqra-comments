import React from 'react';
import '../../../styles/comment.css';

const Comment = ({ comment, index }) => {
    return (
        <div key={index} className={`main-comment comment-${index}`}>
            {comment}
        </div>
    )
}

export default Comment;
