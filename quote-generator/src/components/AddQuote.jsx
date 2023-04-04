import React, { useState } from "react";
import { Dropdown, Modal, Button, Form, Alert } from "react-bootstrap";
import axios from "axios";

function AddQuote(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    const author = document.getElementById("formItemAuth").value;
    const content = document.getElementById("formItemContent").value;
    axios
      .post("http://localhost:5000/api/quotes", { author, content })
      .then((response) => {
        //console.log(response);
        props.refreshList();
      })
      .catch((error) => {
        console.log(error);
      });
    setShow(false);
    props.setIsSuccess(true);
    setTimeout(() => props.setIsSuccess(false), 3000);
  };

  return (
    <>
      <Dropdown.Item as="button" onClick={handleShow}>
        Add
      </Dropdown.Item>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Quote</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formItemAuth">
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" placeholder="Enter author name" />
            </Form.Group>
            <Form.Group controlId="formItemContent">
              <Form.Label>Quote</Form.Label>
              <Form.Control type="text" placeholder="Enter quote" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddQuote;
