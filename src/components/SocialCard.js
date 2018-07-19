import React, { Component } from 'react';
import './SocialCard.css';
import ItemHeader from './ItemHeader';
import MediaContainer from './MediaContainer';
import TextContainer from './TextContainer';
import ItemFooter from './ItemFooter';
const data={
    profileavata:"https://pbs.twimg.com/profile_images/671158644637962240/u4pVfrWv_bigger.jpg",
    userfullname:"Airbnb Engineering",
    username:"AibnbEng",
    time:"7h",
    text:"We're transitioning to server side rendering, delivering fully formed, server rendered web pages entirely in @nodejs.",
    mediaimg:"https://pbs.twimg.com/card_img/1019649434282491904/qz5ixqPc?format=jpg&name=600x314",
    mediatitle:"TwitterCard-title js-cardClick tcu-textEllipse--multiline",
    mediadesc:"As Airbnb builds more of its Frontend around Server Side Rendering, we took a look at how to optimize our server configurations to support…",
    medialinktext:"medium.com",
    comment:11,
    retweet:235,
    like:684
};
const SocialCard = () => {
    return(
        <div className="SocialCard">
            <ItemHeader profileavata={data.profileavata}
                        userfullname={data.userfullname}
                        username={data.username}
                        time={data.time}/>
            <TextContainer text={data.text}/>
            <MediaContainer mediaimg={data.mediaimg}
                            mediatitle={data.mediatitle}
                            mediadesc={data.mediadesc}
                            medialinktext={data.medialinktext}/>
            <ItemFooter comment={data.comment}
                        retweet={data.retweet}
                        like={data.like}/>
        </div>
    );
}
export default SocialCard;