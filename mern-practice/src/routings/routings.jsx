import React from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Landingpage from "../page/Landingpage";
import SignupScreen from "../page/SignupScreen";
import LoginScreen from "../page/LoginScreen";
import EmployeeScreen from "../page/EmployeeScreen";
import ProtectedRoute from "./ProtectedRoute";

export default function Routings({ userToken }) {
    console.log(userToken, "usertoken");
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Landingpage} />
                    <Route path="/signup" exact component={SignupScreen} />

                    <ProtectedRoute
                        path="/login"
                        exact
                        component={LoginScreen}
                        userToken={!userToken}
                        redirection="/employee"
                    />
                    <ProtectedRoute
                        path="/employee"
                        exact
                        component={EmployeeScreen}
                        userToken={userToken}
                        redirection="/login"
                    />
                </Switch>
            </Router>
        </div>
    );
}
