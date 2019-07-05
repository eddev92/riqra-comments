import React from 'react';
import '../../styles/main-content.css';
import Comment from '../shared/comment';
import { Query } from "react-apollo";
// import { gql } from "apollo-boost";
import { GET_COMMENTS } from '../../constants/queries';

const MainContent = ({ deleteComment = () => {} }) => {
    return (
			<Query 
				query={GET_COMMENTS}
				>				
					{
						({ loading, error, data }) => {
							if (loading) return <p>Loading...</p>;
							if (error) return <p>Error :(</p>;
							if (data.comments.length) return (
							<div className='main-content'>
							{
								(data.comments && data.comments.length === 0) 
								?
								(
									<div className="empty-comments">
										<h3>NO EXISTEN COMENTARIOS</h3>
									</div>
								)
									: 
									data.comments.map((comment, index) => <Comment comment={comment.comment} index={index} deleteComment={deleteComment}/>)
							} 
								</div>
							)
						}						
					}
		</Query>
    )
}

export default MainContent;
