import React from 'react';
import '../../styles/main-content.css';
import Comment from '../shared/comment';

const MainContent = ({ comments = [] }) => {
    return (
        <div className='main-content'>
					{
						comments && comments.length
						?
						comments.map((comment, index) => <Comment comment={comment.comment} index={index}/>)            
						:
						<div className="empty-comments">
							<h3>NO EXISTEN COMENTARIOS</h3>
					</div>
					}
        </div>
    )
}

export default MainContent;
