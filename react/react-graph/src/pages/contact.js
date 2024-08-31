import React from 'react'
import Header from '../layout/header'
import { Clock, Email, Location, Phone } from '../icons/icon'


export default function Contact() {
    return (
        <div style={{ background: '#e1f5fe', paddingBottom: "8.8%" }}>
            <Header />
            <div className='container'>
                <h3 className='text-center text-primary fst-italic mt-3 mb-3'>Contact</h3>
                <div className="row row-gap-5">
                    <div className="col-sm-12 col-lg-6 col-md-12">
                        <div className="row row-gap-5 ms-5">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="bg-white p-3" style={{ width: "80%" }}>
                                    <div className='text-center'>
                                        <Location />
                                        <h6>Address</h6>
                                        <h6 className='fst-italic'> LAGOS ,NIGERIA</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="bg-white p-3" style={{ width: "80%" }}>
                                    <div className='text-center'>
                                        <Phone />
                                        <h6>Call or Text</h6>
                                        <h6 className='fst-italic'>+234 8148754569</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6 ">
                                <div className="bg-white p-3" style={{ width: "80%" }}>
                                    <div className='text-center'>
                                        <Email />
                                        <h6>Email</h6>
                                        <h6 className='fst-italic'>adeolasheriff3@gmail.com</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="bg-white p-3" style={{ width: "80%" }}>
                                    <div className='text-center'>
                                        <Clock />
                                        <h6>Open hours</h6>
                                        <h6 className='fst-italic'>Mon-sun</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6 col-md-12">

                        <form action="/contact">
                            <div className='bg-white p-5'>
                                <div className='d-flex gap-4 mb-4' style={{flexWrap:'wrap'}}>
                                    <input type="text" placeholder='Name' className='w-100' required />
                                    <input type="email" placeholder='Your email' className='w-100 pb-3 mt-2' required />
                                </div>
                                   <input type="text" placeholder='Subject' className='w-100 mt-3 pb-2' required />

                                   <input type="text" placeholder='message' className='w-100 mt-5 pb-5' required />

                                   <button className='btn btn-success rounded mt-5' style={{width:"100%"}}> Send messages</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
            <hr />
            <h3 className='fst-italic text-info mt-5 text-center'>Adeola Sheriff Adewale</h3>
        </div>
    )
}
