import React from 'react';

import './CardBody.css';

const CardBody = (props) => {
    return (  
        <div className="card-body">
            {props.children}
        </div>
    );
}
 
export default CardBody;