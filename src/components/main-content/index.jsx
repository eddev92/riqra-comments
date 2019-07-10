import React from 'react';
import '../../styles/main-content.css';
import Comment from '../shared/comment';

const MainContent = ({  comments = [], deleteComment = () => {} }) => {
	if (comments && comments.length > 0) {
		return (			
			<div className='main-content'>
				{
					comments.map((comment, index) => <Comment comment={comment.comment} index={index} deleteComment={deleteComment}/>)
				}
			</div>
		)
	}
	return (
		<div className='main-content'>
			<div className="empty-comments">
				<h3>NO EXISTEN COMENTARIOS</h3>
			</div>
		</div>
	)
}

export default MainContent;
