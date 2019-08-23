import React from 'react';

import './CardHeader.css';

const CardHeader = (props) => {
    return (  
        <div className="card-header">
            <h2 className="card-title">{props.title}</h2>
        </div>
    );
}
 
export default CardHeader;