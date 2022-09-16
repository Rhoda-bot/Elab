/* eslint-disable consistent-return */
/* eslint-disable react/no-unescaped-entities */
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../reuseables/footer';
import Navbar from '../reuseables/navbar';

function SignUp() {
  const inputValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    occupation: '',
  };
  const [errorMessage, setErrorMessage] = useState<any>();
  const [inputVal, setInputVals] = useState(inputValues);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputVals({ ...inputVal, [name]: value });
  };
  const handleSubmit = () => {
    if ((inputVal.password !== inputVal.confirmPassword)) return setErrorMessage('password and confirm password must be same');
    const form = new FormData();
    form.append('name', inputVal.name);
    form.append('email', inputVal.email);
    form.append('password', inputVal.password);
    form.append('confirmPassword', inputVal.confirmPassword);
    form.append('phone', inputVal.phone);
    form.append('occupation', inputVal.occupation);
    axios.post('https://elab-api.herokuapp.com/api/v1/auth/register', form).then((res) => console.log(res.data)).catch((err) => console.log(err));
  };
  const {
    name, email, password, confirmPassword, phone, occupation,
  } = inputVal;
  return (
    <>
      <Navbar />
      <div className="signup py-5">
        <div className="container py-lg-2">
          <div className="row justify-content-center">
            <div className="signup__header text-center">
              <h1 className="signup__header--title pt-5 mt-5">Sign Up</h1>
              <p className="py-2 py-lg-3">Become a part of an exclusive community for entrepreneurs and tech-enthusiasts.</p>
              {errorMessage && errorMessage}
            </div>
            <div className="col-md-8 col-lg-9 ">
              <div className="signup__card p-3 p-lg-5 mx-auto mb-lg-5">
                <form>
                  <div className="py-2 px-lg-5">
                    <span>Full Name</span>
                    <input type="text" name="name" value={name} onChange={handleOnChange} className=" p-3 my-2 content__form--input form-control" />
                  </div>
                  <div className="py-2 px-lg-5">
                    <span>Email Address</span>
                    <input type="text" name="email" value={email} onChange={handleOnChange} className=" p-3 my-2 content__form--input form-control" />
                  </div>
                  <div className="row py-2 px-lg-5">
                    <div className="col">
                      <span>Number</span>
                      <input type="text" name="phone" value={phone} onChange={handleOnChange} className="p-3 my-2 content__form--input form-control" aria-label="First name" />
                    </div>
                    <div className="col">
                      <span>Occupation</span>
                      <input type="text" name="occupation" value={occupation} onChange={handleOnChange} className="p-3 my-2 content__form--input form-control" aria-label="Last name" />
                    </div>
                  </div>
                  <div className="py-2 px-lg-5">
                    <span>Password</span>
                    <input type="text" name="password" value={password} onChange={handleOnChange} className="name p-3 my-2 content__form--input form-control" />
                  </div>
                  <div className="py-2 px-lg-5">
                    <span>Confirm Password</span>
                    <input type="text" name="confirmPassword" value={confirmPassword} onChange={handleOnChange} className="name p-3 my-2 content__form--input form-control" />
                  </div>
                  <div className="py-2 px-lg-5">
                    <span>
                      <Link className="text-decoration-underline fw-bold link" to="/auth/forgot-password">Forgot Password</Link>
                    </span>
                  </div>
                  <div className="py-3 py-lg-4 px-lg-5 px-0 mx-0">
                    <button className="fw-bold py-3 px-5 me-0 content__form--btn" type="button" onClick={handleSubmit}>Create your Account</button>
                  </div>
                  <div className="py-2 px-lg-5 text-dark">
                    Already have an account?
                    <span>
                      <Link to="/auth/sign-in" className="link">  Login</Link>
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
export default SignUp;
