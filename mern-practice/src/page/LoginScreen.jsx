import React, { useState } from 'react';
import { postData } from '../commonApi/commonApi';
import { loginApi } from '../commonApi/Link';
import './css/LoginScreen.css';

export default function LoginScreen() {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    const [message, setMessage] = useState();

    const onChangehandler = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };
    const onHandleSubmit = (e) => {
        e.preventDefault();
        postData(
            loginApi,
            loginData,
            (onSuccess) => {
                if (onSuccess.token) {
                    setMessage(onSuccess.msg);
                    localStorage.setItem('token', onSuccess.token);
                    window.location.href = '/employee';
                }
            },
            (onFail) => setMessage(onFail.msg)
        );
    };
    return (
        <div className="login-main-container">
            <div className="login-sub-container">
                <form onSubmit={onHandleSubmit}>
                    <h3>Login</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={(e) => onChangehandler(e)}
                            value={loginData.email}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={(e) => onChangehandler(e)}
                            value={loginData.password}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-dark btn-lg btn-block"
                    >
                        Login
                    </button>
                    <p className="forgot-password text-right">
                        Don't have an account? <a href="/signup">signup?</a>
                    </p>
                    <div>{message}</div>
                </form>
            </div>
        </div>
    );
}
