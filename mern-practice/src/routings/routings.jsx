import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Landingpage from '../page/Landingpage';
import SignupScreen from '../page/SignupScreen';
import LoginScreen from '../page/LoginScreen';
import EmployeeScreen from '../page/EmployeeScreen';
import ProtectedRoute from './ProtectedRoute';

export default function Routings({ userToken }) {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Landingpage} />
                    <Route path="/signup" exact component={SignupScreen} />
                    <Route path="/login" exact component={LoginScreen} />
                    <ProtectedRoute
                        path="/employee"
                        exact
                        component={EmployeeScreen}
                        userToken={userToken}
                    />
                </Switch>
            </Router>
        </div>
    );
}
