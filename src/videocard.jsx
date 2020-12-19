import React from 'react';
import './videocard.css';

function videocard(props) {
    return (
        <div className="videocard">
            <img className="videocard_thumbnail" src={props.img} alt=""></img>
            <div className="videocard_title">
                <img className="videocard_avatar" src={props.avatar} alt=""/>
                <h4>{props.title}</h4>
            </div>
            <div className="videocard_info">
                <h4>{props.channel}</h4>
                <p>{props.views} - {props.timestamp}</p>
            </div>
        </div>
    )
}

export default videocard;
