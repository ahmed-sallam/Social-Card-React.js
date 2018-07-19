import React from 'react';
import './TextContainer.css'

const TextContainer = (props) =>{
    return(
        <div className="TextContainer">
            <p>{props.text}</p>
        </div>
    );
}

export default TextContainer;