import React from 'react';
import '../../../styles/header.css';

const Header = ({ toggleAddComment = () => {}, addComment }) => {
    return (
        <div className='main-header'>
            <button onClick={toggleAddComment}>
              {
                addComment
                ?
                'Ocultar comentario'
                :
                'Agregar comentario'
                
              }
              </button>
        </div>
    )
}

export default Header;
