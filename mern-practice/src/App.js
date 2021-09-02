import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { getData, postData } from "./commonApi/commonApi";
import { verifyUser } from "./commonApi/Link";
import Routings from "./routings/routings";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(false);
    useEffect(() => {
        getData(
            verifyUser,
            {
                headers: { authorization: localStorage.getItem("token") },
            },
            (onSuccess) => {
                setUserToken(onSuccess.success);
                setIsLoading(false);
            },
            (onFail) => {
                console.log(onFail);
                console.log(onFail);
                setIsLoading(false);
            }
        );
    }, []);

    return (
        <div className="App">
            {isLoading ? (
                <div style={{ marginTop: "100px" }}>loading....</div>
            ) : (
                <Routings userToken={userToken} />
            )}
        </div>
    );
}

export default App;
