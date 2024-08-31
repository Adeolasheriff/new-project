import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Forgetpassword() {
    const [email, setEmail] = useState('')
    const naviagte = useNavigate('')

    axios.defaults.withCredentials = true;
    const handlesubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8082/auth/forgot-password', { email })
            // .then(res => {
            //   console.log(res)
            //   naviagte('/')
            // })
            // .catch(err => console.log(err))
            .then(res => {
                if (res.data.status) {
                    alert('check your email for password reset link')
                    naviagte('/login')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='d-flex vh-100 justify-content-center bg-primary align-items-center'>
            <div className='bg-white rounded p-4 w-50'>
                <form onSubmit={handlesubmit}>
                    <h2>Forget password</h2>
                    <div className='mt-2'>
                        <label htmlFor="email">email</label>
                        <input type="email" placeholder='enter your email' name='email' className='form-control rounded-0'
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button className='submit btn btn-success mt-2 rounded-0 w-100'>send</button>
                </form>

            </div>
        </div>
    )
}

export default Forgetpassword