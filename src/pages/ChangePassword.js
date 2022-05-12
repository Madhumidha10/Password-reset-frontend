import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "./API";
const ChangePassword = () => {
  const navigate = useNavigate();
  const { id, token } = useParams();
  const [pwd, setPwd] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let msg = document.getElementById("msg");
    if(pwd.length<5)
    {
    msg.innerText="Password Atleast 5 Character"
    }
    else
    {
      const newpass = { password: pwd };
      fetch(`${API}/password-reset/${id}/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newpass),
      }).then((res) =>navigate("/success")).catch((res)=>msg.innerText="Invalid link or expired.")
 
    }
    
  };

  return (
    <section className="align-middle justify-content-center py-5 my-5">
      <h1 className="text-light my-3">Change Password</h1>
    <form onSubmit={(e) => handleSubmit(e)} >
      <label id="msg" className="text-danger"></label>
      <div className="form-group text-light">
        <label htmlFor="password">New Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary my-2">
        Change
      </button>
    </form>
    </section>
  );
};

export default ChangePassword;
