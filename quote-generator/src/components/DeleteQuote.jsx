import React, { useState } from "react";
import { Dropdown, Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

function DeleteQuote() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [id, setId] = useState("");

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.delete(`http://localhost:5000/api/quotes/${id}`);
      console.log(res.data);
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Dropdown.Item as="button" onClick={handleShow}>
        Remove
      </Dropdown.Item>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Quote</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicId">
              <Form.Label>Quote ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter quote ID"
                value={id}
                onChange={handleIdChange}
                required
              />
            </Form.Group>
            <Button variant="danger" type="submit">
              Delete
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DeleteQuote;
