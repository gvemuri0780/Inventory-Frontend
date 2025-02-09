import axios from 'axios';
import React from 'react';
import { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

const StoreOwnerLoginForm = () => {

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [authMessage, setAuthMmeassage] = useState('');

    const handleOnClick = async (e) => {
        e.preventDefault();
        try
        {
            const response = await axios.post('http://localhost:8080/login/storeowner',{userName: userId, password: password, domain: 'storeowner'});
            navigate('/StoreOwnerDashboard');
            console.log(response.data);
            setAuthMmeassage(<h2>Login Successful</h2>);
        }
        catch(e)
        {
            console.log(e);
            setAuthMmeassage(<h2 style={{color : 'red'}}>Login failed!!</h2>);            
        }
    }

    return(
        <div>
            <h1>Store Owner Login</h1>
            {authMessage}
            <form onSubmit={handleOnClick}>
                <label>
                    User ID : 
                    <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
                </label>
                <br/>
                <br/>
                <label>
                    Password : 
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br/>
                <br/>
                <button type="submit" >Login</button>
            </form>
        </div>
    )

}

export default StoreOwnerLoginForm;

