import React from "react";
import { Button, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <h1 className="text-center">Get in touch</h1>

      <Form className="w-50 mx-auto my-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tell me your queries</Form.Label> <br />
          <textarea type="textArea" rows={5} required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
