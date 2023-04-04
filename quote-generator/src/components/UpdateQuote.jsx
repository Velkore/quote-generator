import React, { useState } from "react";
import { Dropdown, Modal, Button, Form, Alert } from "react-bootstrap";
import axios from "axios";

function UpdateQuote(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [alertMessage, setAlertMessage] = useState(null);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const author = document.getElementById("formUpdateAuthor").value;
    const content = document.getElementById("formUpdateQuote").value;
    const id = document.getElementById("formUpdateId").value;
    console.log(author, content, id);

    if (!props.backendData.some((item) => item.id === Number(id))) {
      setAlertMessage("Quote with that ID does not exist");
      return;
    }

    axios
      .patch(`http://localhost:5000/api/quotes/${id}`, { author, content, id })
      .then((response) => {
        console.log(response);
        props.refreshList();
        props.setIsSuccess(true);
        setTimeout(() => props.setIsSuccess(false), 3000);
      })
      .catch((error) => {
        console.log(error);
      });

    setShow(false);
  };

  return (
    <>
      <Dropdown.Item as="button" onClick={handleShow}>
        Update
      </Dropdown.Item>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Quote</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUpdateId">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter quote ID"
                required
                min="1"
              />
            </Form.Group>
            <Form.Group controlId="formUpdateAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" placeholder="Enter author name" />
            </Form.Group>
            <Form.Group controlId="formUpdateQuote">
              <Form.Label>Quote</Form.Label>
              <Form.Control type="text" placeholder="Enter quote" />
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleUpdate}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateQuote;
