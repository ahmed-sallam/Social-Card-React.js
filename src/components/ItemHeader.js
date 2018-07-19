import React from 'react';
import './ItemHeader.css'

const ItemHeader = (props) =>{
    return(
        <div>
            <a className="account-group " href="#">
            <img className="profile-avatar" src={props.profileavata}/>
            <span className="user-full-name">{props.userfullname} </span>
            <span className="username">{`@${props.username}`}</span>
            </a>
            <a href="#">
            <span className="time">{` - ${props.time}`}</span>
            </a>
            <a href="#">
            <span className="options"> 
                <i className="fas fa-angle-down "></i> </span>
            </a>
        </div>
    );
}

export default ItemHeader;