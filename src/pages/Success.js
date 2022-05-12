import React from 'react'
import { useNavigate } from "react-router-dom";
const Success = () => {
    const navigate=useNavigate()
  return (
    <div className='my-5 py-5' >
        <h1 className="bg-transparent text-success">Your password has been changed successfully</h1>
        <button
            type="button"
            className="btn btn-link mx-3"
            onClick={() => navigate("/login")}
          >
            Go to Login
          </button>
    </div>
  )
}

export default Success