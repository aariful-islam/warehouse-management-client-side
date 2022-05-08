import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Registration = () => {
  const [agree, setAgree] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  if (loading) {
    return <h1>loading....</h1>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
    // console.log(e.target.value)
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setPassword(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);

    navigate("/");
  };

  return (
    <div
      style={{ border: "1px solid black", height: "650px" }}
      className="bg-primary w-50 mx-auto mt-5 d-flex align-items-center"
    >
      <Form
        onSubmit={handleFormSubmit}
        className="w-50 mx-auto bg-white p-4 mt-5 mb-3 shadow-lg p-3 mb-5 bg-white rounded"
        style={{ borderRadius: "10px" }}
      >
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onBlur={handleName}
            type="text"
            placeholder="Enter your name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmail}
            type="email"
            placeholder="Enter your email"
            required
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
            required
          />
        </Form.Group>

        <p>
          Already have accound? <Link to="/login">Please Log In</Link>
        </p>
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label className={`ps-2 ${agree ? "" : "text-danger"}`} htmlFor="terms">
          Accept Terms and Conditions
        </label> <br />
        <input
          disabled={!agree}
          className=" mx-auto btn btn-primary mt-2"
          type="submit"
          value="Register"
        />
      </Form>
    </div>
  );
};

export default Registration;
