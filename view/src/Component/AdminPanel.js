//rafec
import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import "../Component/AdminPanel.css";
import Cards from "../Component/Cards.js";
import sdata from "../Data/filmdata";
const Swal = require('sweetalert2');


const AdminPanel = () => {

    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [count, setCount] = useState('');
    const [price, setPrice] = useState('');
    const [offer, setOffer] = useState('');
    const [image, setImage] = useState('');
    const [productList, setProductList] = useState([]);
    /*console.log(name);
    console.log(details);
    console.log(count);
    console.log(price);
    console.log(offer);
    console.log(image);*/

    function logout() {

        //removing products from cart
        Axios.post('http://localhost:3001/api/removeCart').then((response) => {
            setProductList(response.data);
        })


        localStorage.clear();
        window.location.href = 'http://localhost:3000';
    }


    function showcards(element) {

        return (
            <Cards
                key={element.id}
                count={element.count}
                description={element.details}
                imgsrc={element.image}
                title={element.name}
                offer={element.offer}
                price={element.price}


            />
        );

    }

    function addproduct() {
        if (name !== "" && price !== "") {
            Axios.post('http://localhost:3001/api/insertproduct', { name: name, details: details, count: count, price: price, offer: offer, image: image }).then(
                Swal.fire({
                    icon: 'success',
                    text: 'Product Adding Successful!',
                }).then(function () { window.location = "http://localhost:3000/admin"; })

            );
        }
        else {
            Swal.fire({
                icon: 'error',
                text: 'Invalid Information!',
            }).then(function () { window.location = "http://localhost:3000/admin"; })
        }
    }

    function isAlreadyExistProduct() {
        Axios.post('http://localhost:3001/api/isproductalreadyexist', { name: name }).then((response) => {
            //console.log(response.data.length);
            var length = response.data.length;
            if (length === 0) {
                addproduct();
            }
            else {
                // alert("Email already exist");
                Swal.fire({
                    icon: 'error',
                    text: 'Product Already Exist. You Can Only Update Now !',
                }).then(function () { });
            }

        });
    }

    function showAll() {
        Axios.post('http://localhost:3001/api/showall').then((response) => {
            setProductList(response.data);
        })


    }

    function updateProduct() {
        console.log("updateProduct")
        if (name !== "" && price !== "") {
            Axios.post('http://localhost:3001/api/updateproduct', { name: name, details: details, count: count, price: price, offer: offer, image: image }).then(
                Swal.fire({
                    icon: 'success',
                    text: 'Product Adding Successful!',
                }).then(function () { window.location = "http://localhost:3000/admin"; })

            );
        }
        else {
            Swal.fire({
                icon: 'error',
                text: 'Invalid Information!',
            }).then(function () { window.location = "http://localhost:3000/admin"; })
        }
    }

    function removeProduct() {
        console.log("removeProduct");
        Swal.fire({
            icon: '',
            text: 'Are You Sure To Remove This Product',
        }).then(function () { Axios.post('http://localhost:3001/api/removeproduct', { name: name }) })

    }


    return (
        <div>



            <div className="signout_button">
                <Button onClick={logout} variant="outline-primary" size="sm">Sign out</Button>

            </div>

            <h1>Welcome To Admin Panel</h1>

            <div>
                <Container>

                    <Row>
                        <Col>
                            <div>
                                <br /><br />
                                <h3>Add Product</h3>


                                <div className="form">
                                    <div className="productNameContainer"><input type="text" name="productName" placeholder="Product Name" className="productName" onChange={(e) => { setName(e.target.value) }} />
                                    </div>

                                    <div className="productDetailsContainer"><input type="text" name="productDetails" placeholder="Product Details" className="productDetails" onChange={(e) => setDetails(e.target.value)} />
                                    </div>

                                    <div className="productCountContainer"><input type="number" name="productCount" placeholder="Product Count" className="productCount" onChange={(e) => setCount(e.target.value)} />
                                    </div>

                                    <div className="productPriceContainer"><input type="number" name="productPrice" placeholder="Product Price" className="productPrice" onChange={(e) => setPrice(e.target.value)} />
                                    </div>


                                    <div className="productOfferContainer"><input type="text" name="productOffer" placeholder="Product Offer" className="productOffer" onChange={(e) => setOffer(e.target.value)} />
                                    </div>

                                    <div className="productImageContainer"><input type="url" name="productImage" placeholder="Product Image URL" className="productImage" onChange={(e) => setImage(e.target.value)} />
                                    </div>

                                    <div className="buttonContainer">
                                        <Button variant="outline-primary" size="sm" onClick={isAlreadyExistProduct} >Add</Button>
                                    </div>

                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <br /><br />
                                <h3>Update Product</h3>


                                <div className="form">
                                    <div className="productNameContainer"><input type="text" name="productName" placeholder="Product Name" className="productName" onChange={(e) => { setName(e.target.value) }} />
                                    </div>

                                    <div className="productDetailsContainer"><input type="text" name="productDetails" placeholder="Product Details" className="productDetails" onChange={(e) => setDetails(e.target.value)} />
                                    </div>

                                    <div className="productCountContainer"><input type="number" name="productCount" placeholder="Product Count" className="productCount" onChange={(e) => setCount(e.target.value)} />
                                    </div>

                                    <div className="productPriceContainer"><input type="number" name="productPrice" placeholder="Product Price" className="productPrice" onChange={(e) => setPrice(e.target.value)} />
                                    </div>


                                    <div className="productOfferContainer"><input type="text" name="productOffer" placeholder="Product Offer" className="productOffer" onChange={(e) => setOffer(e.target.value)} />
                                    </div>

                                    <div className="productImageContainer"><input type="url" name="productImage" placeholder="Product Image URL" className="productImage" onChange={(e) => setImage(e.target.value)} />
                                    </div>

                                    <div className="buttonContainer">
                                        <Button variant="outline-primary" size="sm" onClick={updateProduct}>Update</Button>
                                    </div>

                                </div>
                            </div>

                        </Col>
                        <Col>
                            <div>
                                <br /><br />
                                <h3>Remove Product</h3>


                                <div className="form">
                                    <div className="productNameContainer"><input type="text" name="productName" placeholder="Product Name" className="productName" onChange={(e) => { setName(e.target.value) }} />
                                    </div>


                                    <div className="buttonContainer">
                                        <Button variant="outline-primary" size="sm" onClick={removeProduct}>Remove</Button>
                                    </div>

                                </div>
                            </div>

                        </Col>
                        <Col>
                            <div>
                                <br /><br />
                                <h3>Show All Products</h3>

                                <div className="showAll_button">
                                    <br />

                                    <Row>
                                        <Col><Button onClick={showAll} variant="outline-primary" size="sm">show</Button></Col>

                                    </Row>






                                </div>

                            </div>

                        </Col>

                    </Row>
                </Container>
            </div>
            <br /><br /><br />
            <div className="showall">
                <div className="row">

                    {productList.map(showcards)}

                    );


                </div>

            </div>














        </div>
    )
}

export default AdminPanel
