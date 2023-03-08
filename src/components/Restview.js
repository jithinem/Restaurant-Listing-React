import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';


function Restview({review}) {
    console.log(review);
    const [open, setOpen] = useState(false);
  return (
    <>
       <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="success">
        View comments
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
              {
                review.map(item=>(
                    <div className='text-center'>
                       <h6>{item.name}</h6>
                       <p>{item.rating}</p>
                       <p>{item.comments}</p>
                    </div>
                ))
              }
            </Card>
          </div>
        </Collapse>
      </div>
    </>
  )
}

export default Restview