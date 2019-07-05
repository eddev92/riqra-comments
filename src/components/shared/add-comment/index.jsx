import React from 'react';
import '../../../styles/add-comment.css';
import Button from '../button';

const AddComment = ({ addComment = false, handleComment = () => {}, comment = '', saveComment = () => {} }) => {
  return(
      <div className={`main-comment ${addComment ? 'main-comment--activate-yes' : 'main-comment--activate-no'}`}>
        <div className='row'>
          <div className='col-6'>
            <textarea className='main-comment--comment-content' name="" id="" cols="25" rows="2" value={comment} onChange={handleComment}/>
          </div>
          <div className='col-6'>            
           <Button comment={comment} saveComment={saveComment} />
          </div>
        </div>
      </div>
  )
}

export default AddComment;
