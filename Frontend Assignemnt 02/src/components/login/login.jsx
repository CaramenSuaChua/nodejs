import Navbar from "../navbar/Navbar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const Login = () => {
    const [user, setUser] = useState('')
    const navigate = useNavigate()
    const [input, setInput] = useState({
        name: '',
        password : '',
    })
    
    const handleSubmit = (e) => {
        axios.post('http://localhost:5000/login', input)
        .then(res => {alert(res.data.message)
        if(res.data.message === 'Login Successfully') {
            navigate('/')
            setUser(input)
            localStorage.setItem('user', JSON.stringify(res.data.results));
        }})
    }
    
    return (
        <div>
            <Navbar user={user}/> 
            <div style={{margin:"10em 50em 20em 45em ", }}>
                <h1 style={{paddingBottom:'25px', textAlign:'center'}}>LOG IN</h1>
               <div>
                    <label style={{paddingLeft : '120px', fontWeight:'bold'}}>
                        Username:
                    </label>
               </div>
               <input type="text" name="name" style={{marginLeft : '20px', marginTop:'20px',width:'280px', height:'30px', borderRadius:'5px'}}
               onChange={e => setInput({...input, name : e.target.value})}/>
                <div style = {{marginTop : '2em'}}>
                <label style={{paddingLeft : '127px', fontWeight:'bold'}}>
                        Password :
                    </label>
                </div>
                <input type='password' name ='password' style={{marginLeft : '20px',marginTop:'20px', width:'280px', height:'30px', borderRadius:'5px'}} 
                onChange={e => setInput({...input, password : e.target.value})}/>
                <div>
                    <input type="submit" onClick={() => handleSubmit()} style={{backgroundColor:'blue', borderRadius:'5px',fontSize:'20px',
                    color:'white',fontWeight:'bold',marginLeft : '20px', marginTop : '25px', height:'40px',width:'290px'}}/>
                </div>
            </div>
        </div>
    )
}

export default Login