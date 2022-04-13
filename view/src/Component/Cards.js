import React from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react'

import Axios from 'axios';
const Swal = require('sweetalert2');

const Cards = (props) => {


    function addToCart() {
        //alert(props.title);


        add();
        //show();


        // get user info 
        // add to cart
        //Cart system
    }
    function add() {
        Axios.post('http://localhost:3001/api/addToCart', { name: props.title, price: props.price }).then((response) => {

            //alert(response.data);
            Swal.fire(response.data);




        });
    }



    return (
        <div className="col">
            <Card border="dark" bg="dark" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imgsrc} />
                <Card.Body>
                    <Card.Title><h2>{props.title}</h2></Card.Title>
                    <Card.Text>
                        {"Details: " + props.description}


                    </Card.Text>
                    {"Current Offer: " + props.offer}
                    <Card.Text>

                    </Card.Text>
                    {"Available Quantity: " + props.count}
                    <Card.Text>

                    </Card.Text>
                    <Card.Text>
                        {"Price: " + props.price + " tk"}
                    </Card.Text>
                    <Button onClick={addToCart} variant="primary">{"Add to cart"}</Button>
                </Card.Body>
            </Card>



        </div>
    )

}

export default Cards
