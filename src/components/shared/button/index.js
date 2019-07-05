import React from 'react';

const Button = ({ saveComment = () => {} }) => {
  return ( 
    <button className='main-comment--button' onClick={saveComment}>Comentar!</button>
  )
}

export default Button;
