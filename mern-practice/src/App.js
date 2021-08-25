import React, { useEffect, useState } from 'react';
import './App.css';
import Routings from './routings/routings';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState();
    useEffect(() => {
        setIsLoading(false);
        const userToken = localStorage.getItem('token');
        console.log(userToken, 'uu');
        if (userToken) setUserToken(userToken);
    }, []);

    return (
        <div className="App">
            {isLoading ? (
                <div>loading....</div>
            ) : (
                <Routings userToken={userToken} />
            )}
        </div>
    );
}

export default App;
