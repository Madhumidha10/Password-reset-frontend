import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { API } from "./API";
const SignUp = () => {

  const navigate = useNavigate();
  const userValidationSchema = Yup.object({
    name: Yup.string().required("name must be filled in*"),
    email: Yup.string().email().required("email must be filled in*"),
    pwd: Yup.string().min(5).max(15).required("password must be filled in*"),
  });

  const formik = useFormik({
    initialValues: { name: "", email: "", pwd: "" },
    validationSchema: userValidationSchema,
    onSubmit: (values) => {
      
      const newUser = {
        name: values.name,
        email: values.email,
        password: values.pwd,
      };

      fetch(`${API}/users`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newUser),
      }).then((res) =>navigate('/dash') );
    },
  });

  

  return (
    <section className="text-light w-100">
      <h1 className="text-light my-5">Create An Account</h1>
      <form onSubmit={formik.handleSubmit} >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <div>
            {formik.touched.name && formik.errors.name ? (
              <label className="text-danger">{formik.errors.name}</label>
            ) : (
              ""
            )}
          </div>

          <input
            type="name"
            className="form-control"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
             
          />
        </div>

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
          Register
        </button>
        <div className="d-flex position-static p-2">
          <button
            type="button"
            className="btn btn-link mx-3"
            onClick={(e) => navigate("/login")}
          >
            Already have an acoount?
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
