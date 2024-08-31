import React from 'react'
import Header from '../layout/header'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div className='bg-success' style={{paddingBottom:'7.7%' }}>
            <Header />
            <div className='d-flex justify-content-center align-items-center'>
                <div className='p-3 rounded  bg-white'>
                    <h4 className='fst-italic text-success'>Create an Account / Register</h4>
                    <h6 className='text-success'>Enter your personal details to create an account</h6>
                    <div>
                        <form action="">
                            <div>
                                <label htmlFor="name" className='mt-2'>Your Name</label> <br />
                                <input type="text" className='w-100' required />
                            </div>

                            <div className='mt-3'>
                                <label htmlFor="email" className='mt-2'>Your Email</label> <br />
                                <input type="email" className='w-100' required />
                            </div>

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
                                <h6 className='mt-2'>I agree to the <b className='text-primary'>terms and condition</b></h6>
                            </div>
                            <button className='btn btn-primary w-100 mt-4'>Create Account</button>
                        </form>

                        <div className='d-flex mt-2 gap-2'>
                            <p>Already have an account ?</p>
                            <Link className='text-primary text-decoration-none' to={'/login'}>Log in</Link>
                        </div>
                    </div>
                </div>
            </div>
                <hr />
                <h4 className='text-success text-center mt-4'>Adeola Sheriff Adewale</h4>
        </div>
    )
}

