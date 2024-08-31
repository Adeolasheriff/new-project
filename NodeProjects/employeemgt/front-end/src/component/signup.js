import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Signup() {
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const naviagte = useNavigate('')

       const handlesubmit = (e) => {
         e.preventDefault()
         axios.post('http://localhost:8082/auth/signup',{username,email,password})
         .then(res =>{
             console.log(res)
             naviagte('/login')
            })
         .catch(err => console.log(err))
       }
       
    return (
        <div className='d-flex vh-100 justify-content-center bg-primary align-items-center'>
            <div className='bg-white rounded p-4 w-50'>
                <form onSubmit={handlesubmit}>
                    <h2>Sign up</h2>
                    <div className='mt-2'>
                        <label htmlFor="Username">Username</label>
                        <input type="text" placeholder='enter your username' name='username' className='form-control rounded-0'
                         onChange={(e)=> setUsername(e.target.value)} />
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="email">email</label>
                        <input type="email" placeholder='enter your email' name='email' className='form-control rounded-0'
                         onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="password">password</label>
                        <input type="password" placeholder='******' name='password' className='form-control rounded-0'
                        onChange={(e)=> setPassword(e.target.value)}
                         />
                    </div>
                    <button className='submit btn btn-success mt-2 rounded-0 w-100'>Signup</button>
                    <p>Have an account ?</p>
                    <Link to={''} className='btn btn-default border w-100 bg-light text-decoration-none mt-2 rounded-0 w-100'>Login</Link>
                </form>

            </div>
        </div>
    )
}

export default Signup