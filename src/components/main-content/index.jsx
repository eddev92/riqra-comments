import React from 'react';
import '../../styles/main-content.css';
import Comment from '../shared/comment';
import { Query } from "react-apollo";
import { GET_COMMENTS } from '../../constants/queries';

const MainContent = ({  comments = [], deleteComment = () => {} }) => {
	if (comments.length > 0) {
		return (
			
			<div className='main-content'>
				{
					comments.map((comment, index) => <Comment comment={comment.comment} index={index} deleteComment={deleteComment}/>)
				}
			</div>
		)
	}
	return null
    // return (
		// 	<Query 
		// 		query={GET_COMMENTS}
		// 		>				
		// 			{
		// 				({ loading, error, data }) => {
		// 					if (loading) return <p>Loading...</p>;
		// 					if (error) return <p>Error :(</p>;
		// 					if (true) return (
		// 					<div className='main-content'>
		// 					{
		// 						(!(data.comments && data.comments.length)) 
		// 						?
		// 						(
		// 							<div className="empty-comments">
		// 								<h3>NO EXISTEN COMENTARIOS</h3>
		// 							</div>
		// 						)
		// 							:
		// 							// (comments.length > 0)
		// 							// ?
		// 							// comments.map((comment, index) => <Comment comment={comment.comment} index={index} deleteComment={deleteComment}/>)
		// 							// :
		// 							data.comments.map((comment, index) => <Comment comment={comment.comment} index={index} deleteComment={deleteComment}/>)
		// 					} 
		// 						</div>
		// 					)
		// 				}						
		// 			}
		// </Query>
    // )
}

export default MainContent;
