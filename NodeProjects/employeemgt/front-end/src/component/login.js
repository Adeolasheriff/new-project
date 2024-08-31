import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const naviagte = useNavigate('')

  axios.defaults.withCredentials = true;

  const handlesubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8082/auth/login', { email, password })
      // .then(res => {
      //   console.log(res)
      //   naviagte('/')
      // })
      // .catch(err => console.log(err))
      .then(res => {
        if (res.data.status) {
          naviagte('/')
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='d-flex vh-100 justify-content-center bg-primary align-items-center'>
      <div className='bg-white rounded p-4 w-50'>
        <form onSubmit={handlesubmit}>
          <h2>Login</h2>
          <div className='mt-2'>
            <label htmlFor="email">email</label>
            <input type="email" placeholder='enter your email' name='email' className='form-control rounded-0'
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='mt-2'>
            <label htmlFor="password">password</label>
            <input type="password" placeholder='******' name='password' className='form-control rounded-0'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='submit btn btn-success mt-2 rounded-0 w-100'>Login</button>
          <Link to={'/forgot-password'}>Forget password ?</Link>
          <p>Have an account ?</p>
          <Link to={'/signup'} className='btn btn-default border w-100 bg-light text-decoration-none mt-2 rounded-0 w-100'>Sign up</Link>
        </form>

      </div>
    </div>
  )
}

export default Login