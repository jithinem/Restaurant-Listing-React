import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <div>
        <Card className='text-center'>
      <Card.Header>Address</Card.Header>
      <Card.Body>
        <Card.Title>Kochi</Card.Title>
        <Card.Text>
        Copyright © 2018 Tinny Cafe. All Rights Reserved
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Footer