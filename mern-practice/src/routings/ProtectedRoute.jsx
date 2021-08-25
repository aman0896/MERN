import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function ProtectedRoute({
    userToken: userToken,
    component: Component,
    ...rest
}) {
    return (
        <>
            {console.log(userToken, 'token')}
            <Route
                {...rest}
                render={(props) => {
                    if (userToken) {
                        return <Component />;
                    } else {
                        return <Redirect exact to={{ pathname: '/login' }} />;
                    }
                }}
            />
        </>
    );
}
