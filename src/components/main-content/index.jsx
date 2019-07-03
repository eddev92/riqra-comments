import React from 'react';
import '../../styles/main-content.css';
import Comment from '../shared/comment';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const MainContent = ({ deleteComment = () => {} }) => {
	console.log('IMPLEMENTACION DE QUERY PARA LSITA DE COMENTARIOS')
    return (
			<Query 
				query={gql`
					{
						comments {
							comment
						}
					}
				`}
				>
				
					{
						({ loading, error, data }) => {
							if (loading) return <p>Loading...</p>;
							if (error) return <p>Error :(</p>;
							if (data.comments && data.comments.length === 0) return (
								<div className='main-content'>
										<div className="empty-comments">
											<h3>NO EXISTEN COMENTARIOS</h3>
									</div>
								</div>
							)
								return (
									<div className='main-content'>
										{
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
