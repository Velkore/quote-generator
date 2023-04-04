import React, { useState } from "react";
import { Dropdown, Modal, Button, Form, Alert } from "react-bootstrap";
import axios from "axios";

function DeleteQuote(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [id, setId] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);

  const handleIdChange = (e) => {
    setId(e.target.value);
    setAlertMessage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!props.backendData.some((item) => item.id === Number(id))) {
      setAlertMessage("Quote with that ID does not exist");
      return;
    }
    try {
      const res = await axios.delete(`http://localhost:5000/api/quotes/${id}`);
      console.log(res.data);
      props.refreshList();
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
                min="1"
              />
            </Form.Group>
            {alertMessage && (
              <Alert
                variant="danger"
                onClose={() => setAlertMessage(null)}
                dismissible
              >
                {alertMessage}
              </Alert>
            )}
            <Button variant="danger" type="submit" className="mt-4">
              Delete
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DeleteQuote;
