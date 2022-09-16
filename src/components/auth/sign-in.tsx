/* eslint-disable react/no-unescaped-entities */
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../reuseables/footer';
import Navbar from '../reuseables/navbar';

function SignIn() {
  const inputValues = {
    email: '',
    password: '',
  };
  const [inputVal, setInputVals] = useState(inputValues);
  const navigate = useNavigate();
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputVals({ ...inputVal, [name]: value });
  };
  const handleSubmit = () => {
    const { email, password } = inputVal;
    axios.post('auth/login', { email, password }).then((res) => {
      if (res.data.status === 'success') {
        JSON.parse(localStorage.setItem('token', res.data.token));
        navigate('/admin_dashboard');
      }
    });
  };
  const { email, password } = inputVal;
  return (
    <>
      <Navbar />
      <div className="signup py-5">
        <div className="container py-lg-2">
          <div className="row justify-content-center">
            <div className="signup__header text-center">
              <h1 className="signup__header--title pt-5 mt-5">Login</h1>
              <p className="py-2 py-lg-3">Become a part of an exclusive community for entrepreneurs and tech-enthusiasts.</p>
            </div>
            <div className="col-md-8 col-lg-9 ">
              <div className="signup__card p-3 p-lg-5 mx-auto mb-lg-5">
                <form>
                  <div className="py-2 px-lg-5">
                    <span>Email Address</span>
                    <input type="text" onChange={handleOnChange} value={email} name="email" className="name p-3 my-2  content__form--input form-control" />
                  </div>
                  <div className="py-2 px-lg-5">
                    <span>Password</span>
                    <input type="password" onChange={handleOnChange} value={password} name="password" className="name p-3 my-2  content__form--input form-control" />
                  </div>
                  <div className="py-2 px-lg-5">
                    <span>
                      <Link className="text-decoration-underline fw-bold link" to="/auth/forgot-password">Forgot Password</Link>
                    </span>
                  </div>
                  <div className="py-3 py-lg-4 px-lg-5 px-0 mx-0">
                    <button className="fw-bold py-3 px-5 me-0 content__form--btn" type="button" onClick={handleSubmit}>Login</button>
                  </div>
                  <div className="py-2 px-lg-5 text-dark">
                    Don't have an account?
                    <span>
                      <Link to="/auth/sign-up" className="link">  Sign Up</Link>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default SignIn;
