import React from 'react';
import { Query, Mutation  } from "react-apollo";
import { POST_COMMENT } from '../../../constants/queries';

const Button = ({ comment = '', saveComment = () => {} }) => {
  if (comment) console.log('agregado')
  return (            
      <Query  
      query={POST_COMMENT}
      variables={{comment}}
      skip={!comment}
      >
        {({loading, error, data}) => {
          if (error) {
            console.log(error, 'ERROR')
          }
          if (data) {
            console.log(data, 'DATA')
          }
          if (true) return <button className='main-comment--button' onClick={saveComment}>Comentar!</button>
        }}
    </Query >
  )
}

export default Button;
