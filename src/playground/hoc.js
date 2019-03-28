// HIGHER ORDER COMPONENT
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please don't share!</p> }
            <WrappedComponent { ...props } />
        </div>
    )
}

const requireAuthenticaiton = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? ( <WrappedComponent { ...props } /> ) : ( <p>You're not logged in as Admin!</p> ) }
            
        </div>
    )
}

//requireAuthentication
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthenticaiton(Info);


// ReactDOM.render(<AdminInfo isAdmin={ true } info="Info Details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={ false } info="Info Details" />, document.getElementById('app'));