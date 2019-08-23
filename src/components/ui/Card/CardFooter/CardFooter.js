import React from 'react';

import './CardFooter.css';

const CardFooter = (props) => {
    return (  
        <div className="card-footer">
            {props.children}
        </div>
    );
}
 
export default CardFooter;