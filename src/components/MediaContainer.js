import React from 'react';
import './MediaContainer.css'

const MediaContainer = (props) =>{
    return(
        <div className="MediaContainer">
            <a href="#">
                <img className="media-img" src={props.mediaimg}/>
                <div className="media-content">
                    <h2 className="media-title">{props.mediatitle}</h2>
                    <p className="media-desc" >{props.mediadesc}</p>
                    <span className="media-link">{props.medialinktext}</span>
                </div>
            </a>
        </div>
    );
}

export default MediaContainer;