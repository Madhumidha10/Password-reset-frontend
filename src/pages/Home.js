import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate()
  return (
 <section className='align-middle justify-content-center py-5 my-5' >
     <h1 className='text-light '>Welcome to PassReset</h1>
     <div className='d-flex justify-content-left py-5'>
  
  <button type="button" className="btn btn-outline-primary mx-2" onClick={()=>navigate('./login')}>Login</button>
<button type="button" className="btn btn-outline-primary mx-2" onClick={()=>navigate('./signup')}>Signup</button>
  </div>
 </section>
   


  )
}

export default Home