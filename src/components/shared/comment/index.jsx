import React from 'react';
import '../../../styles/comment.css';

const Comment = ({ comment, index, deleteComment = () => {} }) => {
    return (
        <div key={index} className={`main-comment comment-${index}`}>
          <i className="material-icons main-comment--icon-close" onClick={deleteComment.bind(this, comment, index)}>highlight_off</i>
          <h6 className='main-comment--content'>{comment}</h6>
        </div>
    )
}

export default Comment;
