import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { postData } from '../commonApi/commonApi';
import { signupApi } from '../commonApi/Link';
import CardView from '../components/CardView';
import './css/SignupScreen.css';

export default function SignupScreen() {
    const [counter, setCounter] = useState(0);
    const [employeeData, setEmployeeData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phone: '',
    });
    const [message, setMessage] = useState();

    // const handleCounterClick = (command) => {
    //     if (command === 'add') {
    //         setCounter(counter + 1);
    //     } else if (command === 'subtract') {
    //         setCounter(counter - 1);
    //     }
    // };

    // useEffect(() => {
    //     async function getApi() {
    //         const data = await axios
    //             .get('http://localhost:8000/employee/read')
    //             .then((response) => {
    //                 return response;
    //             });

    //         setEmployeeData(data.data.data);
    //         console.log(data.data.data);
    //     }
    //     getApi();
    // }, []);

    // const displayData =
    //     employeeData &&
    //     employeeData.map((employee) => {
    //         return (
    //             <CardView key={employee.id}>
    //                 <div>{employee.employeeName}</div>
    //                 <div>{employee.phone}</div>
    //                 <div>{employee.address}</div>
    //                 <div>{new Date(employee.date).toLocaleString()}</div>
    //             </CardView>
    //         );
    //     });

    const onChangehanalder = (e) => {
        setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
    };
    const onHandleSubmit = (e) => {
        e.preventDefault();
        console.log(employeeData);
        postData(
            signupApi,
            employeeData,
            (onSuccess) => {
                setMessage(onSuccess.msg);
                setEmployeeData({
                    ...employeeData,
                    firstname: '',
                    lastname: '',
                    password: '',
                    phone: '',
                    email: '',
                });
            },
            (onFail) => {
                setMessage(onFail.msg);
            }
        );
    };

    return (
        <div className="main-container">
            <div className="sub-container">
                <form onSubmit={onHandleSubmit}>
                    <h3>Register</h3>

                    <div className="form-group">
                        <label>First name</label>
                        <input
                            type="text"
                            name="firstname"
                            className="form-control"
                            placeholder="First name"
                            value={employeeData.firstname}
                            onChange={(e) => onChangehanalder(e)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input
                            type="text"
                            name="lastname"
                            className="form-control"
                            placeholder="Last name"
                            value={employeeData.lastname}
                            onChange={(e) => onChangehanalder(e)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={employeeData.email}
                            onChange={(e) => onChangehanalder(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input
                            type="text"
                            name="phone"
                            className="form-control"
                            placeholder="Enter phone"
                            value={employeeData.phone}
                            onChange={(e) => onChangehanalder(e)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={employeeData.password}
                            onChange={(e) => onChangehanalder(e)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-dark btn-lg btn-block"
                    >
                        Register
                    </button>
                    <p className="forgot-password text-right">
                        Already registered <a href="/login">log in?</a>
                    </p>
                    <div>{message}</div>
                </form>
            </div>
        </div>
    );
}
