import React from 'react'
import './sidebar.css';



function sidebar(props) {
    return (
        <div className="sidebar_comp">
           <props.icon />
           <h2>{props.title}</h2>
        </div>
    );
}

export default sidebar;
