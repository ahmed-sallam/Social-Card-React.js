import React from 'react';
import './ItemFooter.css'

const ItemFooter = (props) =>{
    return(
        <div className="ItemFooter">
        <a className="item-comment hblue" href="#">
            <i className="far fa-comment"></i>
            {props.comment}
        </a>
        <a className="item-comment hgreen" href="#">
            <i className="fas fa-retweet"></i>
            {props.retweet}
        </a>
        <a className="item-comment hred" href="#">
            <i className="far fa-heart"></i>
            {props.like}
        </a>
        <a className="item-comment hblue" href="#">
            <i className="far fa-envelope"></i>
        </a>
        </div>
    );
}

export default ItemFooter;