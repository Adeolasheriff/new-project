import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfound() {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ background: '#e1f5fe'}}>
        <div className='p-3 w-50 rounded'>
         <div>
         <h1 className='text-center' style={{fontSize:'35px',color:"purple"}}>404</h1>
           <h4 className='mb-4' style={{color:"purple"}}>The page you are looking for doesnt exist</h4>
            <Link className='btn btn-warning text-decoration-none text-white ms-5 rounded' to={'/dashboard'}>Back to home</Link>
         </div>
            <img src="images/pro.PNG" alt="imag"  width={'100%'} height={'100% '}/>
            <h4>hffhfhhfh</h4>
        </div>
    </div>
  )
}
