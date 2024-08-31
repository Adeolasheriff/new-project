import React from 'react'
import Header from '../layout/header'
import { Link } from 'react-router-dom'
export default function Login() {
    return (
        <div className='bg-success'>
            <Header />
            <div className='d-flex justify-content-center align-items-center'>
                <div className='p-3 rounded  bg-white'>
                    <h4 className='fst-italic text-success'>Login to your Account</h4>
                    <h6 className='text-success'>Enter your username and password to login</h6>
                    <div>
                        <form action="">
                            <div className='mt-3'>
                                <label htmlFor="username" className='mt-2'>Your Username</label> <br />
                                <input type="text" className='w-100' required />
                            </div>

                            <div className='mt-3'>
                                <label htmlFor="pasword" className='mt-2'>Your Password</label> <br />
                                <input type="password" className='w-100' required />
                            </div>

                            <div className='mt-3 d-flex gap-3'>
                                <input type="checkbox" required />
                                <h6 className='mt-2'>Remember me</h6>
                            </div>
                            <button className='btn btn-primary w-100 mt-4'>Login</button>
                        </form>

                        <div className='d-flex mt-2 gap-2'>
                            <p>Dont have an account yet ?</p>
                            <Link className='text-primary text-decoration-none' to={'/register'}>Create Account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
