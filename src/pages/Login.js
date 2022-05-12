import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { API } from "./API";

const Login = () => {
  const navigate = useNavigate();
  const userValidationSchema = Yup.object({
    email: Yup.string().email().required("email must be filled in*"),
    pwd: Yup.string().min(5).max(15).required("password must be filled in*"),
  });
  const formik = useFormik({
    initialValues: { email: "", pwd: "" },
    validationSchema: userValidationSchema,
    onSubmit: (values) => {
     fetch(`${API}/users/${values.email}/${values.pwd}`).then((data) =>data.json()).then((exists)=> {exists?navigate('/dash'):navigate('/forgot')})
    },
  });

 
  
   

  return (
    <section className="text-light w-100">
      <h1 className="text-light my-5">Sign into your account</h1>
      <form onSubmit={formik.handleSubmit}>
      <label id="msg" className="text-danger"></label>
      <div className="form-group">
          <label htmlFor="email">Email</label>
          <div>
            {formik.touched.email && formik.errors.email ? (
              <label className="text-danger">{formik.errors.email}</label>
            ) : (
              ""
            )}
          </div>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password</label>
          <div>
            {formik.touched.pwd && formik.errors.pwd ? (
              <label className="text-danger">{formik.errors.pwd}</label>
            ) : (
              ""
            )}
          </div>
          <input
            type="password"
            className="form-control"
            id="pwd"
            name="pwd"
            value={formik.values.pwd}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <button type="submit" className="btn btn-primary my-2">
          Login
        </button>
        <div className="d-flex position-static p-2">
          <button
            type="button"
            className="btn btn-link mx-3"
            onClick={() => navigate("/forgot")}
          >
            Forgot Password
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

export default Login;
