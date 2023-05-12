import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const getToken=()=>{
        const userToken = JSON.parse(sessionStorage.getItem('token'));
        return userToken;
    }


    const getUser=()=>{
        const userDetails = JSON.parse(sessionStorage.getItem('user'));
        return userDetails;
    }

    const[Email,Setemail] = useState();
    const[Password,Setpassword] = useState();
    const[Token,Settoken]=useState(getToken());
    const[User,Setuser]=useState(getUser());
    const navigate = useNavigate();

    const saveToken=(token,user)=>{
        sessionStorage.setItem('token',JSON.stringify(token));
        sessionStorage.setItem('user',JSON.stringify(user));
        Settoken(token);
        Setuser(user);
        navigate('/dashboard');
    }


    const submit=async()=>{
        await axios.post('http://127.0.0.1:8001/api/login',{email:Email,password:Password}).then((res)=>{
            saveToken(res.data.access_token,res.data.user);
        })
    }

        
    return (
        <div className='row justify-content-center pt-5'>
            <div className='col-sm-6'>
                <div className='card p-4'>

                    <div className="form-group mt-3">
                        <label>Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter email" id="email" onChange={e=>(Setemail(e.target.value))}/>
                    </div>
                    <div className="form-group mt-3">
                        <label>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password" id="pwd" onChange={e=>(Setpassword(e.target.value))}/>
                    </div>

                    <button type="button" className="btn btn-primary mt-3" onClick={submit}>Submit</button>

                </div>
            </div>
        </div>
    )
}

export default Login
