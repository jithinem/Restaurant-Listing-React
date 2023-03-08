import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Resttop from './Resttop';
import Restview from './Restview';


function Viewrest() {
    const urlparams=useParams();
    console.log(urlparams);
    console.log(urlparams.id);
        //creating a state
        const [AllRestaurants, setAllRestaurants]=useState([])
        //function to call API to get data from restaurants.json
        const getRestaurants=async()=>{
            await fetch('/restaurants.json')
            .then((data)=>{
                // console.log(data);
                data.json()
                .then((result)=>{
                    // console.log(result);
                    setAllRestaurants(result.restaurants)
                })
            })
        }
        useEffect(()=>{
            getRestaurants()
        },[])
        const viewrest=AllRestaurants.find(item=>item.id==urlparams.id)
        console.log(viewrest);
    
    


  return (

    <>
       {
          /* viewrest?():'null' */
          viewrest?(
            <Row className='m-3'>
                <Col md={3} className='ms-5' >
                   <Image src={viewrest.photograph} fluid />
                </Col>
                <Col>
                    <ListGroup>
                    <ListGroup.Item><h1>{viewrest.name}</h1></ListGroup.Item>
                    <ListGroup.Item><h3>{viewrest.cuisine_type}</h3></ListGroup.Item>
                    <ListGroup.Item><h4>{viewrest.neighborhood}</h4></ListGroup.Item>
                    <ListGroup.Item><h6>{viewrest.address}</h6></ListGroup.Item>
                    <ListGroup.Item><Resttop operate={viewrest.operating_hours} /></ListGroup.Item>
                        <Restview review={viewrest.reviews} />

                    </ListGroup>
                </Col>
            </Row>
          ):'null'
       }
    </>
  )
}

export default Viewrest