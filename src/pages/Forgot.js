import React, { useState } from "react";
import { API } from "./API";
import { Navigate, useNavigate } from "react-router-dom";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  let msg = document.getElementById("msg");
  const handleSendEmail = (e) => {
    e.preventDefault();
    if(email!="")
    {
      msg.className="text-info"
      const sendMail = { email: email };
      fetch(`${API}/password-reset`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sendMail),
      }).then((res) => msg.innerText="Password reset link sent to your email account.")
  
   
  };
  }
  return (
    <section className="align-middle justify-content-center py-5 my-5">
      <h1 className="text-light my-3">Forgot Password?</h1>
      <p className="my-3 text-muted">
        To reset your password, please provide your emailid.
      </p>
      <form onSubmit={(e) => handleSendEmail(e)}>
        <div className="form-group w-100 text-light">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary my-2">
          Send Reset Instructions
        </button>
        <label id="msg" className="text-info"></label>
        <div className="d-flex position-static p-2">
          
          <button
            type="button"
            className="btn btn-link mx-3"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            type="button"
            className="btn btn-link mx-3"
            onClick={() => navigate("/signup")}
          >
            Register
          </button>
        </div>
      </form>
    </section>
  );
};

export default Forgot;
