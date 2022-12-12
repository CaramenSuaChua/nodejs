import Navbar from "../navbar/Navbar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Register = () => {
    const navigate = useNavigate()
    // const [user, setUser] = useState('')
    const [input, setInput] = useState({
        username: '',
        password : '',

    })
    
    const handleSubmit = (e) => {
        axios.post('http://localhost:5000/register', input)
        .then(res => alert(res.data.message))
        navigate('/login')
    }
    return (
        <div>
            <Navbar /> 
            <div style={{margin:"10em 50em 20em 45em ", }} type='POST'>
                <h1 style={{paddingBottom:'25px', textAlign:'center'}}>SIGN UP</h1>
               <div>
                    <label style={{paddingLeft : '120px', fontWeight:'bold'}}>
                        Username:
                    </label>
               </div>
               <input type="text" name="name" style={{marginLeft : '20px', marginTop:'20px',width:'280px', height:'30px', borderRadius:'5px'}}
               onChange={e => setInput({...input, username : e.target.value})}/>
                <div style = {{marginTop : '2em'}}>
                <label style={{paddingLeft : '127px', fontWeight:'bold'}}>
                        Password :
                    </label>
                </div>
                <input type='password' name ='password' style={{marginLeft : '20px',marginTop:'20px', width:'280px', height:'30px', borderRadius:'5px'}} 
                onChange={e => setInput({...input, username : e.target.value})}/>
                <div>
                    <button type="submit" onClick={() => handleSubmit()} style={{backgroundColor:'blue', borderRadius:'5px',fontSize:'20px',
                    color:'white',fontWeight:'bold',marginLeft : '20px', marginTop : '25px', height:'40px',width:'290px'}}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Register