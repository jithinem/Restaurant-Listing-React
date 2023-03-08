import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';



function Resttop({operate}) {
    console.log(operate);
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Opening time
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Opening Times</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup variant="flush">
      <ListGroup.Item>Monday:{operate.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday:{operate.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday:{operate.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday:{operate.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday:{operate.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday:{operate.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday:{operate.Sunday}</ListGroup.Item>

    </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Resttop