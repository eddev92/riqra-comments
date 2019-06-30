import React from 'react';
import '../../../styles/header.css';

const Header = ({ toggleAddComment = () => {} }) => {
    return (
        <div className='main-header'>
            <button onClick={toggleAddComment}>Agregar comentario</button>
        </div>
    )
}

export default Header;
