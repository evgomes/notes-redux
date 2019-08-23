import React, {Fragment} from 'react';

import Header from '../../components/layout/Header/Header';

import './Layout.css';

const Layout = (props) => {
    return (  
        <Fragment>
            <Header />
            <main>
                {props.children}
            </main>
        </Fragment>
    );
}
 
export default Layout;