import React from 'react'
import { useState,useEffect } from 'react'
import Restcard from './Restcard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestListAction } from '../actions/restlistAction';
import { useDispatch, useSelector } from 'react-redux';

function Restlist() {
    //creating a state
    const [AllRestaurants, setAllRestaurants]=useState([])
    //function to call API to get data from restaurants.json
    const getRestaurants=async()=>{
        await fetch('./restaurants.json')
        .then((data)=>{
            // console.log(data);
            data.json()
            .then((result)=>{
                // console.log(result);
                setAllRestaurants(result.restaurants)
            })
        })
    }
    const dispatch=useDispatch();
    const result=useSelector(state=>state.restaurantReducer);
    console.log(result);
    const {restaurantList}=result;
    useEffect(()=>{
        // getRestaurants()
        dispatch(RestListAction())
    },[])

  return (
        <Row>
        {
            restaurantList?.map((item)=>(
                // <h1>{item.name}</h1>
                <Restcard restaurant={item}/>
            ))
        }
        </Row>
     
  )
}

export default Restlist