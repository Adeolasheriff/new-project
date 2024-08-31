import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
function  Resetpassword() {
    const [password, setPassword] = useState('')
    const {token} = useParams()
    const naviagte = useNavigate('')

    axios.defaults.withCredentials = true;
    const handlesubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8082/auth/reset-password/',+token, {password})
        .then(res => {
            console.log(res)
            naviagte('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='d-flex vh-100 justify-content-center bg-primary align-items-center'>
            <div className='bg-white rounded p-4 w-50'>
                <form onSubmit={handlesubmit}>
                    <h2>Reset password</h2>
                    <div className='mt-2'>
                        <label htmlFor="email">password</label>
                        <input type="password" placeholder='*********' name='email' className='form-control rounded-0'
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className='submit btn btn-success mt-2 rounded-0 w-100'>reset</button>
                </form>

            </div>
        </div>
    )
}

export default Resetpassword