import React, { useState } from "react";
import { Button, Form, Toast} from "react-bootstrap";


import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";

import SocialLogin from "../SocialLogin/SocialLogin";

import auth from "../../../firebase.init";

const LogIn = () => {
    const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  
  const navigate = useNavigate();
  const location = useLocation();
  
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [sendPasswordResetEmail, sending]= useSendPasswordResetEmail(auth, {sendEmailVerification: true});
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  const handleForm = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  if (loading || sending) {
    return <h1>Loading ....</h1>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  const resetPassword = async () => {
      if ({email}) {
      await sendPasswordResetEmail(email);
    //   Toast("Sent email");
    } 
    else {
        console.log({email})
    //   Toast("please enter your email");
    }
  };
  return (
    <div>
      <div
        style={{ border: "1px solid black", height: "75vh" }}
        className="bg-primary w-50 mx-auto mt-5 "
      >
        <Form
          onSubmit={handleForm}
          className="w-50 mx-auto bg-white p-4 mt-5 shadow-lg p-3 mb-5 bg-white rounded"
          style={{ borderRadius: "10px" }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmail}
              type="email"
              placeholder="Enter your email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePassword}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <p>
            New to laptop warehouse?{" "}
            <Link to="/registration" className="text-decoration-none">please register</Link>{" "}
          </p>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          {errorElement}
          <p>
            Forget Password?{" "}
            <button
              className="btn btn-link text-primary pe-auto text-decoration-none"
              onClick={resetPassword}
            >
              Reset Password
            </button>{" "}
          </p>
        </Form>
        {/* <ToastContainer /> */}
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};


export default LogIn;