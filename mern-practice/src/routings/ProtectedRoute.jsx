import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function ProtectedRoute({
    userToken: userToken,
    component: Component,
    redirection,
    ...rest
}) {
    console.log(userToken, "token");
    return (
        <>
            <Route
                {...rest}
                render={(props) => {
                    if (userToken) {
                        return <Component />;
                    } else {
                        return (
                            <Redirect exact to={{ pathname: redirection }} />
                        );
                    }
                }}
            />
        </>
    );
}
