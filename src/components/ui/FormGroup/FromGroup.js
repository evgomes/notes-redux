import React from 'react';

import './FormGroup.css';

const FormGroup = (props) => {
    return (  
        <div className="formGroup">
            {props.children}
        </div>
    );
}
 
export default FormGroup;